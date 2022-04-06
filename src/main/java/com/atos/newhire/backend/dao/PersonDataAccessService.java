package com.atos.newhire.backend.dao;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.*;
import com.atos.newhire.backend.model.Person;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.interactive.form.PDAcroForm;
import org.apache.pdfbox.pdmodel.interactive.form.PDField;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.servlet.mvc.method.annotation.StreamingResponseBody;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Repository("initDao")
public class PersonDataAccessService implements PersonDao {


    private static List<Person> DB = new ArrayList<>();
    private static Person currPerson;

    @Override
    public int insertPerson(UUID id, Person person) throws IOException {
        DB.add(new Person(person.getId(), person.getName(), person.getSurname(), person.getPrefName(), person.getGender(), person.getNi_num(), person.getTitle(), person.getDob(), person.getNationality(), person.getMarital(), person.getDate(), person.getAddress(), person.getTown(), person.getPostcode(), person.getMobile(), person.getCounty(), person.getPhone(), person.getEmerg_surname(), person.getEmerg_firstname(), person.getEmerg_phone(), person.getEmerg_address(), person.getEmerg_town(), person.getEmerg_postcode(), person.getEmerg_title(), person.getEmerg_relationship(), person.getEmerg_phoneother(), person.getEmerg_county(), person.getKin_surname(), person.getKin_forename(), person.getKin_nationality(), person.getKin_address(), person.getKin_phone(), person.getKin_gender(), person.getKin_dob(), person.getKin_relationship(), person.getPhysical() ,person.getCondition(), person.getSort() ,person.getAcc_num() ,person.getAcc_name() ,person.getExpense_sort() ,person.getExpense_acc_name() ,person.getExpense_acc_num() ,person.getCriminal() ,person.getPension(),person.getEmployee_num() ,person.getEmployment_start() ,person.getDate_entered_uk() ,person.getLicense_num() ,person.getCountry_of_issue() ,person.getEmail() ,person.getRef1_name() ,person.getRef1_jobTitle() ,person.getRef1_company() ,person.getRef1_address_line1() ,person.getRef1_address_line2() ,person.getRef1_address_line3() ,person.getRef1_phone() ,person.getRef1_email() ,person.getRef1_employ_start() ,person.getRef1_employ_end() ,person.getRef2_name() ,person.getRef2_jobTitle() ,person.getRef2_company() ,person.getRef2_address_line1() ,person.getRef2_address_line2() ,person.getRef2_address_line3() ,person.getRef2_phone() ,person.getRef2_email() ,person.getRef2_employ_start() ,person.getRef2_employ_end() ,person.getRef3_name() ,person.getRef3_jobTitle() ,person.getRef3_company() ,person.getRef3_address_line1() ,person.getRef3_address_line2() ,person.getRef3_address_line3() ,person.getRef3_phone() ,person.getRef3_email() ,person.getRef3_employ_start() ,person.getRef3_employ_end() ,person.getRef4_name() ,person.getRef4_jobTitle() ,person.getRef4_company() ,person.getRef4_address_line1() ,person.getRef4_address_line2(), person.getRef4_address_line3() ,person.getRef4_phone() ,person.getRef4_email(), person.getRef4_employ_start() ,person.getRef4_employ_end(), person.getCb_HMRC1A(), person.getCb_HMRC1B(), person.getCb_HMRC1C(), person.getCb2_yes(), person.getCb2_no(), person.getCb2_yes(), person.getCb2_no(), person.getCb3_yes(), person.getCb3_no(), person.getCb4_yes(), person.getCb4_no(), person.getCb_plan1(), person.getCb_plan2(), person.getCb_planBoth(), person.getCb6_yes(), person.getCb7_no(), person.getCb8_yes(), person.getCb8_no(),person.getLanguage1(),person.getLanguage2(),person.getLanguage3(),person.getLanguage4(),person.getLanguage5(),person.getLanguageRead1(),person.getLanguageRead2(), person.getLanguageRead3(), person.getLanguageRead4(), person.getLanguage5(), person.getLanguageWrite1(),person.getLanguageWrite2(),person.getLanguageWrite3(),person.getLanguageWrite4(),person.getLanguageWrite5(),person.getLanguageSpeak1(),person.getLanguageSpeak2(),person.getLanguageSpeak3(), person.getLanguageSpeak4(), person.getLanguageSpeak5(), person.getEducationDate1(),person.getEducationDate2(),person.getEducationLevel1(),person.getEducationLevel2(),person.getQualificationsDate1(),person.getQualificationsDate2(),person.getQualificationsDate3(),person.getQualificationsLevel1(),person.getQualificationsLevel2(),person.getQualificationsLevel3(), person.getCb_assoc_with_org(), person.getCb_not_assoc_with_org(), person.getName_of_employee_driver(), person.getCb_company_car(), person.getCb_car_on_business(), person.getCb_pool_vehicle(), person.getCb_occasionally(), person.getMiddle_initial(), person.getDiv_name(), person.getDiv_A1(), person.getDiv_A2(), person.getDiv_A3(), person.getDiv_Aoth(), person.getDiv_B1(), person.getDiv_B2(), person.getDiv_B3(), person.getDiv_B4(), person.getDiv_Both(), person.getDiv_C1(), person.getDiv_C2(), person.getDiv_C3(), person.getDiv_C4(), person.getDiv_Coth(), person.getDiv_D1(), person.getDiv_D2(), person.getDiv_D3(), person.getDiv_Doth(), person.getDiv_E1(), person.getDiv_E2(), person.getDiv_Eoth(), person.getDiv_F1(), person.getDiv_GY(), person.getDiv_GN(), person.getDiv_Gdetails(), person.getDiv_HH(), person.getDiv_HG(), person.getDiv_HL(), person.getDiv_HB(), person.getDiv_HO(), person.getNominee1(), person.getNominee1_address(), person.getNominee1_benefit(),
                person.getNominee2(), person.getNominee2_address(), person.getNominee2_benefit(),
                person.getNominee3(), person.getNominee3_address(), person.getNominee3_benefit(),
                person.getNominee4(), person.getNominee4_address(), person.getNominee4_benefit()
        ));
        currPerson = person;
        fillDocs();
        return 1;
    }

