import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PersonContext } from "../../context/PersonContext";
import { ToastContainer, toast, Slide } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function BankDetails() {
    
    const states = useContext(PersonContext);
    const navigate = useNavigate();
    const refBank = useRef();

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
            navigate("/employer-form");
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
            <h1 className="form-title">Bank Details</h1>
        </div>

        <div className="row justify-content-center">
            <div className="col-5">
                <form className="row ">   
                    
                    <div className="form-group my-4">
                        <h6 className="my-4">Bank Details</h6>

                        <input type="text"  ref={refBank} onFocus={() => (refBank.current.type = "date")} onBlur={() => (refBank.current.type = "text")} className="form-control" placeholder="Employment Start Date" value={states.employmentStartDate} onChange={(e) => states.setEmploymentStartDate(e.target.value)} />
                        <input type="text" className="form-control my-3" placeholder="Account Name" value={states.accountName} onChange={(e) => states.setAccountName(e.target.value)} />
                        <input type="text" className="form-control my-3" placeholder="Sort Code" value={states.sortCode} onChange={(e) => states.setSortCode(e.target.value)} />
                        <input type="text" className="form-control my-3" placeholder="Account Number" value={states.accountNumber} onChange={(e) => states.setAccountNumber(e.target.value)} />
                    </div>

                    <div className="form-group my-4">
                        <h6 className="my-4">Account into which expenses will be paid</h6>
                        <h6 className="my-4">(only complete this section if expenses are to be paid into a different account from your salary)</h6>
                        <input type="text" className="form-control my-3" placeholder="Account Name" value={states.expense_acc_name} onChange={(e) => states.setExpense_acc_name(e.target.value)} />
                        <input type="text" className="form-control my-3" placeholder="Sort Code" value={states.expense_sort} onChange={(e) => states.setExpense_sort(e.target.value)} />
                        <input type="text" className="form-control my-3" placeholder="Account Number" value={states.expense_acc_num} onChange={(e) => states.setExpense_acc_num(e.target.value)} />
                    </div>
                    
                    <div className="row my-4 justify-content-center">
                        <button onClick={() => navigate("/driving-license")} className="btn btn-danger col-3">Back</button>
                        <button onClick={handleSave} className="btn btn-success col-4 mx-4">Save Changes</button>
                        <button onClick={handelNext} className="btn btn-primary col-3">Next</button>
                    </div> 
                
                </form>
            </div>
        </div>

    </div>
        
    )
}