<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<jsp:include page="../../../partials/head.jsp"/>

<h4>Please confirm name and email address</h4>


<form class="eg" action="" method="post" data-busy="form">
    <div class="form-group">
        <label for="signerEmail">Signer Email</label>
        <input type="email" class="form-control" id="signerEmail" name="signerEmail"
               aria-describedby="emailHelp" placeholder="pat@example.com" required
               value="${locals.dsConfig.signerEmail}">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
        <label for="signerName">Signer Name</label>
        <input type="text" class="form-control" id="signerName" placeholder="Pat Johnson" name="signerName"
               value="${locals.dsConfig.signerName}" required>
    </div>
    <input type="hidden" name="_csrf" value="${csrfToken}">
    <button type="submit" class="btn btn-docu">Submit</button>
</form>

<jsp:include page="../../../partials/foot.jsp"/>