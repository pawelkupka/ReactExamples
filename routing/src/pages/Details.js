import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Details</h1>
            <p>Details page of id {id}</p>
        </div>
    );
}

export default Details;