    @Override
    public List<Person> getAllPeople() {
        return DB;
    }


    @Override
    public ResponseEntity<StreamingResponseBody> getForms(String filename, boolean empty) throws IOException {

        String path;

        if (empty) {
            path = "empty-pdfs/";
        } else {
            path = "filled-pdfs/";
        }

        BasicAWSCredentials awsCreds = new BasicAWSCredentials("AKIAZ6F7EURISWOB225X", "u162Pf7/l9HbbQS3n5ybG1WChTTeFzgxTfWOO21d");
        AmazonS3 s3Client = AmazonS3ClientBuilder.standard()
                .withCredentials(new AWSStaticCredentialsProvider(awsCreds))
                .withRegion("us-west-2").build();


        System.out.println("DEBUGGINGER: " + path+filename);
        S3Object object10 = s3Client.getObject(new GetObjectRequest("elasticbeanstalk-us-west-2-683300660305", path + filename));
        S3ObjectInputStream finalObject = object10.getObjectContent();

        final StreamingResponseBody body = outputStream -> {
            int numberOfBytesToWrite = 0;
            byte[] data = new byte[1024];
            while ((numberOfBytesToWrite = finalObject.read(data, 0, data.length)) != -1) {
                outputStream.write(data, 0, numberOfBytesToWrite);
            }
            finalObject.close();
        };
        return new ResponseEntity<>(body, HttpStatus.OK);
    }


    @Override
    public Person getCurrentPerson() {
        return currPerson;
    }


