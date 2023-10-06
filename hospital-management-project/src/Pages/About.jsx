import React from 'react'
import Styles from "../Styles/About.module.css"
import aboutus from "../assets/aboutus.png"
import BorderBox from '../components/BorderBox'
const About = () => {
  return (
    <div>
        <div className={Styles.image}>
           <img src={aboutus} alt="" />
        </div>
        <BorderBox/>
    </div>
  )
}

export default About