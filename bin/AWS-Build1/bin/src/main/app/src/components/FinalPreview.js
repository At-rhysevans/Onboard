import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import DisplayPDF from "./DisplayPDF";
import { ToastContainer, toast, Slide } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

import { PersonContext } from "../context/PersonContext";

export default function FinalPreview() {

    const [checked, setChecked] = useState(false);
    const [files, setFiles] = useState([]);
    const navigate = useNavigate();
    const states = useContext(PersonContext);

    const filenames = ["Personal-Details-Form", "Bank-Details-Form", "Criminal-Record-Declaration", "Diversity-Monitoring", "Driver-Fair-Processing", "HMRC-Checklist", "Life-Assurance", "Referees-Form"];

    const handleSubmit = () => {
        if (checked){

            navigate("/survey")
        } else {
            toast.info("Please check all the documents and confirm that they have been correctly filled out.", 
            {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                hideProgressBar:true,
            }); 
        }
    }

    useEffect(() => {
        function fetchEmptyForms(i) {
            if (i === filenames.length) { return; };

            axios.get("/api/v1/person/filled-forms/" + filenames[i] + ".pdf", { responseType: "blob" })
            .then(res => {
                const blob = new Blob([res.data]);
                const objectUrl = URL.createObjectURL(blob);
                setFiles(files => [...files, objectUrl]);

                return fetchEmptyForms(i + 1);
            })
            .catch(err => {
                console.log("Error in getting PDFs!" + err);
            })
        };
        
        fetchEmptyForms(0);
        
    }, [])

    const viewPDF = files.map((file, index) => (
        <DisplayPDF file={file} docTitle={filenames[index].replaceAll("-", " ")}/>
    ));

    return (
        <div className="container text-center">
            
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

            <div className="row justify-content-center">
                <h1 className="form-title">Final Preview</h1>
                <h4>Please check that all the information is correct</h4>

                {viewPDF}

                <div className="row my-2">
                    <label>
                        <input className="mx-2" type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)}/>
                        <span>I confirm that to the best of my knowledge the above information is correct.</span>
                    </label>
                </div>

                <div className="row my-4 justify-content-center">
                    <button onClick={() => navigate("/Loans")} className="btn btn-danger col-4 mx-1">Back</button>
                    <button onClick={handleSubmit} className="btn btn-success col-4 mx-1">Submit Documents</button>
                </div> 
            </div> 
        </div>
    )
}