import React from "react";

const ShowStudent=({student})=>{
    return(
        <div>
            <h1>name:{student.name}</h1>
            <h3>Age:{student.age}</h3>
        </div>
    )
}

export default ShowStudent;