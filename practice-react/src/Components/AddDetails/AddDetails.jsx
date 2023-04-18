import React, { useState } from "react";

const AddDetails=({sendData})=>{
    const [student,setStudent]=useState({});
    const handleChange=(e)=>{
        setStudent({...student,
            [e.target.name] : e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        sendData(student)
    }
    return(
        <div>
            <form>
                <input onChange={handleChange} type="text" name="name"/>
                <input onChange={handleChange} type="number" name="age"/>
                <button onClick={handleSubmit}>Add Student</button>
            </form>
        </div>
    )
}

export default AddDetails;