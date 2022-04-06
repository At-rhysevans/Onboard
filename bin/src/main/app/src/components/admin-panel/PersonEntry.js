import React from "react";

export default function PersonEntry ({ personData }) {
    return (
        <div className="row">
            <h4>Full name: { personData.name } { personData.surname }</h4>
        </div>
    )
}