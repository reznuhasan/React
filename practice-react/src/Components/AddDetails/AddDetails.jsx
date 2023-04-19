import React, { useEffect, useState } from "react";

const AddDetails=({sendData,updateData,changeVideos})=>{
    const [student,setStudent]=useState({name:'',age:''});
    const handleChange=(e)=>{
        setStudent({...student,
            [e.target.name] : e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        sendData(student)
        setStudent({name:'',age:''});
    }
    useEffect(()=>{
        if(updateData){
            setStudent(updateData)
        }
    },[updateData])
    const handleUpdate=(e)=>{
        e.preventDefault()
        changeVideos(student)
        setStudent({name:'',age:''})
    }
    return(
        <div>
            <form>
                <input onChange={handleChange} type="text" name="name"
                value={student.name}
                />
                <input onChange={handleChange} type="number" name="age"
                value={student.age}
                />
                <button onClick={handleSubmit}>Add Student</button>
                <button onClick={handleUpdate}>Update</button>
            </form>
        </div>
    )
}

export default AddDetails;