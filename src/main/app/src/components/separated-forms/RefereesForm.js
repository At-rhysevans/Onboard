import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function RefereesForm () {    

    const [ref1_name, setref1_name] = useState("");
    const [ref1_jobTitle, setref1_jobTitle] = useState("");
    const [ref1_company, setref1_company] = useState("");
    const [ref1_address_line1, setref1_address_line1] = useState("");
    const [ref1_address_line2, setref1_address_line2] = useState("");
    const [ref1_address_line3, setref1_address_line3] = useState("");
    const [ref1_phone, setref1_phone] = useState("");
    const [ref1_email, setref1_email] = useState("");
    const [ref1_employ_start, setref1_employ_start] = useState("");
    const [ref1_employ_end, setref1_employ_end] = useState("");

    const [ref2_name, setref2_name] = useState("");
    const [ref2_jobTitle, setref2_jobTitle] = useState("");
    const [ref2_company, setref2_company] = useState("");
    const [ref2_address_line1, setref2_address_line1] = useState("");
    const [ref2_address_line2, setref2_address_line2] = useState("");
    const [ref2_address_line3, setref2_address_line3] = useState("");
    const [ref2_phone, setref2_phone] = useState("");
    const [ref2_email, setref2_email] = useState("");
    const [ref2_employ_start, setref2_employ_start] = useState("");
    const [ref2_employ_end, setref2_employ_end] = useState("");

    const [ref3_name, setref3_name] = useState("");
    const [ref3_jobTitle, setref3_jobTitle] = useState("");
    const [ref3_company, setref3_company] = useState("");
    const [ref3_address_line1, setref3_address_line1] = useState("");
    const [ref3_address_line2, setref3_address_line2] = useState("");
    const [ref3_address_line3, setref3_address_line3] = useState("");
    const [ref3_phone, setref3_phone] = useState("");
    const [ref3_email, setref3_email] = useState("");
    const [ref3_employ_start, setref3_employ_start] = useState("");
    const [ref3_employ_end, setref3_employ_end] = useState("");

    const [ref4_name, setref4_name] = useState("");
    const [ref4_jobTitle, setref4_jobTitle] = useState("");
    const [ref4_company, setref4_company] = useState("");
    const [ref4_address_line1, setref4_address_line1] = useState("");
    const [ref4_address_line2, setref4_address_line2] = useState("");
    const [ref4_address_line3, setref4_address_line3] = useState("");
    const [ref4_phone, setref4_phone] = useState("");
    const [ref4_email, setref4_email] = useState("");
    const [ref4_employ_start, setref4_employ_start] = useState("");
    const [ref4_employ_end, setref4_employ_end] = useState("");


    const navigate = useNavigate();

    const handleSubmit = (e) => {
        
        e.preventDefault();

        const data = {
            ref1_name : ref1_name,
            ref1_jobTitle : ref1_jobTitle,
            ref1_company : ref1_company,
            ref1_address_line1 : ref1_address_line1,
            ref1_address_line2 : ref1_address_line2,
            ref1_address_line3 : ref1_address_line3,
            ref1_phone : ref1_phone,
            ref1_email :ref1_email,
            ref1_employ_start : ref1_employ_start,
            ref1_employ_end : ref1_employ_end,

            ref2_name : ref2_name,
            ref2_jobTitle : ref2_jobTitle,
            ref2_company : ref2_company,
            ref2_address_line1 : ref2_address_line1,
            ref2_address_line2 : ref2_address_line2,
            ref2_address_line3 : ref2_address_line3,
            ref2_phone : ref2_phone,
            ref2_email :ref2_email,
            ref2_employ_start : ref2_employ_start,
            ref2_employ_end : ref2_employ_end,

            ref3_name : ref3_name,
            ref3_jobTitle : ref3_jobTitle,
            ref3_company : ref3_company,
            ref3_address_line1 : ref3_address_line1,
            ref3_address_line2 : ref3_address_line2,
            ref3_address_line3 : ref3_address_line3,
            ref3_phone : ref3_phone,
            ref3_email :ref3_email,
            ref3_employ_start : ref3_employ_start,
            ref3_employ_end : ref3_employ_end,

            ref4_name : ref4_name,
            ref4_jobTitle : ref4_jobTitle,
            ref4_company : ref4_company,
            ref4_address_line1 : ref4_address_line1,
            ref4_address_line2 : ref4_address_line2,
            ref4_address_line3 : ref4_address_line3,
            ref4_phone : ref4_phone,
            ref4_email :ref4_email,
            ref4_employ_start : ref4_employ_start,
            ref4_employ_end : ref4_employ_end,
        };

        console.log(data);

        axios.post("#", data)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log("Error in Referee Form!");
            });

        console.log(data);
        navigate("/life-assurance");

    }
    return (
        <div className="container">

            
            
            <div className="row text-center">
                <h1 className="form-title">Referees Form</h1>
            </div>

            <div className="row justify-content-center">

                <div className="col-5">
                    
                    <form className="row " onSubmit={handleSubmit}>  
                        
                        <div className="form-group my-4">
                            <h6 className="my-4">Referee 1</h6>

                            <input type="text" className="form-control my-3" placeholder="Name" value={ref1_name} onChange={(e) => setref1_name(e.target.value)} required />
                            <input type="text" className="form-control my-3" placeholder="Job Title" value={ref1_jobTitle} onChange={(e) => setref1_jobTitle(e.target.value)} />
                            <input type="text" className="form-control my-3" placeholder="Company" value={ref1_company} onChange={(e) => setref1_company(e.target.value)} />
                            <input type="text" className="form-control my-3" placeholder="Address Line 1" value={ref1_address_line1} onChange={(e) => setref1_address_line1(e.target.value)} />
                            <input type="text" className="form-control my-3" placeholder="Address Line 2" value={ref1_address_line2} onChange={(e) => setref1_address_line2(e.target.value)} />
                            <input type="text" className="form-control my-3" placeholder="Address Line 3" value={ref1_address_line3} onChange={(e) => setref1_address_line3(e.target.value)} />
                            <input type="tel" className="form-control my-3" placeholder="Phone" value={ref1_phone} onChange={(e) => setref1_phone(e.target.value)} />
                            <input type="email" className="form-control my-3" placeholder="Email" value={ref1_email} onChange={(e) => setref1_email(e.target.value)} />
                            <input type="date" className="form-control my-3" placeholder="Employment start date" value={ref1_employ_start} onChange={(e) => setref1_employ_start(e.target.value)} />
                            <input type="date" className="form-control my-3" placeholder="Employment end date" value={ref1_employ_end} onChange={(e) => setref1_employ_end(e.target.value)} />                           
                        </div>

                        <div className="form-group my-4">
                            <h6 className="my-4">Referee 2</h6>

                            <input type="text" className="form-control my-3" placeholder="Name" value={ref2_name} onChange={(e) => setref2_name(e.target.value)} required />
                            <input type="text" className="form-control my-3" placeholder="Job Title" value={ref2_jobTitle} onChange={(e) => setref2_jobTitle(e.target.value)} />
                            <input type="text" className="form-control my-3" placeholder="Company" value={ref2_company} onChange={(e) => setref2_company(e.target.value)} />
                            <input type="text" className="form-control my-3" placeholder="Address Line 1" value={ref2_address_line1} onChange={(e) => setref2_address_line1(e.target.value)} />
                            <input type="text" className="form-control my-3" placeholder="Address Line 2" value={ref2_address_line2} onChange={(e) => setref2_address_line2(e.target.value)} />
                            <input type="text" className="form-control my-3" placeholder="Address Line 3" value={ref2_address_line3} onChange={(e) => setref2_address_line3(e.target.value)} />
                            <input type="tel" className="form-control my-3" placeholder="Phone" value={ref2_phone} onChange={(e) => setref2_phone(e.target.value)} />
                            <input type="email" className="form-control my-3" placeholder="Email" value={ref2_email} onChange={(e) => setref2_email(e.target.value)} />
                            <input type="date" className="form-control my-3" placeholder="Employment start date" value={ref2_employ_start} onChange={(e) => setref2_employ_start(e.target.value)} />
                            <input type="date" className="form-control my-3" placeholder="Employment end date" value={ref2_employ_end} onChange={(e) => setref2_employ_end(e.target.value)} />                           
                        </div>

                        <div className="form-group my-4">
                            <h6 className="my-4">Referee 3</h6>

                            <input type="text" className="form-control my-3" placeholder="Name" value={ref3_name} onChange={(e) => setref3_name(e.target.value)} required />
                            <input type="text" className="form-control my-3" placeholder="Job Title" value={ref3_jobTitle} onChange={(e) => setref3_jobTitle(e.target.value)} />
                            <input type="text" className="form-control my-3" placeholder="Company" value={ref3_company} onChange={(e) => setref3_company(e.target.value)} />
                            <input type="text" className="form-control my-3" placeholder="Address Line 1" value={ref3_address_line1} onChange={(e) => setref3_address_line1(e.target.value)} />
                            <input type="text" className="form-control my-3" placeholder="Address Line 2" value={ref3_address_line2} onChange={(e) => setref3_address_line2(e.target.value)} />
                            <input type="text" className="form-control my-3" placeholder="Address Line 3" value={ref3_address_line3} onChange={(e) => setref3_address_line3(e.target.value)} />
                            <input type="tel" className="form-control my-3" placeholder="Phone" value={ref3_phone} onChange={(e) => setref3_phone(e.target.value)} />
                            <input type="email" className="form-control my-3" placeholder="Email" value={ref3_email} onChange={(e) => setref3_email(e.target.value)} />
                            <input type="date" className="form-control my-3" placeholder="Employment start date" value={ref3_employ_start} onChange={(e) => setref3_employ_start(e.target.value)} />
                            <input type="date" className="form-control my-3" placeholder="Employment end date" value={ref3_employ_end} onChange={(e) => setref3_employ_end(e.target.value)} />                           
                        </div>

                        <div className="form-group my-4">
                            <h6 className="my-4">Referee 4</h6>

                            <input type="text" className="form-control my-3" placeholder="Name" value={ref4_name} onChange={(e) => setref4_name(e.target.value)} required />
                            <input type="text" className="form-control my-3" placeholder="Job Title" value={ref4_jobTitle} onChange={(e) => setref4_jobTitle(e.target.value)} />
                            <input type="text" className="form-control my-3" placeholder="Company" value={ref4_company} onChange={(e) => setref4_company(e.target.value)} />
                            <input type="text" className="form-control my-3" placeholder="Address Line 1" value={ref4_address_line1} onChange={(e) => setref4_address_line1(e.target.value)} />
                            <input type="text" className="form-control my-3" placeholder="Address Line 2" value={ref4_address_line2} onChange={(e) => setref4_address_line2(e.target.value)} />
                            <input type="text" className="form-control my-3" placeholder="Address Line 3" value={ref4_address_line3} onChange={(e) => setref4_address_line3(e.target.value)} />
                            <input type="tel" className="form-control my-3" placeholder="Phone" value={ref4_phone} onChange={(e) => setref4_phone(e.target.value)} />
                            <input type="email" className="form-control my-3" placeholder="Email" value={ref4_email} onChange={(e) => setref4_email(e.target.value)} />
                            <input type="date" className="form-control my-3" placeholder="Employment start date" value={ref4_employ_start} onChange={(e) => setref4_employ_start(e.target.value)} />
                            <input type="date" className="form-control my-3" placeholder="Employment end date" value={ref4_employ_end} onChange={(e) => setref4_employ_end(e.target.value)} />                           
                        </div>  

                        <div className="row my-4 justify-content-center">
                            <button onClick={() => navigate("/bank-details")} className="btn btn-danger col-3">Back</button>
                            <button onClick={handleSubmit} className="btn btn-success col-4 mx-4">Save Changes</button>
                            <button onClick={() => navigate("/life-assurance")} className="btn btn-primary col-3">Next</button>
                        </div> 
                    </form>


                </div>

            </div>

        </div>
    )
}