import React from "react";


function Timebox({ title, totalTimeInMinutes, onDelete, onEdit }) {
    if (totalTimeInMinutes <= 0){
        throw new Error("Time mut be greater than zero")
}
    return (
        <div className="Timebox">
            <h3>{title} - {totalTimeInMinutes} min.</h3>
            <button onClick={onDelete}> Delete </button>
            <button onClick={onEdit}> Change </button>
            <input />

        </div>
    )
}

export default Timebox;