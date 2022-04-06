import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { SafeAreaView,CheckBox, Text, StyleSheet, View } from "react-native";

import { PersonContext } from "../../context/PersonContext";

export default function HMRCForm() {

    const states = useContext(PersonContext);
    const navigate = useNavigate();
    const refStartDate = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        states.postAllData();
        alert("Your details have been updated.");
    }

    return (
        <div className="container">
          

            <div className="row text-center">
                <h1 className="form-title">HMRC Form</h1>
            </div>

            <div className="row justify-content-center">
                <div className="col-5">

                <input type="text"  ref={refStartDate} onFocus={() => (refStartDate.current.type = "date")} onBlur={() => (refStartDate.current.type = "text")} className="form-control" placeholder="Employment Start Date" value={states.employmentStartDate} onChange={(e) => states.setEmploymentStartDate(e.target.value)} />

                    <form className="row ">   
                    <h5 className="my-4">Employee Statement</h5> 
                        
                    <div id = "boxes">
              
              <div id = "leftbox">
                  <h4>Statement A:</h4>
                  Do not choose this statement if 
                  you’re in receipt of a State, Works 
                  or Private Pension.
                  Choose this statement if the 
                  following applies.
                  This is my first job since 6 April and 
                  since the 6 April I’ve not received 
                  payments from any of the following:<br></br><br></br>
  
                      • Jobseeker’s Allowance<br></br>
                      • Employment and Support Allowance<br></br>
                      • Incapacity Benefit.<br></br><br></br><br></br>
  
                  <Text style={{fontWeight: "bold"}}>Statement A Applies to me.</Text>
                  <input className="mx-2" type="checkbox" checked={states.cb_HMRC1A} onChange={(e) => states.setcb_HMRC1A(e.target.checked)}/> 
              </div> 
                
              <div id = "middlebox">
                  <h4>Statement B:</h4>
                  Do not choose this statement if 
                  you’re in receipt of a State, Works 
                  or Private Pension.
                  Choose this statement if the 
                  following applies.
                  Since 6 April I have had another job 
                  but I do not have a P45. And/or since 
                  the 6 April I have received payments 
                  from any of the following:<br></br><br></br>
                  • Jobseeker’s Allowance<br></br>
                  • Employment and Support Allowance<br></br>
                  • Incapacity Benefit.<br></br><br></br>
  
                  <Text style={{fontWeight: "bold"}}>Statement B Applies to me.</Text>
                  <input className="mx-2" type="checkbox" checked={states.cb_HMRC1B} onChange={(e) => states.setcb_HMRC1B(e.target.checked)}/>
              </div>
                
              <div id = "rightbox">
                  <h4>Statement C:</h4>
  
                  Choose this statement if:<br></br><br></br>
                  • you have another job and/or<br></br>
                  • you’re in receipt of a State, Works <br></br>
                  or Private Pension<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
  
                  <Text style={{fontWeight: "bold"}}>Statement C Applies to me.</Text>
                  <input className="mx-2" type="checkbox" checked={states.cb_HMRC1C} onChange={(e) => states.setcb_HMRC1C(e.target.checked)}/>
                
              </div>


          </div>
          
                        
                        <div className="row my-4 justify-content-center">


                        <button onClick={() => navigate("/diversity")} className="btn btn-danger col-3">Back</button>
                        <button onClick={handleSubmit} className="btn btn-success col-4 mx-4">Save Changes</button>
                        <button onClick={() => navigate("/Loans")} className="btn btn-primary col-3">Next</button>

                        </div> 
                    
                    </form>
                </div>
            </div>

        </div>
    )

}