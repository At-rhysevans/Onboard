import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Slide } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { PersonContext } from "../../context/PersonContext";

export default function EmployerForm() {

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
            navigate("/medical-details");
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
       

        <div className="row text-center">
            <h1 className="form-title">Employer Details</h1>
        </div>

        <div className="row justify-content-center">
            <div className="col-5">
                <form className="row ">   
                    
                    <div className="form-group my-4">
                        <h6 className="my-4">Current Employer</h6>

                        <input type="text" className="form-control my-3" placeholder="Name" value={states.currEmployerName} onChange={(e) => states.setCurrEmployerName(e.target.value)} required />
                        <input type="text" className="form-control my-3" placeholder="Job Title" value={states.currJob} onChange={(e) => states.setCurrJob(e.target.value)} />
                        <input type="text" className="form-control my-3" placeholder="Company" value={states.currCompany} onChange={(e) => states.setCurrCompany(e.target.value)} />
                        <textarea type="text" className="form-control" placeholder="Address" value={states.currCompAddress} onChange={(e) => states.setCurrCompAddress(e.target.value)} />
                        <input type="email" className="form-control my-3" placeholder="Email" value={states.currCompEmail} onChange={(e) => states.setCurrCompEmail(e.target.value)} />
                        <input type="tel" className="form-control" placeholder="Phone Number" value={states.currCompTel} onChange={(e) => states.setCurrCompTel(e.target.value)} />
                    </div>

                    <div className="form-group my-4">
                        <h6 className="my-4">Previous Employer</h6>

                        <input type="text" className="form-control my-3" placeholder="Name" value={states.prevEmployerName} onChange={(e) => states.setPrevEmployerName(e.target.value)}/>
                        <input type="text" className="form-control my-3" placeholder="Job Title" value={states.prevJob} onChange={(e) => states.setPrevJob(e.target.value)}/>
                        <input type="text" className="form-control my-3" placeholder="Company" value={states.prevCompany} onChange={(e) => states.setPrevCompany(e.target.value)}/>
                        <textarea type="text" className="form-control" placeholder="Address" value={states.prevCompAddress} onChange={(e) => states.setPrevCompAddress(e.target.value)} />
                        <input type="email" className="form-control my-3" placeholder="Email" value={states.prevCompEmail} onChange={(e) => states.setPrevCompEmail(e.target.value)}/>
                        <input type="tel" className="form-control" placeholder="Phone Number" value={states.prevCompTel} onChange={(e) => states.setPrevCompTel(e.target.value)} />
                    </div> 
                    
                    <div className="row my-4 justify-content-center">
                        <button onClick={() => navigate("/bank-details")} className="btn btn-danger col-4 mx-1">Back</button>
                        <button onClick={handleSave} className="btn btn-primary col-4 mx-1">Next</button>
                    </div> 
                
                </form>
            </div>
        </div>

    </div>
    )
}