import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PersonContext } from "../../context/PersonContext";
import { ToastContainer, toast, Slide } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function DrivingLicense() {

    const states = useContext(PersonContext);
    const navigate = useNavigate();
    const refLicense = useRef();

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
            navigate("/bank-details");
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
            <h1 className="form-title">Driving License Details</h1>
        </div>

        <div className="row justify-content-center">
            <div className="col-5">
                <form className="row ">   
                    
                    <div className="form-group my-4">
                        <h6 className="my-4">Driving License Details</h6>

                        <input type="text"  ref={refLicense} onFocus={() => (refLicense.current.type = "date")} onBlur={() => (refLicense.current.type = "text")} className="form-control" placeholder="Date Entered UK (foreign license only)" value={states.dateEnteredUk} onChange={(e) => states.setDateEnteredUk(e.target.value)} />
                        <input type="text" className="form-control my-3" placeholder="Driving License Number" value={states.drivingLicenseNum} onChange={(e) => states.setDrivingLicenseNum(e.target.value)} />
                        <input type="text" className="form-control my-3" placeholder="Country of Issue" value={states.licenseCountryOfIssue} onChange={(e) => states.setLicenseseCountryOfIssue(e.target.value)} />
                        <textarea type="text" className="form-control my-3" placeholder="Address on License" value={states.licenseAddress} onChange={(e) => states.setLicenseAddress(e.target.value)} />
                        <textarea type="text" className="form-control my-3" placeholder="First Middle Initial of Name" value={states.middle_initial} onChange={(e) => states.setmiddle_initial(e.target.value)} />
                        Are you associated with the above named organisation?
                        <div className="associated-with-org">
                        <input type="checkbox" checked={states.cb_assoc_with_org} onChange={(e) => states.setcb_assoc_with_org(e.target.checked)}/>Yes
                        </div>
                        <div className="not-associated-with-org">
                        <input type="checkbox" checked={states.cb_not_assoc_with_org} onChange={(e) => states.setcb_not_assoc_with_org(e.target.checked)}/>No
                        </div>
                        If No, please provide the name of the employee who has named you as an additional/nominated diver
                        <input type="text" className="form-control my-3" placeholder="Name of employee" value={states.name_of_employee_driver} onChange={(e) => states.setname_of_employee_driver(e.target.value)} />
                        If driver works for company:
                        <div className="company-car">
                        <input type="checkbox" checked={states.cb_company_car} onChange={(e) => states.setcb_company_car(e.target.checked)}/>Company Car
                        </div>
                        <div className="car-on-business">
                        <input type="checkbox" checked={states.cb_car_on_business} onChange={(e) => states.setcb_car_on_business(e.target.checked)}/>Car on Business
                        </div>
                        <div className="car-on-business">
                        <input type="checkbox" checked={states.cb_pool_vehicle} onChange={(e) => states.setcb_pool_vehicle(e.target.checked)}/>Pool Vehicle
                        </div>
                        <div className="car-on-business">
                        <input type="checkbox" checked={states.cb_occasionally} onChange={(e) => states.setcb_occasionally(e.target.checked)}/>Occasionally Only
                        </div>
                    </div>
                    
                    <div className="row my-4 justify-content-center">
                        <button onClick={() => navigate("/emergency-contact")} className="btn btn-danger col-3">Back</button>
                        <button onClick={handleSave} className="btn btn-success col-4 mx-4">Save Changes</button>
                        <button onClick={handelNext} className="btn btn-primary col-3">Next</button>
                    </div> 
                
                </form>
            </div>
        </div>

    </div>
    )
}