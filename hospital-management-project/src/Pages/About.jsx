import React from 'react'
import Styles from "../Styles/About.module.css"
import aboutus from "../assets/aboutus.png"
import BorderBox from '../components/BorderBox'
import mission from "../assets/aboutmission.jpeg"
const About = () => {
    return (
        <div>
            <div className={Styles.image}>
                <img src={aboutus} alt="" />
            </div>
            <BorderBox />
            {/* about details part */}
            <div className={Styles.aboutDetails}>
                <div className={Styles.aboutDetailsTitle}>
                    <h1>About EverSmile</h1>
                </div>
                <div className={Styles.aboutDetailsContent}>
                    <p>
                        The Evercare Group believes access to healthcare is a fundamental right for everyone, so it invests in emerging markets to bring private, quality driven healthcare to meet the needs of local people. The Group was created in response to a global challenge to ensure well-being at all ages is provided to those living in developing countries as a pillar to support sustainable economic development.
                    </p>
                </div>
                <div className={Styles.aboutDetailsContent}>
                    <p>
                        We are leading the way in transforming the traditional healthcare model through our integrated cross-continents platform, our impact driven model and our quality driven hospitals and other healthcare facilities.The Evercare Group operates as an integrated healthcare delivery platform in emerging markets across Africa and South Asia, including India, Pakistan, Bangladesh, Kenya and Nigeria.
                    </p>
                </div>
            </div>
            {/* {about mission part} */}
            <div className={Styles.aboutMission}>
                <div className={Styles.missionContent}>
                    <h1>Vision</h1>
                    <p>To be the leading integrated healthcare network in emerging markets, transforming the quality of healthcare and impacting millions of people.</p>
                </div>
                <div className={Styles.missionContent}>
                    <h1>Mission</h1>
                    <p>To build a legacy of impact driven, accessible, safe and private healthcare for patients in need.
                    </p>
                </div>
                <div className={Styles.missionImage}>
                    <img src={mission} alt="" />
                </div>
            </div>

        </div>
    )
}

export default About