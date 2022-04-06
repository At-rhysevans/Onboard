import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PersonContext } from "../../context/PersonContext";
import { ToastContainer, toast, Slide } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function CriminalDeclaration() {

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
            navigate("/diversity");
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
            <h1 className="form-title">Criminal Declarations</h1>
        </div>

        <div className="row justify-content-center">
            <div className="col-5">
                <form className="row ">

                    <div className="form-group my-4">
                        <h6 className="my-4">Have you ever been convicted or found guilty but a Court of any offence in any country or have you ever been put on probation or absolutely/conditionally dishcharged or bound over after being charged with any offence or is there any action pending against you? NB You do not need to declare convictions which are "spent" under the Rehabilitation of Offenders Act (1974) </h6>
                        <p>Please delcare in the box below, otherwise enter "No"</p>

                        <textarea type="text" className="form-control" placeholder="Declarations" value={states.criminal} onChange={(e) => states.setCriminal(e.target.value)} />
                    </div>

                    <div className="row my-4 justify-content-center">
                        <button onClick={() => navigate("/life-assurance")} className="btn btn-danger col-3">Back</button>
                        <button onClick={handleSave} className="btn btn-success col-4 mx-4">Save Changes</button>
                        <button onClick={handelNext} className="btn btn-primary col-3">Next</button>
                    </div>

                </form>
            </div>
        </div>

    </div>
    )
}