    private void fillDocs() throws IOException {

        System.out.println("Testing 1");

        BasicAWSCredentials awsCreds = new BasicAWSCredentials("AKIAZ6F7EURISWOB225X", "u162Pf7/l9HbbQS3n5ybG1WChTTeFzgxTfWOO21d");
        AmazonS3 s3Client = AmazonS3ClientBuilder.standard()
                .withCredentials(new AWSStaticCredentialsProvider(awsCreds))
                .withRegion("us-west-2").build();

        S3Object object = s3Client.getObject(new GetObjectRequest("elasticbeanstalk-us-west-2-683300660305", "empty-pdfs/Personal-Details-Form.pdf"));
        InputStream personalDetailsForm = object.getObjectContent();

        PDDocument pDDocument = PDDocument.load(personalDetailsForm);
        PDAcroForm pDAcroForm = pDDocument.getDocumentCatalog().getAcroForm();

        //

        System.out.println("Testing 2");


        S3Object object2 = s3Client.getObject(new GetObjectRequest("elasticbeanstalk-us-west-2-683300660305", "empty-pdfs/Bank-Details-Form.pdf"));
        InputStream bankDetails = object2.getObjectContent();

        PDDocument bankDetailsForm = PDDocument.load(bankDetails);
        PDAcroForm bankDetailsForm2 = bankDetailsForm.getDocumentCatalog().getAcroForm();

        //

        System.out.println("Testing 3");


        S3Object object3 = s3Client.getObject(new GetObjectRequest("elasticbeanstalk-us-west-2-683300660305", "empty-pdfs/Criminal-Record-Declaration.pdf"));
        InputStream criminalDetails = object3.getObjectContent();

        PDDocument criminalDeclaration = PDDocument.load(criminalDetails);
        PDAcroForm criminalDeclaration2 = criminalDeclaration.getDocumentCatalog().getAcroForm();

        //

        System.out.println("Testing 4");


        S3Object object4 = s3Client.getObject(new GetObjectRequest("elasticbeanstalk-us-west-2-683300660305", "empty-pdfs/Diversity-Monitoring.pdf"));
        InputStream diversityMonitoringForm = object4.getObjectContent();

        PDDocument diversityMonitoring = PDDocument.load(diversityMonitoringForm);
        PDAcroForm diversityMonitoring2 = diversityMonitoring.getDocumentCatalog().getAcroForm();

        //

        System.out.println("Testing 5");


        S3Object object5 = s3Client.getObject(new GetObjectRequest("elasticbeanstalk-us-west-2-683300660305", "empty-pdfs/Life-Assurance.pdf"));
        InputStream lifeAssuranceForm = object5.getObjectContent();

        PDDocument lifeAssurance = PDDocument.load(lifeAssuranceForm);
        PDAcroForm lifeAssurance2 = lifeAssurance.getDocumentCatalog().getAcroForm();

        //

        System.out.println("Testing 6");


        S3Object object6 = s3Client.getObject(new GetObjectRequest("elasticbeanstalk-us-west-2-683300660305", "empty-pdfs/Referees-Form.pdf"));
        InputStream refereesForm = object6.getObjectContent();

        PDDocument refereeForm = PDDocument.load(refereesForm);
        PDAcroForm refereeForm2 = refereeForm.getDocumentCatalog().getAcroForm();

        //

        S3Object object7 = s3Client.getObject(new GetObjectRequest("elasticbeanstalk-us-west-2-683300660305", "empty-pdfs/HMRC-Checklist.pdf"));
        InputStream hmrcCheckListForm = object7.getObjectContent();

        PDDocument hmrcChecklist = PDDocument.load(hmrcCheckListForm);
        PDAcroForm hmrcChecklist2 = hmrcChecklist.getDocumentCatalog().getAcroForm();

        //

        S3Object object8 = s3Client.getObject(new GetObjectRequest("elasticbeanstalk-us-west-2-683300660305", "empty-pdfs/Driver-Fair-Processing.pdf"));
        InputStream driversFairProcessingForm = object8.getObjectContent();

        PDDocument driverFairProcessing = PDDocument.load(driversFairProcessingForm);
        PDAcroForm driverFairProcessing2 = driverFairProcessing.getDocumentCatalog().getAcroForm();


        fillPersonalDetails(pDAcroForm);
        fillBankDetails(bankDetailsForm2);
        fillCriminalDetails(criminalDeclaration2);
        fillDiversityDetails(diversityMonitoring2);
        fillLifeAssuranceDetails(lifeAssurance2);
        fillRefereeDetails(refereeForm2);
        fillHMRCDetails(hmrcChecklist2);
        fillDriverDetails(driverFairProcessing2);

        //
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        pDDocument.save(byteArrayOutputStream);
        pDDocument.close();
        InputStream inputStream = new ByteArrayInputStream(byteArrayOutputStream.toByteArray());

        ObjectMetadata meta = new ObjectMetadata();
        meta.setContentLength(inputStream.available());
        s3Client.putObject(new PutObjectRequest("elasticbeanstalk-us-west-2-683300660305", "filled-pdfs/Personal-Details-Form.pdf", inputStream, meta)
                .withCannedAcl(CannedAccessControlList.Private));
        //
        ByteArrayOutputStream byteArrayOutputStream2 = new ByteArrayOutputStream();
        bankDetailsForm.save(byteArrayOutputStream2);
        bankDetailsForm.close();
        InputStream inputStream2 = new ByteArrayInputStream(byteArrayOutputStream2.toByteArray());

        ObjectMetadata meta2 = new ObjectMetadata();
        meta.setContentLength(inputStream2.available());
        s3Client.putObject(new PutObjectRequest("elasticbeanstalk-us-west-2-683300660305", "filled-pdfs/Bank-Details-Form.pdf", inputStream2, meta2)
                .withCannedAcl(CannedAccessControlList.Private));
        //
        ByteArrayOutputStream byteArrayOutputStream3 = new ByteArrayOutputStream();
        criminalDeclaration.save(byteArrayOutputStream3);
        criminalDeclaration.close();
        InputStream inputStream3 = new ByteArrayInputStream(byteArrayOutputStream3.toByteArray());

        ObjectMetadata meta3 = new ObjectMetadata();
        meta.setContentLength(inputStream3.available());
        s3Client.putObject(new PutObjectRequest("elasticbeanstalk-us-west-2-683300660305", "filled-pdfs/Criminal-Record-Declaration.pdf", inputStream3, meta3)
                .withCannedAcl(CannedAccessControlList.Private));
        //
        ByteArrayOutputStream byteArrayOutputStream4 = new ByteArrayOutputStream();
        diversityMonitoring.save(byteArrayOutputStream4);
        diversityMonitoring.close();
        InputStream inputStream4 = new ByteArrayInputStream(byteArrayOutputStream4.toByteArray());

        ObjectMetadata meta4 = new ObjectMetadata();
        meta.setContentLength(inputStream4.available());
        s3Client.putObject(new PutObjectRequest("elasticbeanstalk-us-west-2-683300660305", "filled-pdfs/Diversity-Monitoring.pdf", inputStream4, meta4)
                .withCannedAcl(CannedAccessControlList.Private));
        //

      //--

        //
        ByteArrayOutputStream byteArrayOutputStream6 = new ByteArrayOutputStream();
        lifeAssurance.save(byteArrayOutputStream6);
        lifeAssurance.close();
        InputStream inputStream6 = new ByteArrayInputStream(byteArrayOutputStream6.toByteArray());

        ObjectMetadata meta6 = new ObjectMetadata();
        meta.setContentLength(inputStream6.available());
        s3Client.putObject(new PutObjectRequest("elasticbeanstalk-us-west-2-683300660305", "filled-pdfs/Life-Assurance.pdf", inputStream6, meta6)
                .withCannedAcl(CannedAccessControlList.Private));
        //
        ByteArrayOutputStream byteArrayOutputStream7 = new ByteArrayOutputStream();
        refereeForm.save(byteArrayOutputStream7);
        refereeForm.close();
        InputStream inputStream7 = new ByteArrayInputStream(byteArrayOutputStream7.toByteArray());

        ObjectMetadata meta7 = new ObjectMetadata();
        meta.setContentLength(inputStream7.available());
        s3Client.putObject(new PutObjectRequest("elasticbeanstalk-us-west-2-683300660305", "filled-pdfs/Referees-Form.pdf", inputStream7, meta7)
                .withCannedAcl(CannedAccessControlList.Private));
        //
        ByteArrayOutputStream byteArrayOutputStream8 = new ByteArrayOutputStream();
        hmrcChecklist.save(byteArrayOutputStream8);
        hmrcChecklist.close();
        InputStream inputStream8 = new ByteArrayInputStream(byteArrayOutputStream8.toByteArray());

        ObjectMetadata meta8 = new ObjectMetadata();
        meta.setContentLength(inputStream8.available());
        s3Client.putObject(new PutObjectRequest("elasticbeanstalk-us-west-2-683300660305", "filled-pdfs/HMRC-Checklist.pdf", inputStream8, meta8)
                .withCannedAcl(CannedAccessControlList.Private));
        //
        ByteArrayOutputStream byteArrayOutputStream9 = new ByteArrayOutputStream();
        driverFairProcessing.save(byteArrayOutputStream9);
        driverFairProcessing.close();
        InputStream inputStream9 = new ByteArrayInputStream(byteArrayOutputStream9.toByteArray());

        ObjectMetadata meta9 = new ObjectMetadata();
        meta.setContentLength(inputStream9.available());
        s3Client.putObject(new PutObjectRequest("elasticbeanstalk-us-west-2-683300660305", "filled-pdfs/Driver-Fair-Processing.pdf", inputStream9, meta9)
                .withCannedAcl(CannedAccessControlList.Private));


    }

