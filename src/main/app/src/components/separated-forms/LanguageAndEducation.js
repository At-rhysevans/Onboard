import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { PersonContext } from "../../context/PersonContext";

export default function LanguageAndEducation () {

    const states = useContext(PersonContext);
    const navigate = useNavigate();
    const refDob = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        states.postAllData();
        alert("Your details have been updated.");
    }


    return (

        <div className="container">
           <div className="row justify-content-center">
              <div className="col-8">

        <div className="row text-center">
            <h1 className="form-title">Language and Education</h1>
            <h2 className="form-title ">Language (Fluency: 1 = Basic to 5= Fluent)</h2>
        </div>


        <div className="row justify-content-center">
            <div className="col-12">
        <div className="row">
           <input type="text" className="form-control col mx-1 " placeholder="Language 1" value={states.Language1} onChange={(e) => states.setLanguage1(e.target.value)} />
           <input type="text" className="form-control col  mx-1 " placeholder="Language Write 1" value={states.LanguageWrite1} onChange={(e) => states.setLanguageWrite1(e.target.value)} />
           <input type="text" className="form-control col  mx-1 " placeholder="Language Read 1" value={states.LanguageRead1} onChange={(e) => states.setLanguageRead1(e.target.value)} />
           <input type="text" className="form-control col  mx-1 " placeholder="Language Speak 1" value={states.LanguageSpeak1} onChange={(e) => states.setLanguageSpeak1(e.target.value)} />
        </div>

        <div className="row my-1">
           <input type="text" className="form-control col mx-1" placeholder="Language 2" value={states.Language2} onChange={(e) => states.setLanguage2(e.target.value)} />
           <input type="text" className="form-control col  mx-1" placeholder="Language Write 2" value={states.LanguageWrite2} onChange={(e) => states.setLanguageWrite2(e.target.value)} />
           <input type="text" className="form-control col  mx-1" placeholder="Language Read 2" value={states.LanguageRead2} onChange={(e) => states.setLanguageRead2(e.target.value)} />
           <input type="text" className="form-control col  mx-1" placeholder="Language Speak 2" value={states.LanguageSpeak2} onChange={(e) => states.setLanguageSpeak2(e.target.value)} />
        </div>

        <div className="row my-1">
           <input type="text" className="form-control col mx-1" placeholder="Language 3" value={states.Language3} onChange={(e) => states.setLanguage3(e.target.value)} />
           <input type="text" className="form-control col  mx-1" placeholder="Language Write 3" value={states.LanguageWrite3} onChange={(e) => states.setLanguageWrite3(e.target.value)} />
           <input type="text" className="form-control col  mx-1" placeholder="Language Read 3" value={states.LanguageRead3} onChange={(e) => states.setLanguageRead3(e.target.value)} />
           <input type="text" className="form-control col  mx-1" placeholder="Language Speak 3" value={states.LanguageSpeak3} onChange={(e) => states.setLanguageSpeak3(e.target.value)} />
        </div>

        <div className="row my-1">
           <input type="text" className="form-control col mx-1" placeholder="Language 4" value={states.Language4} onChange={(e) => states.setLanguage4(e.target.value)} />
           <input type="text" className="form-control col  mx-1" placeholder="Language Write 4" value={states.LanguageWrite4} onChange={(e) => states.setLanguageWrite4(e.target.value)} />
           <input type="text" className="form-control col  mx-1" placeholder="Language Read 4" value={states.LanguageRead4} onChange={(e) => states.setLanguageRead4(e.target.value)} />
           <input type="text" className="form-control col  mx-1" placeholder="Language Speak 4" value={states.LanguageSpeak4} onChange={(e) => states.setLanguageSpeak4(e.target.value)} />
        </div>

        <div className="row my-1">
           <input type="text" className="form-control col mx-1" placeholder="Language 5" value={states.Language5} onChange={(e) => states.setLanguage5(e.target.value)} />
           <input type="text" className="form-control col  mx-1" placeholder="Language Write 5" value={states.LanguageWrite5} onChange={(e) => states.setLanguageWrite5(e.target.value)} />
           <input type="text" className="form-control col  mx-1" placeholder="Language Read 5" value={states.LanguageRead5} onChange={(e) => states.setLanguageRead5(e.target.value)} />
           <input type="text" className="form-control col  mx-1" placeholder="Language Speak 5" value={states.LanguageSpeak5} onChange={(e) => states.setLanguageSpeak5(e.target.value)} />
        </div>

        <div className="row text-center">
            <h1 className="form-title">Education</h1>

            
        <div className="row my-1">
           <input type="text" className="form-control col mx-1" placeholder="Education date 1" value={states.educationDate1} onChange={(e) => states.setEducationDate1(e.target.value)} />
           <input type="text" className="form-control col mx-1" placeholder="Education level 1" value={states.educationLevel1} onChange={(e) => states.setEducationLevel1(e.target.value)} />
        </div>
        <div className="row my-1">
           <input type="text" className="form-control col mx-1" placeholder="Education date 2" value={states.educationDate2} onChange={(e) => states.setEducationDate2(e.target.value)} />
           <input type="text" className="form-control col mx-1" placeholder="Education level 2" value={states.educationLevel2} onChange={(e) => states.setEducationLevel2(e.target.value)} />
        </div>
        <div className="row text-center">
            <h1 className="form-title">qualifications</h1>
        </div>

        <div className="row my-1">
           <input type="text" className="form-control col mx-1" placeholder="Qualification date 1" value={states.qualificationsDate1} onChange={(e) => states.setQualificationsDate1(e.target.value)} />
           <input type="text" className="form-control col mx-1" placeholder="Qualification level 1" value={states.qualificationsLevel1} onChange={(e) => states.setQualificationsLevel1(e.target.value)} />
        </div>

        <div className="row my-1">
           <input type="text" className="form-control col mx-1" placeholder="Qualification date 2" value={states.qualificationsDate2} onChange={(e) => states.setQualificationsDate2(e.target.value)} />
           <input type="text" className="form-control col mx-1" placeholder="Qualification level 2" value={states.qualificationsLevel2} onChange={(e) => states.setQualificationsLevel2(e.target.value)} />
        </div>

        <div className="row my-1">
           <input type="text" className="form-control col mx-1" placeholder="Qualification date 3" value={states.qualificationsDate3} onChange={(e) => states.setQualificationsDate3(e.target.value)} />
           <input type="text" className="form-control col mx-1" placeholder="Qualification level 3" value={states.qualificationsLevel3} onChange={(e) => states.setQualificationsLevel3(e.target.value)} />
        </div>
         
        </div>


        <div className="row my-4 justify-content-center">
                            <button onClick={() => navigate("/medical-details")} className="btn btn-danger col-3">Back</button>
                            <button onClick={handleSubmit} className="btn btn-success col-4 mx-4">Save Changes</button>
                            <button onClick={() => navigate("/emergency-contact")} className="btn btn-primary col-3">Next</button>
        </div> 
        </div>
        </div>

        </div>
        </div>
                           
                        
                        
        </div>
    )
}