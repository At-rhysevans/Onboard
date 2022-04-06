import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


export default function Login() {

    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username == "test@email.com" && password == "123") {
            navigate("/home")
        } else {
            alert("Login details incorrect!")
            console.log(username);
            console.log(password);

            setUsername("");
            setPassword("");
        }
    }

    return (
        
        <div className="container">
            <div className="row justify-content-center">
            <div className="prerequisite-box"><h5 className="prerequisite">Before you log in, make sure you have the following:</h5>
            <h6 className="info-needed">National Insurance Number</h6>
            <h6 className="info-needed">Bank Details</h6>
            <h6 className="info-needed">Driving License</h6>
            <h6 className="info-needed">Referee Details</h6>
            
            </div>
                
                <form className="col-4 login-box" onSubmit={handleSubmit}>

                    <h5 className="welcome">Welcome</h5>
                        
                    <div className="form-group my-2">
                        <label htmlFor="usernameInput" className="username">Username</label>
                        <input type="text" className="form-control"  id="usernameInput" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className="form-group ">
                        <label htmlFor="passwordInput" className="password">Password</label>
                        <input type="password" className="form-control" id="passwardinput" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <br />
                          
                    <button type="submit" className="btn btn-primary">Submit</button>
                    
                </form>

            </div>
        </div>
   
    )
}
