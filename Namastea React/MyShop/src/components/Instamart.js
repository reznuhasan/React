import React, { useContext, useState } from 'react'
import { themeContext } from '../Helper/themeContext'
const Section=({title,visible,handleClick,value})=>{
  return(
    <div>
      <h1>{title}</h1>
      {visible?<div>
        <button onClick={()=>handleClick("")}>Hide</button>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, quod? Doloribus, labore magnam facere vero accusantium eos deserunt natus ab omnis, saepe similique! Error veritatis iste totam sit sunt tempore, ducimus aperiam voluptate illum, explicabo repellendus modi fugit nulla cum.</p>
      </div>:<button onClick={()=>handleClick(value)}>Show</button>
      }
    </div>
  )
}
const Instamart = () => {
  const [isVisible,setIsVisible]=useState("about")
  const handleClick=(value)=>{
      setIsVisible(value)
  }
  const {themeColor}=useContext(themeContext)
  return (
    <div className={themeColor!=="light" && "darkInstamart"}>
        <Section key={"About Us"} value="about" handleClick={handleClick} visible={isVisible==="about"} title={"This is my About Part"}></Section>
        <Section key={"Product"} value="product" handleClick={handleClick} visible={isVisible==="product"} title={"This is my Product Part"}></Section>
        <Section key={"Contact"} value="contact" handleClick={handleClick} visible={isVisible==="contact"} title={"This is my Contact Part"}></Section>
    </div>
  )
}

export default Instamart