    private void fillPersonalDetails(PDAcroForm pDAcroForm) throws IOException {
        PDField field;

        field = pDAcroForm.getField("full-name");
        field.setValue(currPerson.getName() + " " + currPerson.getSurname());

        field = pDAcroForm.getField("first-name");
        field.setValue(currPerson.getName());

        field = pDAcroForm.getField("last-name");
        field.setValue(currPerson.getSurname());

        /*field = pDAcroForm.getField("pref-name");
        field.setValue(currPerson.getPrefName());*/

        field = pDAcroForm.getField("title");
        field.setValue(currPerson.getTitle());

        field = pDAcroForm.getField("gender");
        field.setValue(currPerson.getGender());

        field = pDAcroForm.getField("marital");
        field.setValue(currPerson.getMarital());

        field = pDAcroForm.getField("ni-number");
        field.setValue(currPerson.getNi_num());

        field = pDAcroForm.getField("dob");
        field.setValue(currPerson.getDob());

        field = pDAcroForm.getField("nationality");
        field.setValue(currPerson.getNationality());

        field = pDAcroForm.getField("address");
        field.setValue(currPerson.getAddress());

        field = pDAcroForm.getField("town");
        field.setValue(currPerson.getTown());

        field = pDAcroForm.getField("postcode");
        field.setValue(currPerson.getPostcode());

        field = pDAcroForm.getField("county");
        field.setValue(currPerson.getCounty());

        field = pDAcroForm.getField("phone");
        field.setValue(currPerson.getPhone());

        field = pDAcroForm.getField("mobile");
        field.setValue(currPerson.getPhone());

        //

        field = pDAcroForm.getField("emerg-surname");
        field.setValue(currPerson.getEmerg_surname());

        field = pDAcroForm.getField("emerg-firstname");
        field.setValue(currPerson.getEmerg_firstname());

        field = pDAcroForm.getField("emerg-phone");
        field.setValue(currPerson.getEmerg_phone());

        field = pDAcroForm.getField("emerg-address");
        field.setValue(currPerson.getEmerg_address());

        field = pDAcroForm.getField("emerg-town");
        field.setValue(currPerson.getEmerg_town());

        field = pDAcroForm.getField("emerg-postcode");
        field.setValue(currPerson.getEmerg_postcode());

        field = pDAcroForm.getField("emerg-title");
        field.setValue(currPerson.getEmerg_title());

        field = pDAcroForm.getField("emerg-relationship");
        field.setValue(currPerson.getEmerg_relationship());

        field = pDAcroForm.getField("emerg-phone-other");
        field.setValue(currPerson.getEmerg_phoneother());

        field = pDAcroForm.getField("emerg-county");
        field.setValue(currPerson.getEmerg_county());

        //
        field = pDAcroForm.getField("kin-surname");
        field.setValue(currPerson.getKin_surname());

        field = pDAcroForm.getField("kin-forename");
        field.setValue(currPerson.getKin_forename());

        field = pDAcroForm.getField("kin-nationality");
        field.setValue(currPerson.getKin_nationality());

        field = pDAcroForm.getField("kin-address");
        field.setValue(currPerson.getKin_address());

        field = pDAcroForm.getField("kin-phone");
        field.setValue(currPerson.getKin_phone());

        field = pDAcroForm.getField("kin-gender");
        field.setValue(currPerson.getKin_gender());

        field = pDAcroForm.getField("kin-dob");
        field.setValue(currPerson.getKin_dob());

        field = pDAcroForm.getField("kin-relationship");
        field.setValue(currPerson.getKin_relationship());

        field = pDAcroForm.getField("physical");
        field.setValue(currPerson.getPhysical());

        field = pDAcroForm.getField("medical");
        field.setValue(currPerson.getCondition());

        field = pDAcroForm.getField("language1");
        field.setValue(currPerson.getLanguage1());

        field = pDAcroForm.getField("language2");
        field.setValue(currPerson.getLanguage2());

        field = pDAcroForm.getField("language3");
        field.setValue(currPerson.getLanguage3());

        field = pDAcroForm.getField("language4");
        field.setValue(currPerson.getLanguage4());

        field = pDAcroForm.getField("language5");
        field.setValue(currPerson.getLanguage5());

        field = pDAcroForm.getField("languageWrite1");
        field.setValue(currPerson.getLanguageWrite1());

        field = pDAcroForm.getField("languageWrite2");
        field.setValue(currPerson.getLanguageWrite2());

        field = pDAcroForm.getField("languageWrite3");
        field.setValue(currPerson.getLanguageWrite3());

        field = pDAcroForm.getField("languageWrite4");
        field.setValue(currPerson.getLanguageWrite4());

        field = pDAcroForm.getField("languageWrite5");
        field.setValue(currPerson.getLanguageWrite5());

        field = pDAcroForm.getField("languageRead1");
        field.setValue(currPerson.getLanguageRead1());

        field = pDAcroForm.getField("languageRead2");
        field.setValue(currPerson.getLanguageRead2());

        field = pDAcroForm.getField("languageRead3");
        field.setValue(currPerson.getLanguageRead3());

        field = pDAcroForm.getField("languageRead4");
        field.setValue(currPerson.getLanguageRead4());

        field = pDAcroForm.getField("languageRead5");
        field.setValue(currPerson.getLanguageRead5());

        field = pDAcroForm.getField("languageSpeak1");
        field.setValue(currPerson.getLanguageSpeak1());

        field = pDAcroForm.getField("languageSpeak2");
        field.setValue(currPerson.getLanguageSpeak2());

        field = pDAcroForm.getField("languageSpeak3");
        field.setValue(currPerson.getLanguageSpeak3());

        field = pDAcroForm.getField("languageSpeak4");
        field.setValue(currPerson.getLanguageSpeak4());

        field = pDAcroForm.getField("languageSpeak5");
        field.setValue(currPerson.getLanguageSpeak5());

        field = pDAcroForm.getField("educationDate1");
        field.setValue(currPerson.getEducationDate1());

        field = pDAcroForm.getField("educationDate2");
        field.setValue(currPerson.getEducationDate2());

        field = pDAcroForm.getField("educationLevel1");
        field.setValue(currPerson.getEducationLevel1());

        field = pDAcroForm.getField("educationLevel2");
        field.setValue(currPerson.getEducationLevel2());

        field = pDAcroForm.getField("qualificationsDate1");
        field.setValue(currPerson.getQualificationsDate1());

        field = pDAcroForm.getField("qualificationsDate2");
        field.setValue(currPerson.getQualificationsDate2());

        field = pDAcroForm.getField("qualificationsDate3");
        field.setValue(currPerson.getQualificationsDate3());

        field = pDAcroForm.getField("qualificationsLevel1");
        field.setValue(currPerson.getQualificationsLevel1());

        field = pDAcroForm.getField("qualificationsLevel2");
        field.setValue(currPerson.getQualificationsLevel2());

        field = pDAcroForm.getField("qualificationsLevel3");
        field.setValue(currPerson.getQualificationsLevel3());









    }

