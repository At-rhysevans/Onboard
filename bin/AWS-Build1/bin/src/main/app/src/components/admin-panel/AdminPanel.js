import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonEntry from "./PersonEntry";

export default function AdminPanel () {
    const [adminTable, setAdminTable] = useState();

    useEffect(() => {

        async function fetchDataTable() {
            await axios.get("http://onboardhome-env.eba-2w3pimqz.us-west-2.elasticbeanstalk.com//api/v1/person/view-all")
                .then(res => {
                    const data = res.data;
                    
                    const rows = data.map((entry, key) => (
                        <PersonEntry key={key} personData={entry} />
                    ));

                    setAdminTable(rows);
                })
                .catch(err => {
                    console.log("Error in admin panel!. " + err);
                })
        }

        fetchDataTable();
    }, [])
 

    return (
        <div className="container text-center">
            <h1>Admin panel</h1>
            <div className="col-6">{ adminTable }</div>
        </div>
    )
}