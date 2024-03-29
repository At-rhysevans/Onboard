<!DOCTYPE html>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="assets/favicon.ico">

    <title>${title}</title>

    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <!-- Custom styles for this template -->
    <link href="/assets/css.css" rel="stylesheet">
</head>

<body>



    <!-- <c:if test="${locals.session.accountName != null}">
    <p>
        DocuSign Account: ${locals.session.accountName}.
    </p>
    </c:if> -->


    <div class="col-md-12 feedback" id="feedback">
        
    </div>

    <section id="busy" class="feedback">
        <div class="spinner">
            <div class="rect1"></div>
            <div class="rect2"></div>
            <div class="rect3"></div>
            <div class="rect4"></div>
            <div class="rect5"></div>
        </div>
    </section>


    <c:choose>
        <c:when test="${locals.user == null}">
            <div class="container-full-bg">
            <section id="content" style="margin-top:-60px!important; padding-top:30px!important;">
        </c:when>
        <c:otherwise>
            <div class="container">
            <section id="content">
            </c:otherwise>
    </c:choose>