    public static void fillBankDetails(PDAcroForm bankDetailsForm2) throws IOException {

        PDField field;

        field = bankDetailsForm2.getField("name");
        field.setValue(currPerson.getName() + " " + currPerson.getSurname());

        field = bankDetailsForm2.getField("ni-num");
        field.setValue(currPerson.getNi_num());

        field = bankDetailsForm2.getField("sort");
        field.setValue(currPerson.getSort());

        field = bankDetailsForm2.getField("acc-num");
        field.setValue(currPerson.getAcc_num());

        field = bankDetailsForm2.getField("acc-name");
        field.setValue(currPerson.getAcc_name());

        field = bankDetailsForm2.getField("expense-sort");
        field.setValue(currPerson.getExpense_sort());

        field = bankDetailsForm2.getField("expense-acc-num");
        field.setValue(currPerson.getExpense_acc_num());

        field = bankDetailsForm2.getField("expense-acc-name");
        field.setValue(currPerson.getExpense_acc_name());
    }

    public static void fillCriminalDetails(PDAcroForm criminalDeclaration2) throws IOException {

        PDField field;

        field = criminalDeclaration2.getField("last-name");
        field.setValue(currPerson.getSurname());

        field = criminalDeclaration2.getField("first-name");
        field.setValue(currPerson.getName());

        field = criminalDeclaration2.getField("address");
        field.setValue(currPerson.getAddress());

        field = criminalDeclaration2.getField("postcode");
        field.setValue(currPerson.getPostcode());

        field = criminalDeclaration2.getField("dob");
        field.setValue(currPerson.getDob());

        field = criminalDeclaration2.getField("criminal");
        field.setValue(currPerson.getCriminal());
    }

