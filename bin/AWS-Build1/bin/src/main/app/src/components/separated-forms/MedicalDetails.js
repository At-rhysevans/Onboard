import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PersonContext } from "../../context/PersonContext";
import { ToastContainer, toast, Slide } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function MedicalDetails() {

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
            navigate("/language-and-education");
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
    };

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
                <h1 className="form-title">Medical Details</h1>
            </div>

            <div className="row justify-content-center">
                <div className="col-5">
                    <form className="row ">   
                        
                        <div className="form-group my-4">
                            <h6 className="my-4">Medical Details</h6>

                            <textarea type="text" className="form-control my-3" placeholder="Physical Special Needs" value={states.specialNeeds} onChange={(e) => states.setSpecialNeeds(e.target.value)} />
                            <textarea type="text" className="form-control my-3" placeholder="Medical Conditions" value={states.medicalConditions} onChange={(e) => states.setMedicalConditions(e.target.value)} />
                        </div>
                        
                        <div className="row my-4 justify-content-center">
                            <button onClick={() => navigate("/personal-details")} className="btn btn-danger col-3">Back</button>
                           
                            <button onClick={handleSave} className="btn btn-success col-4 mx-4">Save Changes</button>
                            <button onClick={handelNext} className="btn btn-primary col-3">Next</button>

                        </div> 
                    
                    </form>
                </div>
            </div>

        </div>
    )

}