import React from "react";

const FunFactCard = (props) => {
    return (
        <div className="funfact-card">
            <h1>{props.title}</h1>
            <h1>{props.value}</h1>
        </div>
    );
}

export default FunFactCard;