    public static void fillDiversityDetails(PDAcroForm diversityMonitoring2) throws IOException {
		PDField field;

		field = diversityMonitoring2.getField("div_name");
		field.setValue(currPerson.getName() + currPerson.getSurname());

        field = diversityMonitoring2.getField("div_A1");
        if (currPerson.getDiv_A1().equals("true")) { field.setValue("X"); }

        field = diversityMonitoring2.getField("div_A2");
        if (currPerson.getDiv_A2().equals("true")) { field.setValue("X"); }

        field = diversityMonitoring2.getField("div_A3");
        if (currPerson.getDiv_A3().equals("true")) { field.setValue("X"); }

        field = diversityMonitoring2.getField("div_Aoth");
        field.setValue(currPerson.getDiv_Aoth());

        field = diversityMonitoring2.getField("div_B1");
        if (currPerson.getDiv_B1().equals("true")) { field.setValue("X"); }

        field = diversityMonitoring2.getField("div_B2");
        if (currPerson.getDiv_B2().equals("true")) { field.setValue("X"); }

        field = diversityMonitoring2.getField("div_B3");
        if (currPerson.getDiv_B3().equals("true")) { field.setValue("X"); }

        field = diversityMonitoring2.getField("div_B4");
        if (currPerson.getDiv_B4().equals("true")) { field.setValue("X"); }

        field = diversityMonitoring2.getField("div_Both");
        field.setValue(currPerson.getDiv_Both());

        field = diversityMonitoring2.getField("div_C1");
        if (currPerson.getDiv_C1().equals("true")) { field.setValue("X"); }

        field = diversityMonitoring2.getField("div_C2");
        if (currPerson.getDiv_C2().equals("true")) { field.setValue("X"); }

        field = diversityMonitoring2.getField("div_C3");
        if (currPerson.getDiv_C3().equals("true")) { field.setValue("X"); }

        field = diversityMonitoring2.getField("div_C4");
        if (currPerson.getDiv_C4().equals("true")) { field.setValue("X"); }

        field = diversityMonitoring2.getField("div_Coth");
        field.setValue(currPerson.getDiv_Coth());

        field = diversityMonitoring2.getField("div_D1");
        if (currPerson.getDiv_D1().equals("true")) { field.setValue("X"); }

        field = diversityMonitoring2.getField("div_D2");
        if (currPerson.getDiv_D2().equals("true")) { field.setValue("X"); }

        field = diversityMonitoring2.getField("div_D3");
        if (currPerson.getDiv_D3().equals("true")) { field.setValue("X"); }

        field = diversityMonitoring2.getField("div_Doth");
        field.setValue(currPerson.getDiv_Doth());

        field = diversityMonitoring2.getField("div_E1");
        if (currPerson.getDiv_E1().equals("true")) { field.setValue("X"); }

        field = diversityMonitoring2.getField("div_E2");
        if (currPerson.getDiv_E2().equals("true")) { field.setValue("X"); }

        field = diversityMonitoring2.getField("div_Eoth");
        field.setValue(currPerson.getDiv_Eoth());

        field = diversityMonitoring2.getField("div_F1");
        if (currPerson.getDiv_F1().equals("true")) { field.setValue("X"); }

        field = diversityMonitoring2.getField("div_GY");
        if (currPerson.getDiv_GY().equals("true")) { field.setValue("X"); }

        field = diversityMonitoring2.getField("div_GN");
        if (currPerson.getDiv_GN().equals("true")) { field.setValue("X"); }

        field = diversityMonitoring2.getField("div_Gdetails");
        field.setValue(currPerson.getDiv_Gdetails());

        field = diversityMonitoring2.getField("div_HH");
        if (currPerson.getDiv_HH().equals("true")) { field.setValue("X"); }

        field = diversityMonitoring2.getField("div_HG");
        if (currPerson.getDiv_HG().equals("true")) { field.setValue("X"); }

        field = diversityMonitoring2.getField("div_HL");
        if (currPerson.getDiv_HL().equals("true")) { field.setValue("X"); }

        field = diversityMonitoring2.getField("div_HB");
        if (currPerson.getDiv_HB().equals("true")) { field.setValue("X"); }

        field = diversityMonitoring2.getField("div_HO");
        if (currPerson.getDiv_HO().equals("true")) { field.setValue("X"); }
	}

    public static void fillLifeAssuranceDetails(PDAcroForm lifeAssurance2) throws IOException {
		PDField field;

		field = lifeAssurance2.getField("pension");
		field.setValue(currPerson.getPension());

		field = lifeAssurance2.getField("first-name");
		field.setValue(currPerson.getName());

		field = lifeAssurance2.getField("last-name");
		field.setValue(currPerson.getSurname());

		field = lifeAssurance2.getField("employee-num");
		field.setValue(currPerson.getEmployee_num());

		field = lifeAssurance2.getField("ni-num");
		field.setValue(currPerson.getNi_num());

        field = lifeAssurance2.getField("nominee1");
        field.setValue(currPerson.getNominee1());

        field = lifeAssurance2.getField("nominee2");
        field.setValue(currPerson.getNominee2());

        field = lifeAssurance2.getField("nominee3");
        field.setValue(currPerson.getNominee3());

        field = lifeAssurance2.getField("nominee1_address");
        field.setValue(currPerson.getNominee1_address());

        field = lifeAssurance2.getField("nominee2_address");
        field.setValue(currPerson.getNominee2_address());

        field = lifeAssurance2.getField("nominee3_address");
        field.setValue(currPerson.getNominee3_address());

        field = lifeAssurance2.getField("nominee1_benefit");
        field.setValue(currPerson.getNominee1_benefit());

        field = lifeAssurance2.getField("nominee2_benefit");
        field.setValue(currPerson.getNominee2_benefit());

        field = lifeAssurance2.getField("nominee3_benefit");
        field.setValue(currPerson.getNominee3_benefit());



	}

