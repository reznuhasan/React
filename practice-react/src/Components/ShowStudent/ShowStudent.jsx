import React from "react";
const studentStyle={
    backgroundColor:'salmon',
    padding:'20px',
    margin:'10px',
    textAlign:'center'
}
const ShowStudent=({student,handleDelete,handleEdit})=>{
    
    return(
        <div style={studentStyle}>
            <h1>name:{student.name}</h1>
            <h3>Age:{student.age}</h3>
            <button onClick={()=>handleDelete(student.id)}>X</button>
            <button onClick={()=>handleEdit(student.id)}>Edit</button>
        </div>
    )
}

export default ShowStudent;