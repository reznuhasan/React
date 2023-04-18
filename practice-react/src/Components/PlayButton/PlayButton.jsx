import React from "react";

const PlayButton=({children,message,handleClick})=>{
    return(
        <button onClick={()=>handleClick(message)}>{children}</button>
    )
}

export default PlayButton;