    public static void fillRefereeDetails(PDAcroForm refereeForm2) throws IOException {
		PDField field;

		field = refereeForm2.getField("full-name");
		field.setValue(currPerson.getFirstName() + " " + currPerson.getSurname());

		field = refereeForm2.getField("date");
		field.setValue(currPerson.getDate());

        //ref 1
        field = refereeForm2.getField("ref1_name");
        field.setValue(currPerson.getRef1_name());

        field = refereeForm2.getField("ref1_jobTitle");
        field.setValue(currPerson.getRef1_jobTitle());

        field = refereeForm2.getField("ref1_company");
        field.setValue(currPerson.getRef1_company());

        field = refereeForm2.getField("ref1_address_line1");
        field.setValue(currPerson.getRef1_address_line1());

        field = refereeForm2.getField("ref1_address_line2");
        field.setValue(currPerson.getRef1_address_line2());

        field = refereeForm2.getField("ref1_address_line3");
        field.setValue(currPerson.getRef1_address_line3());

        field = refereeForm2.getField("ref1_phone");
        field.setValue(currPerson.getRef1_phone());

        field = refereeForm2.getField("ref1_employ_start");
        field.setValue(currPerson.getRef1_employ_start());

        field = refereeForm2.getField("ref1_employ_end");
        field.setValue(currPerson.getRef1_employ_end());

        field = refereeForm2.getField("ref1_name");
        field.setValue(currPerson.getRef1_name());

        //ref 2
        field = refereeForm2.getField("ref2_name");
        field.setValue(currPerson.getRef2_name());

        field = refereeForm2.getField("ref2_jobTitle");
        field.setValue(currPerson.getRef2_jobTitle());

        field = refereeForm2.getField("ref2_company");
        field.setValue(currPerson.getRef2_company());

        field = refereeForm2.getField("ref2_address_line1");
        field.setValue(currPerson.getRef2_address_line1());

        field = refereeForm2.getField("ref2_address_line2");
        field.setValue(currPerson.getRef2_address_line2());

        field = refereeForm2.getField("ref2_address_line3");
        field.setValue(currPerson.getRef2_address_line3());

        field = refereeForm2.getField("ref2_phone");
        field.setValue(currPerson.getRef2_phone());

        field = refereeForm2.getField("ref2_employ_start");
        field.setValue(currPerson.getRef2_employ_start());

        field = refereeForm2.getField("ref2_employ_end");
        field.setValue(currPerson.getRef2_employ_end());

        field = refereeForm2.getField("ref2_name");
        field.setValue(currPerson.getRef2_name());

        //ref 3
        field = refereeForm2.getField("ref3_name");
        field.setValue(currPerson.getRef3_name());

        field = refereeForm2.getField("ref3_jobTitle");
        field.setValue(currPerson.getRef3_jobTitle());

        field = refereeForm2.getField("ref3_company");
        field.setValue(currPerson.getRef3_company());

        field = refereeForm2.getField("ref3_address_line1");
        field.setValue(currPerson.getRef3_address_line1());

        field = refereeForm2.getField("ref3_address_line2");
        field.setValue(currPerson.getRef3_address_line2());

        field = refereeForm2.getField("ref3_address_line3");
        field.setValue(currPerson.getRef3_address_line3());

        field = refereeForm2.getField("ref3_phone");
        field.setValue(currPerson.getRef3_phone());

        field = refereeForm2.getField("ref3_employ_start");
        field.setValue(currPerson.getRef3_employ_start());

        field = refereeForm2.getField("ref3_employ_end");
        field.setValue(currPerson.getRef3_employ_end());

        field = refereeForm2.getField("ref3_name");
        field.setValue(currPerson.getRef3_name());

        //ref 4
        field = refereeForm2.getField("ref4_name");
        field.setValue(currPerson.getRef4_name());

        field = refereeForm2.getField("ref4_jobTitle");
        field.setValue(currPerson.getRef4_jobTitle());

        field = refereeForm2.getField("ref4_company");
        field.setValue(currPerson.getRef4_company());

        field = refereeForm2.getField("ref4_address_line1");
        field.setValue(currPerson.getRef4_address_line1());

        field = refereeForm2.getField("ref4_address_line2");
        field.setValue(currPerson.getRef4_address_line2());

        field = refereeForm2.getField("ref4_address_line3");
        field.setValue(currPerson.getRef4_address_line3());

        field = refereeForm2.getField("ref4_phone");
        field.setValue(currPerson.getRef4_phone());

        field = refereeForm2.getField("ref4_employ_start");
        field.setValue(currPerson.getRef4_employ_start());

        field = refereeForm2.getField("ref4_employ_end");
        field.setValue(currPerson.getRef4_employ_end());

        field = refereeForm2.getField("ref4_name");
        field.setValue(currPerson.getRef4_name());
	}

