package com.atos.newhire.backend.api;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Arrays;
import org.glassfish.jersey.client.spi.ConnectorProvider;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletResponse;
import org.apache.oltu.oauth2.client.HttpClient;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.view.RedirectView;
import com.auth0.jwt.exceptions.JWTCreationException;
import org.glassfish.hk2.api.MultiException;
import com.fasterxml.jackson.module.jaxb.JaxbAnnotationIntrospector;
import org.glassfish.jersey.jackson.internal.DefaultJacksonJaxbJsonProvider;
import org.jvnet.mimepull.MIMEParsingException;
import org.joda.time.DateTime;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.GetObjectRequest;
import com.amazonaws.services.s3.model.S3Object;
import com.atos.newhire.backend.DSConfiguration;
import com.atos.newhire.backend.common.WorkArguments;
import com.atos.newhire.backend.controller.eSignature.AbstractEsignatureController;
import com.atos.newhire.backend.controller.eSignature.EnvelopeHelpers;
import com.atos.newhire.backend.core.model.Session;
import com.atos.newhire.backend.core.model.User;
import com.atos.newhire.backend.model.Person;
import com.docusign.esign.api.EnvelopesApi;
import com.docusign.esign.client.ApiClient;
import com.docusign.esign.client.ApiException;
import com.docusign.esign.model.CarbonCopy;
import com.docusign.esign.model.Document;
import com.docusign.esign.model.EnvelopeDefinition;
import com.docusign.esign.model.EnvelopeDocument;
import com.docusign.esign.model.EnvelopeSummary;
import com.docusign.esign.model.RecipientViewRequest;
import com.docusign.esign.model.Recipients;
import com.docusign.esign.model.Signer;
import com.docusign.esign.model.ViewUrl;


@SuppressWarnings("unused")
@Controller("EmbeddedSigningController")
@RequestMapping("/sign")

public class EmbeddedSigningController extends AbstractEsignatureController  {
	

    private static final String DOCUMENT_FILE_NAME = "./src/main/resources/Personal-Details-Form.pdf";
    private static final String DOCUMENT_FILE_NAME2 = "./src/main/resources/Referees-Form.pdf";
    private static final String DOCUMENT_NAME = "Personal Details";
    private static final String DOCUMENT_NAME2 = "Referees Form";

    private static final int ANCHOR_OFFSET_Y = -2;
    private static final int ANCHOR_OFFSET_X = 35;
    private static final String SIGNER_CLIENT_ID = "1000";
    private static final String CCEMAIL = "email@gmail.com";

    private final Session session;
    private final User user;
    


    @Autowired
    public EmbeddedSigningController(DSConfiguration config, Session session, User user) {
        super(config, "sign", "Use embedded signing");
        this.session = session;
        this.user = user;
    }


    @Override
    protected Object doWork(WorkArguments args, ModelMap model,
                            HttpServletResponse response) throws ApiException, IOException {

        String signerName = args.getSignerName();
        String signerEmail = args.getSignerEmail();
        String accountId = session.getAccountId();

        // Step 1. Create the envelope definition
        EnvelopeDefinition envelope = makeEnvelope(signerEmail, signerName);

        // Step 2. Call DocuSign to create the envelope
        ApiClient apiClient = createApiClient(session.getBasePath(), user.getAccessToken());
        EnvelopesApi envelopesApi = new EnvelopesApi(apiClient);
        EnvelopeSummary envelopeSummary = envelopesApi.createEnvelope(accountId, envelope);

        String envelopeId = envelopeSummary.getEnvelopeId();
        session.setEnvelopeId(envelopeId);

        // Step 3. create the recipient view, the embedded signing
        RecipientViewRequest viewRequest = makeRecipientViewRequest(signerEmail, signerName);
        ViewUrl viewUrl = envelopesApi.createRecipientView(accountId, envelopeId, viewRequest);

        // Step 4. Redirect the user to the embedded signing

        return new RedirectView(viewUrl.getUrl());
    }

    private RecipientViewRequest makeRecipientViewRequest(String signerEmail, String signerName) {
        RecipientViewRequest viewRequest = new RecipientViewRequest();
        // Set the url where you want the recipient to go once they are done signing
        // should typically be a callback route somewhere in your app.
        // The query parameter is included as an example of how
        // to save/recover state information during the redirect to
        // the DocuSign signing.
        viewRequest.setReturnUrl(config.getDsReturnUrl() + "?state=Success");

        // How has your app authenticated the user? In addition to your app's
        // authentication, you can include authenticate steps from DocuSign.
        // Eg, SMS authentication
        viewRequest.setAuthenticationMethod("none");

        // Recipient information must match embedded recipient info
        // we used to create the envelope.
        viewRequest.setEmail(signerEmail);
        viewRequest.setUserName(signerName);
        viewRequest.setClientUserId(SIGNER_CLIENT_ID);

        // DocuSign recommends that you redirect to DocuSign for the
        // embedded signing. There are multiple ways to save state.
        // To maintain your application's session, use the pingUrl
        // parameter.
        viewRequest.setPingFrequency("600"); // seconds
        viewRequest.setPingUrl(config.getDsPingUrl());

        return viewRequest;
    }

    private static EnvelopeDefinition makeEnvelope(String signerEmail, String signerName) throws IOException {
        // Create a signer recipient to sign the document, identified by name and email
        // We set the clientUserId to enable embedded signing for the recipient
        Signer signer = new Signer();
        signer.setEmail(signerEmail);
        signer.setName(signerName);
        signer.clientUserId(SIGNER_CLIENT_ID);
        signer.recipientId("1");
        signer.setTabs(EnvelopeHelpers.createSingleSignerTab("Signature", ANCHOR_OFFSET_Y, ANCHOR_OFFSET_X));
        
        CarbonCopy cc = new CarbonCopy();
        cc.setEmail(CCEMAIL);
        cc.setName("HR");
        cc.recipientId("2");
        

        // Add the recipient to the envelope object
        Recipients recipients = new Recipients();
        recipients.setSigners(Arrays.asList(signer));
        recipients.setCarbonCopies(Arrays.asList(cc));

        EnvelopeDefinition envelopeDefinition = new EnvelopeDefinition();
        envelopeDefinition.setEmailSubject("Please sign this document");
        envelopeDefinition.setRecipients(recipients);
        
        Document doc = EnvelopeHelpers.createDocumentFromFile(DOCUMENT_FILE_NAME, DOCUMENT_NAME, "3");
        Document doc1 = EnvelopeHelpers.createDocumentFromFile(DOCUMENT_FILE_NAME2, DOCUMENT_NAME2, "4");

        envelopeDefinition.setDocuments(Arrays.asList(doc, doc1));

        envelopeDefinition.setStatus(EnvelopeHelpers.ENVELOPE_STATUS_SENT);

        return envelopeDefinition;
    }
}
//}