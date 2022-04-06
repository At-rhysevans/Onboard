import React from "react";
import Survey from "./Survey"

export default function SurveyPage() {

    return ( 
        <div className="container text-center">
            <div className="row">
                <h1 className="form-title">Thank you for submitting your details!</h1>
                <h4>Please take a moment to tell us about your experience using the Atos New Hire portal.</h4>
            </div>
            
            <Survey />

        </div>
        
    )
}

