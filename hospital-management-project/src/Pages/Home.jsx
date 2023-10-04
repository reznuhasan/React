import React from 'react'
import HelpPart from '../components/HelpPart'
import Carousel from '../components/Carousel'
import Styles from "../Styles/Home.module.css"

const Home = () => {
  return (
    <div>
        <div className={Styles.heroSection}>
            <Carousel/>
            <HelpPart/>
        </div>
    </div>
  )
}

export default Home