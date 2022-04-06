import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PersonContext } from "../../context/PersonContext";
import { ToastContainer, toast, Slide } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function LifeAssuranceForm() {

    const states = useContext(PersonContext);
    const navigate = useNavigate();

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
            navigate("/criminal-declaration");
        } else {
            toast.error("Please save your changes.", 
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
    }
    
    return (
        <div className="container">

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
                <h1 className="form-title">Life Assurance Details</h1>
            </div>

            <div className="row justify-content-center">
                <div className="col-5">
                    <form className="row ">   
                        
                        <div className="form-group my-4">
                            <h6 className="my-4">Life Assurance Nomination</h6>
                         
                            <input type="text" className="form-control my-3" placeholder="Pension Name" value={states.pensionName} onChange={(e) => states.setPensionName(e.target.value)} />
                            <input type="text" className="form-control my-3" placeholder="Employee Number" value={states.employeeNum} onChange={(e) => states.setEmployeeNum(e.target.value)} />
                            
                            <p>I nominate the person(s) named below to receive the lump sum benefits under the Rules of the Scheme in the event of my death.</p>
                            <p>I understand that the Trustees have complete discretion over the payment of the lump sum benefit and although the Trustees will consider my wishes, my nomination is not binding on the Trustees.</p>
                            <p>This form will be retained on my HR file and not disclosed to any party until my death, when appropriate privacy information, as required under the General Data Protection Regulation (GDPR), will be provided to the Trustee.</p>
                            <p>This request cancels any previous requests made by me and I reserve the right to revise this nomination at any time, by completing a new form.</p>


                            <div className="row my-1">
                            <h6 className="form-title">Nominee 1</h6>
                            <input type="text" className="form-control" placeholder="Nominee Name" value={states.nominee1} onChange={(e) => states.setNominee1(e.target.value)} />
                            <textarea type="text" className="form-control my-3" placeholder="Nominee Address" value={states.nominee1_address} onChange={(e) => states.setNominee1_address(e.target.value)} />
                            <input type="text" className="form-control" placeholder="Benefit amount (%)" value={states.nominee1_benefit} onChange={(e) => states.setNominee1_benefit(e.target.value)} />
                            </div>

                            <div className="row my-1">
                            <h6 className="form-title">Nominee 2 (Optional)</h6>
                            <input type="text" className="form-control" placeholder="Nominee 2 Name" value={states.nominee2} onChange={(e) => states.setNominee2(e.target.value)} />
                            <textarea type="text" className="form-control my-3" placeholder="Nominee 2 Address" value={states.nominee2_adress} onChange={(e) => states.setNominee2_address(e.target.value)} />
                            <input type="text" className="form-control" placeholder="Benefit amount (%)" value={states.nominee2_benefit} onChange={(e) => states.setNominee2_benefit(e.target.value)} />
                            </div>

                            <div className="row my-1">
                            <h6 className="form-title">Nominee 3 (Optional)</h6>
                            <input type="text" className="form-control" placeholder="Nominee 3 Name" value={states.nominee3} onChange={(e) => states.setNominee3(e.target.value)} />
                            <textarea type="text" className="form-control my-3" placeholder="Nominee 3 Address" value={states.nominee3_address} onChange={(e) => states.setNominee3_address(e.target.value)} />
                            <input type="text" className="form-control" placeholder="Benefit amount (%)" value={states.nominee3_benefit} onChange={(e) => states.setNominee3_benefit(e.target.value)} />
                            </div>
                            
                        </div>
                        
                        <div className="row my-4 justify-content-center">
                            <button onClick={() => navigate("/employer-form")} className="btn btn-danger col-3">Back</button>
                            <button onClick={handleSave} className="btn btn-success col-4 mx-4">Save Changes</button>
                            <button onClick={handelNext} className="btn btn-primary col-3">Next</button>
                        </div> 
                    
                    </form>
                </div>
            </div>

        </div>
    )
}
