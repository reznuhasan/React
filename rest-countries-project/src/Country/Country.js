import React from "react";
import './Country.css'
const Country=(props)=>{
    const {name,population,area,flags}=props.country
    return(
        <div className="box">
            <img src={flags.png} alt="" />
            <h1>Name:{name.common}</h1>
            <p>Area:{area}</p>
            <p>Population:{population}</p>
        </div>
    )
}

export default Country;