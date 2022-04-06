import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DisplayPDF from "./DisplayPDF";

export default function Home() {

    const navigate = useNavigate();
    const [files, setFiles] = useState([]);
    const filenames = ["Personal-Details-Form", "Bank-Details-Form", "Criminal-Record-Declaration", "Diversity-Monitoring", "Driver-Fair-Processing", "HMRC-Checklist", "Life-Assurance", "Referees-Form"];

    useEffect(() => {
        function fetchEmptyForms(i) {
            if (i === filenames.length) { return; };

            axios.get("/api/v1/person/empty-forms/" + filenames[i] + ".pdf", { responseType: "blob" })
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
            <div className="row justify-content-center">
                <h1 className="form-title">Homepage</h1>

                {viewPDF}

                <div className="row my-4 justify-content-center">
                    <button onClick={() => navigate("/")} className="btn btn-danger col-4 mx-1">Log out</button>
                    <button onClick={() => navigate("/personal-details")} className="btn btn-primary col-4 mx-1">Next</button>
                </div> 
            </div> 
        </div>
    )
}
