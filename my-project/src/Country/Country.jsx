import React from "react";
const box={
    backgroundColor:'lightgreen',
    padding:'20px',
    margin:'15px'
}
const handleClick=(name)=>{
    console.log(name)
}
const Country=(props)=>{
    const {name,area,population}=props.country
    return(
        <div style={box}>
           <h1>Name:{name.common}</h1>
           <p>Area:{area}</p>
           <p>Population:{population}</p>
           <button onClick={()=>handleClick(name.common)}>Details</button>
        </div>
    )
}

export default Country;