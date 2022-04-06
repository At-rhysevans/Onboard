import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Slide } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { PersonContext } from "../../context/PersonContext";

export default function PersonalDetails () {

    const states = useContext(PersonContext);
    const navigate = useNavigate();
    const refDob = useRef();
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
                <h1 className="form-title">Personal Details</h1>
            </div>

            <div className="row justify-content-center">

                <div className="col-5">
                    
                    <form className="row ">   
        
                        <div className="form-group my-4">
                            <h6 className="my-4">Personal Details</h6>

                            <input type="text" className="form-control my-3" placeholder="Title" value={states.title} onChange={(e) => states.setTitle(e.target.value)} />
                            <input type="text" className="form-control my-3" placeholder="First Name" value={states.firstName} onChange={(e) => states.setFirstName(e.target.value)} />
                            <input type="text" className="form-control my-3" placeholder="Other Names" value={states.otherNames} onChange={(e) => states.setOtherNames(e.target.value)} />
                            <input type="text" className="form-control my-3" placeholder="Surname" value={states.surname} onChange={(e) => states.setSurname(e.target.value)} />
                            <input type="text" className="form-control my-3" placeholder="Preferred Name" value={states.preferredName} onChange={(e) => states.setPreferredName(e.target.value)} />
                            <input type="text" className="form-control my-3" placeholder="Gender" value={states.gender} onChange={(e) => states.setGender(e.target.value)} />
                            <input type="text" className="form-control my-3" placeholder="Marital Status" value={states.maritalStatus} onChange={(e) => states.setMaritalStatus(e.target.value)} />
                            <input type="text" className="form-control my-3" placeholder="NI Number" value={states.niNumber} onChange={(e) => states.setNiNumber(e.target.value)} />
                            <input type="text"  ref={refDob} onFocus={() => (refDob.current.type = "date")} onBlur={() => (refDob.current.type = "text")} className="form-control" placeholder="Date of birth" value={states.dob} onChange={(e) => states.setDob(e.target.value)} />
                            <input type="text" className="form-control my-3" placeholder="Nationality" value={states.nationality} onChange={(e) => states.setNationality(e.target.value)} />
                            <textarea type="text" className="form-control my-3" placeholder="Address" value={states.address} onChange={(e) => states.setAddress(e.target.value)} />
                            <input type="text" className="form-control my-3" placeholder="Postcode" value={states.postcode} onChange={(e) => states.setPostcode(e.target.value)} />
                            <input type="text" className="form-control my-3" placeholder="Town" value={states.town} onChange={(e) => states.setTown(e.target.value)} />
                            <input type="text" className="form-control my-3" placeholder="County" value={states.county} onChange={(e) => states.setCounty(e.target.value)} />
                            <input type="text" className="form-control my-3" placeholder="Personal Mobile" value={states.personalMobile} onChange={(e) => states.setPersonalMobile(e.target.value)} />
                            <input type="text" className="form-control my-3" placeholder="Other Phone" value={states.otherPhone} onChange={(e) => states.setOtherPhone(e.target.value)} />
                            <input type="text" className="form-control my-3" placeholder="Email" value={states.email} onChange={(e) => states.setEmail(e.target.value)} />
                        </div>

                        <div className="row my-4 justify-content-center">
                            <button onClick={() => navigate("/home")} className="btn btn-danger col-3">Back</button>
                            <button onClick={handleSave} className="btn btn-success col-4 mx-4">Save Changes</button>
                            <button onClick={handelNext} className="btn btn-primary col-3">Next</button>
                        </div> 
                    </form>

                </div>

            </div>
       
        </div>
    )
}