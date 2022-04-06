import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PersonContext } from "../../context/PersonContext";
import { ToastContainer, toast, Slide } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function BankDetails() {
    
    const states = useContext(PersonContext);
    const navigate = useNavigate();
    const refDiversity = useRef();

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
            navigate("/HMRC-checklist");
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
            <h1 className="form-title">Diversity Monitoring Form</h1>
        </div>

        <div className="row justify-content-center">
            <div className="col-5">
                <form className="row ">   
                    
                    <div className="form-group my-4">
                        <h2 className="my-4">What is your ethnic group?</h2>


                        <h3>A) White</h3>
                        <div className="ethnic_white">
                        <input type="checkbox" checked={states.div_A1} onChange={(e) => states.setdiv_A1(e.target.checked)}/>  British <br></br>
                        <input type="checkbox" checked={states.div_A2} onChange={(e) => states.setdiv_A2(e.target.checked)}/>  Irish <br></br>
                        <input type="checkbox" checked={states.div_A3} onChange={(e) => states.setdiv_A3(e.target.checked)}/>  Other White background
                        <input type="text" className="form-control my-3" placeholder="Any other white background" value={states.div_Aoth} onChange={(e) => states.setdiv_Aoth(e.target.value)} />
                        </div>

                        <br></br>

                        <h3>B) Mixed</h3>
                        <div className="ethnic_mixed">
                        <input type="checkbox" checked={states.div_B1} onChange={(e) => states.setdiv_B1(e.target.checked)}/>  White and Black Caribbean <br></br>
                        <input type="checkbox" checked={states.div_B2} onChange={(e) => states.setdiv_B2(e.target.checked)}/>  White and Black African <br></br>
                        <input type="checkbox" checked={states.div_B3} onChange={(e) => states.setdiv_B3(e.target.checked)}/>  White and Asian <br></br>
                        <input type="checkbox" checked={states.div_B4} onChange={(e) => states.setdiv_B4(e.target.checked)}/>  Other background
                        <input type="text" className="form-control my-3" placeholder="Any other background" value={states.div_Both} onChange={(e) => states.setdiv_Both(e.target.value)} />
                        </div>

                        <br></br>

                        <h3>C) Asian or Asian British</h3>
                        <div className="ethnic_asian">
                        <input type="checkbox" checked={states.div_C1} onChange={(e) => states.setdiv_C1(e.target.checked)}/>  Indian <br></br>
                        <input type="checkbox" checked={states.div_C2} onChange={(e) => states.setdiv_C2(e.target.checked)}/>  Pakistani <br></br>
                        <input type="checkbox" checked={states.div_C3} onChange={(e) => states.setdiv_C3(e.target.checked)}/>  Bangladeshi <br></br>
                        <input type="checkbox" checked={states.div_C4} onChange={(e) => states.setdiv_C4(e.target.checked)}/>  Other Asian background
                        <input type="text" className="form-control my-3" placeholder="Any other Asian background" value={states.div_Coth} onChange={(e) => states.setdiv_Coth(e.target.value)} />
                        </div>

                        <br></br>

                        <h3>D) Black or Black British</h3>
                        <div className="ethnic_black">
                        <input type="checkbox" checked={states.div_D1} onChange={(e) => states.setdiv_D1(e.target.checked)}/>  Caribbean <br></br>
                        <input type="checkbox" checked={states.div_D2} onChange={(e) => states.setdiv_D2(e.target.checked)}/>  African <br></br>
                        <input type="checkbox" checked={states.div_Doth} onChange={(e) => states.setdiv_Doth(e.target.checked)}/>  Other background
                        <input type="text" className="form-control my-3" placeholder="Any other background" value={states.div_Doth} onChange={(e) => states.setdiv_Doth(e.target.value)} />
                        </div>

                        <br></br>

                        <h3>E) Chinese or Other ethnic group</h3>
                        <div className="ethnic_chinese">
                        <input type="checkbox" checked={states.div_E1} onChange={(e) => states.setdiv_E1(e.target.checked)}/>  Chinese <br></br>
                        <input type="checkbox" checked={states.div_Eoth} onChange={(e) => states.setdiv_Eoth(e.target.checked)}/>  Other ethnic background
                        <input type="text" className="form-control my-3" placeholder="Any other ethnic background" value={states.div_Eoth} onChange={(e) => states.setdiv_Eoth(e.target.value)} />
                        </div>

                        <br></br>

                        <h3>F)</h3>
                        <div className="no_disclose">
                        <input type="checkbox" checked={states.div_F1} onChange={(e) => states.setdiv_F1(e.target.checked)}/>  I do not wish to disclose my ethnic origin
                        </div>
                    </div>

                    <div className="form-group my-4">
                    <h2 className="my-4">Disability</h2>

                    <h3>Do you have a disability?</h3>
                    <div className="disability">
                        <input type="checkbox" checked={states.div_GY} onChange={(e) => states.setdiv_GY(e.target.checked)}/>  Yes <br></br>
                        <input type="checkbox" checked={states.div_GN} onChange={(e) => states.setdiv_GN(e.target.checked)}/>  No
                        <textarea type="text" className="form-control my-3" placeholder="Details of disability (if applicable)" value={states.div_Gdetails} onChange={(e) => states.setdiv_Gdetails(e.target.value)} />
                    </div>
                    </div>

                    <div className="form-group my-4">
                    <h2 className="my-4">Sexual Orientation</h2>

                    <h3>Are you:</h3>
                    <div className="sexual_orientation">
                        <input type="checkbox" checked={states.div_HH} onChange={(e) => states.setdiv_HH(e.target.checked)}/>  Heterosexual <br></br>
                        <input type="checkbox" checked={states.div_HG} onChange={(e) => states.setdiv_HG(e.target.checked)}/>  Gay Man <br></br>
                        <input type="checkbox" checked={states.div_HL} onChange={(e) => states.setdiv_HL(e.target.checked)}/>  Gay Woman / Lesbian <br></br>
                        <input type="checkbox" checked={states.div_HB} onChange={(e) => states.setdiv_HB(e.target.checked)}/>  Bisexual <br></br>
                        <input type="checkbox" checked={states.div_HO} onChange={(e) => states.setdiv_HO(e.target.checked)}/>  Other
                    </div>
                    </div>
                    

                    <div className="row my-4 justify-content-center">
                        <button onClick={() => navigate("/criminal-declaration")} className="btn btn-danger col-3">Back</button>
                        <button onClick={handleSave} className="btn btn-success col-4 mx-4">Save Changes</button>
                        <button onClick={handelNext} className="btn btn-primary col-3">Next</button>
                    </div> 
                
                </form>
            </div>
        </div>

    </div>
    )
}