/* eslint-disable no-unused-vars */
import React from 'react'
import "./About.css"
import { Header, Footer, MatchViewBox, MyMatchesFilter } from '../../Components'
import useWindowDimensions from "../../Hooks/useWindowDimensions"
import AboutDesk from './Contents/AboutDesk/AboutDesk'
import AboutMobi from './Contents/AboutMobi/AboutMobi'


const About = () => {
  const { screenWidth, screenHeight } = useWindowDimensions();

  return (
    <>
      <Header isProfile={true} disabled={true} />
      <div className="about_page_wrapper">
        {screenWidth > 768 ? <AboutDesk /> : <AboutMobi />}
      </div>
      <Footer isProfile={true} />
    </>
  )
}

export default About