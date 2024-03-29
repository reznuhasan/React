import React, { useContext } from 'react'
import { themeContext } from '../Helper/themeContext'

const About = () => {
  const {themeColor}=useContext(themeContext)
  return (
    <div className={themeColor!=="light" && "darkAbout"}>
        <h1>This is my About Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus in asperiores magni! Cum hic culpa, nesciunt sit dolore aspernatur. Perferendis delectus, deserunt magnam accusamus modi minima unde tenetur vero illo.</p>
    </div>
  )
}

export default About