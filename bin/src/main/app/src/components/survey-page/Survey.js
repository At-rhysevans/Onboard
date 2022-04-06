import React from "react";
import { useNavigate } from "react-router-dom";

export default function Survey() {
    
        const navigate = useNavigate();
    
        const handleSubmit = () => {
            alert("Thank you for your feedback.");
            navigate("/");
        }
        return (
            <div className="container col-6 survey-form">
                <div className="mx-0 mx-sm-auto">
                    <div className="card">
                        <div className="card-header bg-primary">
                        <h5 className="card-title text-white mt-2" id="exampleModalLabel">Candidate Feedback</h5>
                        </div>
                        <div className="modal-body">
                        <div className="text-center">
                            <i className="far fa-file-alt fa-4x mb-3 text-primary"></i>
                            <p>
                            <strong>Your opinion matters</strong>
                            </p>
                            <p>
                            How did you find the recruitment process as a whole?
                            </p>
                        </div>
    
                        <hr />
    
                        <form className="px-4" action="">
                            <p className="text-center"><strong>Your overall experience:</strong></p>
    
                            <div className="form-check mb-2">
                            <input className="form-check-input" type="radio" name="exampleForm" id="radio3Example1" />
                            <label className="form-check-label" for="radio3Example1">
                                Very good
                            </label>
                            </div>
                            <div className="form-check mb-2">
                            <input className="form-check-input" type="radio" name="exampleForm" id="radio3Example2" />
                            <label className="form-check-label" for="radio3Example2">
                                Good
                            </label>
                            </div>
                            <div className="form-check mb-2">
                            <input className="form-check-input" type="radio" name="exampleForm" id="radio3Example3" />
                            <label className="form-check-label" for="radio3Example3">
                                Medicore
                            </label>
                            </div>
                            <div className="form-check mb-2">
                            <input className="form-check-input" type="radio" name="exampleForm" id="radio3Example4" />
                            <label className="form-check-label" for="radio3Example4">
                                Bad
                            </label>
                            </div>
                            <div className="form-check mb-2">
                            <input className="form-check-input" type="radio" name="exampleForm" id="radio3Example5" />
                            <label className="form-check-label" for="radio3Example5">
                                Very bad
                            </label>
                            </div>
    
                            <p className="text-center mt-5"><strong>What could we improve?</strong></p>
    
                            <div className="form-outline mb-4">
                            <textarea className="form-control" id="form4Example3" placeholder="Your feedback" rows="4"></textarea>
                            
                            </div>
                        </form>
                        </div>
                        <div className="card-footer text-end">
                        <button type="button" onClick={handleSubmit} className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }