import React from "react"
import { useState } from 'react';
import {NavLink, Link} from  'react-router-dom'
import { useLocation } from 'react-router-dom';

export default function Navbar (props) {
   
    const location = useLocation();
    const {pathname} = location;
    const splitLoc = pathname.split("/")[1]
    
    if (splitLoc === "" || splitLoc === "survey"){
        return (<></>)
    } else {
        return (
            <div>
                <nav>
                    <ol >
                        <li className="breadcrumb-item" className={splitLoc === "home" ? 'active': ""} >
                            <Link to ="/home">
                            Home
                            </Link></li>
                        <li className="breadcrumb-item-divider : '';" className={splitLoc === "personal-details" ? 'active': ""}>
                            <Link to="/personal-details">Personal Details</Link></li>
                        <li className="breadcrumb-item-divider : '';" className={splitLoc === "medical-details" ? 'active': ""}>
                            <Link  to="/medical-details">Medical Details</Link></li>
                            <li className="breadcrumb-item-divider : '';" className={splitLoc === "language-and-education" ? 'active': ""}>
                            <Link  to="/language-and-education">Language and Education</Link></li>
                        <li className="breadcrumb-item-divider : '';" className={splitLoc === "emergency-contact" ? 'active': ""}>
                            <Link to="/emergency-contact">Emergency Contact</Link></li>
                        <li className="breadcrumb-item-divider : '';" className={splitLoc === "driving-license" ? 'active': ""}>
                        <Link to="/driving-license">Driving License</Link></li>
                        <li className="breadcrumb-item-divider : '';" className={splitLoc === "bank-details" ? 'active': ""}>
                            <Link to="/bank-details">Bank Details</Link></li>
                        <li className="breadcrumb-item-divider : '';" className={splitLoc === "employer-form" ? 'active': ""}>
                            <Link to="/employer-form">Referee Form</Link></li>
                        <li className="breadcrumb-item-divider : '';" className={splitLoc === "life-assurance" ? 'active': ""}>
                            <Link to="/life-assurance">Life Assurance Nominee</Link></li>
                        <li className="breadcrumb-item-divider : '';"  className={splitLoc === "criminal-declaration" ? 'active': ""}>
                            <Link to="/criminal-declaration">Criminal Declaration</Link></li>
                        <li className="breadcrumb-item-divider : '';"  className={splitLoc === "diversity" ? 'active': ""}>
                            <Link to="/diversity">Diversity</Link></li>
                        <li className="breadcrumb-item-divider : '';"  className={splitLoc === "HMRC-checklist" ? 'active': ""}>
                            <Link to="/HMRC-checklist">HMRC Checklist</Link></li>
                        <li className="breadcrumb-item-divider : '';"  className={splitLoc === "Loans" ? 'active': ""}>
                            <Link to="/Loans">Loans</Link></li>
                        <li className="breadcrumb-item-divider : '';"  className={splitLoc === "final-preview" ? 'active': ""}>
                            <Link to="/final-preview">Final Preview</Link></li> 
                    </ol>
                </nav>
            </div>
        )
    }
}

