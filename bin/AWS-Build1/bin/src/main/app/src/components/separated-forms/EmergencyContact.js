import React, { useRef, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PersonContext } from "../../context/PersonContext";
import { ToastContainer, toast, Slide } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function EmergencyContact() {

    const states = useContext(PersonContext);
    const navigate = useNavigate();
    const refNok = useRef();

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
            navigate("/driving-license");
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
                <h1 className="form-title">Emergency Contact Details</h1>
            </div>

            <div className="row justify-content-center">
                <div className="col-5">
                    <form className="row ">   
                        
                        <div className="form-group my-4">
                            <h6 className="my-4">Emergency Contact</h6>

                            <input type="text" className="form-control my-3" placeholder="Title" value={states.contactTitle} onChange={(e) => states.setContactTitle(e.target.value)} />
                            <input type="text" className="form-control my-3" placeholder="Surname" value={states.contactSurname} onChange={(e) => states.setContactSurname(e.target.value)} />
                            <input type="text" className="form-control my-3" placeholder="Forenames" value={states.contactForenames} onChange={(e) => states.setContactForenames(e.target.value)} />
                            <input type="text" className="form-control" placeholder="Relationship" value={states.contactRelationship} onChange={(e) => states.setContactRelationship(e.target.value)} />
                            <input type="text" className="form-control my-3" placeholder="Phone number (day)" value={states.contactDayPhone} onChange={(e) => states.setContactDayPhone(e.target.value)} />
                            <input type="text" className="form-control" placeholder="Phone number (other)" value={states.contactOtherPhone} onChange={(e) => states.setContactOtherPhone(e.target.value)} />
                            <textarea type="text" className="form-control my-3" placeholder="Address" value={states.contactAddress} onChange={(e) => states.setContactAddress(e.target.value)} />
                        </div>

                        <div className="form-group my-4">
                            <h6 className="my-4">Next of Kin Contact</h6>

                            <input type="text" className="form-control my-3" placeholder="Surname" value={states.nokSurname} onChange={(e) => states.setNokSurname(e.target.value)} />
                            <input type="text" className="form-control my-3" placeholder="Forenames" value={states.nokForenames} onChange={(e) => states.setNokForenames(e.target.value)} />
                            <input type="text" className="form-control" placeholder="Relationship" value={states.nokRelationship} onChange={(e) => states.setNokRelationship(e.target.value)} />
                            <input type="text" className="form-control my-3" placeholder="Gender" value={states.nokGender} onChange={(e) => states.setNokGender(e.target.value)} />
                            <input type="text"  ref={refNok} onFocus={() => (refNok.current.type = "date")} onBlur={() => (refNok.current.type = "text")} className="form-control" placeholder="Date of birth" value={states.nokDOB} onChange={(e) => states.setNokDOB(e.target.value)} />
                            <input type="text" className="form-control my-3" placeholder="Phone number (day)" value={states.nokPhone} onChange={(e) => states.setNokPhone(e.target.value)} />
                            <input type="text" className="form-control" placeholder="Nationality" value={states.nokNationality} onChange={(e) => states.setNokNationality(e.target.value)} />
                            <textarea type="text" className="form-control my-3" placeholder="Address" value={states.nokAddress} onChange={(e) => states.setNokAddress(e.target.value)} />
                        </div>
                        
                        <div className="row my-4 justify-content-center">

                           
                            <button onClick={() => navigate("/language-and-education")} className="btn btn-danger col-3">Back</button>
                            <button onClick={handleSave} className="btn btn-success col-4 mx-4">Save Changes</button>
                            <button onClick={() => navigate("/driving-license")} className="btn btn-primary col-3">Next</button>

                        </div> 
                    
                    </form>
                </div>
            </div>

        </div>
    )
}