import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PersonContext } from "../../../context/PersonContext";
import { ToastContainer, toast, Slide } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { statementA, statementB, statementC, studentLoanText, postgradLoanText } from "./HMRCFormText";

export default function HMRCForm() {

    const states = useContext(PersonContext);
    const navigate = useNavigate();
    const refStartDate = useRef();

    const [saved, setSaved] = useState(false);

    const handleSave = (event) => {
        event.preventDefault();

        states.postAllData();

        toast.success("Your details have been updated.", 
        {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        setSaved(true);
    };

    const handelNext = (event) => {
        event.preventDefault();

        if (saved) {
            navigate("/Loans");
        } else {
            toast.info("Please save your changes.", 
            {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }); 
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6">

                        <ToastContainer 
                            position="top-right"
                            transition={Slide}
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover 
                        />

                        <div className="row text-center">
                            <h1 className="form-title">HMRC Form</h1>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-5">
                                <input type="text" ref={refStartDate} onFocus={() => (refStartDate.current.type = "date")} onBlur={() => (refStartDate.current.type = "text")} className="form-control" placeholder="Employment Start Date" value={states.employmentStartDate} onChange={(e) => states.setEmploymentStartDate(e.target.value)} />
                            </div>
                        </div>
                            
                        <h5 className="my-4">Employee Statement</h5> 
                                    
                        <div className="row my-4">
                        
                        <div className="col">
                            <h4>Statement A:</h4>
                            <p>{ statementA }</p>
                            <label>Statement A Applies to me.</label>
                            <input className="mx-2" type="checkbox" checked={states.cb_HMRC1A} onChange={(e) => states.setcb_HMRC1A(e.target.checked)}/> 
                        </div> 
                            
                        <div className="col">
                            <h4>Statement B:</h4>
                            <p>{ statementB }</p>
                            <label>Statement B Applies to me.</label>
                            <input className="mx-2" type="checkbox" checked={states.cb_HMRC1B} onChange={(e) => states.setcb_HMRC1B(e.target.checked)}/>
                        </div>
                            
                        <div className="col">
                            <h4>Statement C:</h4>
                            <p>{ statementC }</p>
                            <label>Statement C Applies to me.</label>
                            <input className="mx-2" type="checkbox" checked={states.cb_HMRC1C} onChange={(e) => states.setcb_HMRC1C(e.target.checked)}/>
                        </div>
                        </div>

                        

                        <div className="row my-4 justify-content-center">
                            <button onClick={() => navigate("/diversity")} className="btn btn-danger col-3">Back</button>
                            <button onClick={handleSave} className="btn btn-success col-4 mx-4">Save Changes</button>
                            <button onClick={handelNext} className="btn btn-primary col-3">Next</button>
                    </div>
                </div>
            </div>
        </div>   
              
    )

}
                  




          
           
      
     
 


