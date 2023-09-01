import React, { useContext } from 'react'
import { themeContext } from '../Helper/themeContext'

const Contact = () => {
  const {themeColor}=useContext(themeContext)
  return (
    <div className={themeColor!=="light" && "darkContact"}>
        <h1>This is my Contact Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora beatae pariatur dolorum excepturi, libero harum ipsam. Impedit odit exercitationem nemo facere ab, voluptates tempora itaque quasi obcaecati consectetur laboriosam enim aliquid harum necessitatibus animi odio alias error veritatis quos beatae, nobis dolores adipisci sit. Labore, animi! Voluptates consequuntur nulla provident!</p>
    </div>
  )
}

export default Contact