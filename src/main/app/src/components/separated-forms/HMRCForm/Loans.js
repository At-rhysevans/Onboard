import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { statementA, statementB, statementC, studentLoanText, postgradLoanText } from "./HMRCFormText";


import { PersonContext } from "../../../context/PersonContext";

export default function Loans() {

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
          

          <div className="row my-4">
                            <h5 className="my-4">Student Loan Plan</h5>
                            <p>{ studentLoanText }</p> 
                        </div>

                        <div>
                            <h5 className="my-4">2)Do you have one of the Student Loan Plans described above which is not fully repaid?</h5>
                            <label>Yes</label>
                            <input className="mx-2" type="checkbox" checked={states.cb2_yes} onChange={(e) => states.setcb2_yes(e.target.checked)}/> 
                            <p>If yes, go to question 3.</p>

                            <label>No</label>
                            <input className="mx-2" type="checkbox" checked={states.cb2_no} onChange={(e) => states.setcb2_no(e.target.checked)}/>
                            <p>If no, go to question 6.</p>
                        </div>

                        <div>
                            <h5 className="my-4">3)Did you complete or leave your studies before 6th April?</h5>
                            <label>Yes</label>
                            <input className="mx-2" type="checkbox" checked={states.cb3_yes} onChange={(e) => states.setcb3_yes(e.target.checked)}/> 
                            <p>If yes, go to question 4.</p>

                            <label>No</label>
                            <input className="mx-2" type="checkbox" checked={states.cb3_no} onChange={(e) => states.setcb3_no(e.target.checked)}/>
                            <p>If no, go to question 6.</p>
                        </div>

                        <div>
                            <h5 className="my-4">4) Are you repaying your Student Loan directly to the Student Loans Company by direct debit?</h5>
                            <label>Yes</label>
                            <input className="mx-2" type="checkbox" checked={states.cb4_yes} onChange={(e) => states.setcb4_yes(e.target.checked)}/> 
                            <p>If yes, go to question 6.</p>

                            <label>No</label>
                            <input className="mx-2" type="checkbox" checked={states.cb4_no} onChange={(e) => states.setcb4_no(e.target.checked)}/> 
                            <p>If no, go to question 5.</p>
                        </div>
                            
                        <div>
                            <h5 className="my-4">5) What type of Student Loan do you have?</h5>
                            <label>Plan 1</label>
                            <input className="mx-2" type="checkbox" checked={states.cb_plan1} onChange={(e) => states.setcb_plan1(e.target.checked)}/>
                            <label>Plan 2</label>
                            <input className="mx-2" type="checkbox" checked={states.cb_plan2} onChange={(e) => states.setcb_plan2(e.target.checked)}/>
                            <label>Both</label>
                            <input className="mx-2" type="checkbox" checked={states.cb_planBoth} onChange={(e) => states.setcb_planBoth(e.target.checked)}/>    
                        </div>

                        <div>
                            <h5 className="my-4">6) Do you have a Postgraduate Loan which is not fully repaid?</h5>
                            <label>Yes</label>
                            <input className="mx-2" type="checkbox" checked={states.cb6_yes} onChange={(e) => states.setcb6_yes(e.target.checked)}/>
                            <p>If yes, go to question 7.</p>

                            <label>No</label>
                            <input className="mx-2" type="checkbox" checked={states.cb6_no} onChange={(e) => states.setcb6_no(e.target.checked)}/>
                        </div>

                        <div className="row my-4">
                            <h4 className="my-4">Postgraduate Loan Plan</h4> 
                            <p>{ postgradLoanText }</p>
                        </div>

                        <div>
                            <h5 className="my-4">7) Did you complete or leave your Postgraduate studies before 6th April?</h5>
                            <label>Yes</label>
                            <input className="mx-2" type="checkbox" checked={states.cb7_yes} onChange={(e) => states.setcb7_yes(e.target.checked)}/> 
                            <p>If yes, go to question 8.</p>

                            <label>No</label>
                            <input className="mx-2" type="checkbox" checked={states.cb7_no} onChange={(e) => states.setcb7_no(e.target.checked)}/>
                        </div>

                        <div>
                            <h5 className="my-4">8) Are you repaying your Postgraduate Loan direct to the Student Loans Company by direct debit?</h5>
                            <label>Yes</label>
                            <input className="mx-2" type="checkbox" checked={states.cb8_yes} onChange={(e) => states.setcb8_yes(e.target.checked)}/> 

                            <label>No</label>
                            <input className="mx-2" type="checkbox" checked={states.cb8_no} onChange={(e) => states.setcb8_no(e.target.checked)}/>
                        </div>

                        <div>
                        <button onClick={() => navigate("/HMRC-checklist")} className="btn btn-danger col-3">Back</button>
                        <button onClick={handleSubmit} className="btn btn-success col-4 mx-4">Save Changes</button>
                        <button onClick={() => navigate("/final-preview")} className="btn btn-primary col-3">Next</button>

                        </div> 
             
        </div>
    )

}