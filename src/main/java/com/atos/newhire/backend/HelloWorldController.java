package com.atos.newhire.backend;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.GetObjectRequest;
import com.amazonaws.services.s3.model.S3Object;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

@RestController
public class HelloWorldController {



    @RequestMapping("/testing")
    public String hello() throws IOException {
        String str = readFromFile();
        return "Text Contained in TXT: " + str;
    }

    public String readFromFile() throws IOException {

        BasicAWSCredentials awsCreds = new BasicAWSCredentials("AKIAZ6F7EURISWOB225X", "u162Pf7/l9HbbQS3n5ybG1WChTTeFzgxTfWOO21d");
        AmazonS3 s3Client = AmazonS3ClientBuilder.standard()
                .withCredentials(new AWSStaticCredentialsProvider(awsCreds))
                .withRegion("us-west-2").build();

        S3Object object = s3Client.getObject(new GetObjectRequest("elasticbeanstalk-us-west-2-683300660305", "test.txt"));

        BufferedReader reader = new BufferedReader(new InputStreamReader(object.getObjectContent()));

        String s = null;
        String  fullS = reader.readLine();
        return fullS;

    }

}