	public static void fillHMRCDetails(PDAcroForm hmrcChecklist2) throws IOException {
		PDField field;

		field = hmrcChecklist2.getField("last-name");
		field.setValue(currPerson.getSurname());

		field = hmrcChecklist2.getField("first-name");
		field.setValue(currPerson.getName());

		field = hmrcChecklist2.getField("gender");
		field.setValue(currPerson.getGender());

		field = hmrcChecklist2.getField("dob");
		field.setValue(currPerson.getDob());

		field = hmrcChecklist2.getField("address");
		field.setValue(currPerson.getAddress());

		field = hmrcChecklist2.getField("ni-num");
		field.setValue(currPerson.getNi_num());

		field = hmrcChecklist2.getField("employment-start");
		field.setValue(currPerson.getEmployment_start());

		field = hmrcChecklist2.getField("postcode");
		field.setValue(currPerson.getPostcode());

		field = hmrcChecklist2.getField("county");
		field.setValue(currPerson.getCounty());

		field = hmrcChecklist2.getField("full-name");
		field.setValue(currPerson.getFirstName() + " " + currPerson.getSurname());

		field = hmrcChecklist2.getField("date");
		field.setValue(currPerson.getDate());

        field = hmrcChecklist2.getField("cb_HMRC1A");
        if (currPerson.getCb_HMRC1A().equals("true")) { field.setValue("X"); }

        field = hmrcChecklist2.getField("cb_HMRC1B");
        if (currPerson.getCb_HMRC1B().equals("true")) { field.setValue("X"); }

        field = hmrcChecklist2.getField("cb_HMRC1C");
        if (currPerson.getCb_HMRC1C().equals("true")) { field.setValue("X"); }

        field = hmrcChecklist2.getField("cb2_yes");
        if (currPerson.getCb2_yes().equals("true")) { field.setValue("X"); }

        field = hmrcChecklist2.getField("cb2_no");
        if (currPerson.getCb2_no().equals("true")) { field.setValue("X"); }

        field = hmrcChecklist2.getField("cb3_yes");
        if (currPerson.getCb3_yes().equals("true")) { field.setValue("X"); }

        field = hmrcChecklist2.getField("cb3_no");
        if (currPerson.getCb3_no().equals("true")) { field.setValue("X"); }

        field = hmrcChecklist2.getField("cb4_yes");
        if (currPerson.getCb4_yes().equals("true")) { field.setValue("X"); }

        field = hmrcChecklist2.getField("cb4_no");
        if (currPerson.getCb4_no().equals("true")) { field.setValue("X"); }

        field = hmrcChecklist2.getField("cb_plan1");
        if (currPerson.getCb_plan1().equals("true")) { field.setValue("X"); }

        field = hmrcChecklist2.getField("cb_plan2");
        if (currPerson.getCb_plan2().equals("true")) { field.setValue("X"); }

        field = hmrcChecklist2.getField("cb_planBoth");
        if (currPerson.getCb_planBoth().equals("true")) { field.setValue("X"); }

        field = hmrcChecklist2.getField("cb6_yes");
        if (currPerson.getCb6_yes().equals("true")) { field.setValue("X"); }

        field = hmrcChecklist2.getField("cb6_no");
        if (currPerson.getCb6_no().equals("true")) { field.setValue("X"); }

        field = hmrcChecklist2.getField("cb7_yes");
        if (currPerson.getCb7_yes().equals("true")) { field.setValue("X"); }

        field = hmrcChecklist2.getField("cb7_no");
        if (currPerson.getCb7_no().equals("true")) { field.setValue("X"); }

        field = hmrcChecklist2.getField("cb8_yes");
        if (currPerson.getCb8_yes().equals("true")) { field.setValue("X"); }

        field = hmrcChecklist2.getField("cb8_no");
        if (currPerson.getCb8_no().equals("true")) { field.setValue("X"); }

        

        

        

        

        
        
        


	}

	public static void fillDriverDetails(PDAcroForm driverFairProcessing2) throws IOException {
		PDField field;

		field = driverFairProcessing2.getField("first-name");
		field.setValue(currPerson.getName());

		field = driverFairProcessing2.getField("last-name");
		field.setValue(currPerson.getSurname());

		field = driverFairProcessing2.getField("dob");
		field.setValue(currPerson.getDob());

		field = driverFairProcessing2.getField("date-entered-uk");
		field.setValue(currPerson.getDate_entered_uk());

		field = driverFairProcessing2.getField("license-num");
		field.setValue(currPerson.getLicense_num());

		field = driverFairProcessing2.getField("country-of-issue");
		field.setValue(currPerson.getCountry_of_issue());

		field = driverFairProcessing2.getField("email");
		field.setValue(currPerson.getEmail());

		field = driverFairProcessing2.getField("address");
		field.setValue(currPerson.getAddress());

		field = driverFairProcessing2.getField("town");
		field.setValue(currPerson.getTown());

		field = driverFairProcessing2.getField("postcode");
		field.setValue(currPerson.getPostcode());

        field = driverFairProcessing2.getField("cb-assoc-with-org");
        if (currPerson.getCb_assoc_with_org().equals("true")) { field.setValue("X"); }

        field = driverFairProcessing2.getField("cb-not-assoc-with-org");
        if (currPerson.getCb_not_assoc_with_org().equals("true")) { field.setValue("X"); }

        field = driverFairProcessing2.getField("name-of-employee-driver");
        field.setValue(currPerson.getName_of_employee_driver());

        field = driverFairProcessing2.getField("cb-company-car");
        if (currPerson.getCb_company_car().equals("true")) { field.setValue("X"); }

        field = driverFairProcessing2.getField("cb-car-on-business");
        if (currPerson.getCb_car_on_business().equals("true")) { field.setValue("X"); }

        field = driverFairProcessing2.getField("cb-pool-vehicle");
        if (currPerson.getCb_pool_vehicle().equals("true")) { field.setValue("X"); }

        field = driverFairProcessing2.getField("cb-occasionally");
        if (currPerson.getCb_occasionally().equals("true")) { field.setValue("X"); }

        field = driverFairProcessing2.getField("middle-initial");
        field.setValue(currPerson.getMiddle_initial());
	}
}
