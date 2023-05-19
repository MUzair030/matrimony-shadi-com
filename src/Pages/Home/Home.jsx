/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import "./Home.css"
import { AboutBox, Header, Footer } from "../../Components"
import { Container } from 'react-bootstrap'
import HeroSlide from './Contents/HeroSlide/HeroSlide'
import HeroSearch from './Contents/HeroSearch/HeroSearch'
import { home_about_slides, home_members_data, story_data, dating_tips } from "../../Data/data"
import StorySingleBox from './Contents/HeroSearch/Stories/StorySingleBox'
import Stories from './Contents/HeroSearch/Stories/Stories'
import Tips from './Contents/HeroSearch/Tips/Tips'
import HowItWorks from './Contents/HowItWorks/HowItWorks'
import JourneyBegin from './Contents/JourneyBegin/JourneyBegin'
import Navbar from '../../Components/BaseComonents/Header/Navbar'

const home_slider__section_style = {
  backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/banner/front-pg-banner-v2.jpg)`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%',
  backgroundAttachment: 'fixed',
}

const Home = () => {

  const [storyFirst, setStoryFirst] = useState(null);
  const [stories, setStories] = useState(null);
  const [datingTips, setDatingTips] = useState(null);

  useEffect(() => {
    const storiesData = story_data.map(data => data)
    setStoryFirst(storiesData && storiesData[0])
    setStories(storiesData.slice(1))

    setDatingTips(dating_tips)
  }, [])

  return (
    <div className='home__page'>
      {/* <div className="home_slider__section" style={home_slider__section_style}>
        <Container className='h-100'>
          <Header />
        </Container>
      </div> */}

      {/* <Navbar/> */}
      <Header />
      <HeroSlide />
      <HeroSearch />

      <div className="story_section">
        <div className="container_border">
          <div className="head_title_box mb-3">
            <h2>Some Successful User Stories</h2>
            <div className="hero_line_divider mt-4 mb-4"><span></span></div>
            <p>Many people have come here alone and left with <b style={{color: 'var(--color-secondary)'}}>Happy Stories</b>. Relive their experience by reading their stories.</p>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 mb-3">
              {
                storyFirst &&
                <StorySingleBox story={storyFirst} />
              }
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              {
                stories && stories.map((story) => (
                  <Stories stories={story} />
                ))
              }
            </div>
          </div>
        </div>
      </div>

      <HowItWorks />

      <div className="tips_section">
        <div className="container_border">
          <div className="head_title_box mb-3">
            <h2>Some Helpful Dating tips</h2>
            <div className="hero_line_divider mt-4 mb-4"><span></span></div>
            <p>Increase your odds of getting success by reading these helpful blogs full of tips and information.</p>
          </div>
          <div className="row justify-content-center">
            {
              datingTips && datingTips.map((tips) => (
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-3 px-1">
                  <Tips tips={tips} />
                </div>
              ))
            }
          </div>
        </div>
      </div>


      {/* <Container>
        <AboutBox className="mt-4 pb-4" data_slides={home_about_slides} title={"Best Matrimony Site. Used By Millions Of Member Worldwide"} />
        <AboutBox className="mt-4 pb-5" col_6={true} data_slides={home_members_data} title={"MEET OUR MEMBERS - SUCCESSFUL"} title2="PROFESSIONAL SINGLES" />
      </Container> */}

      {/* *************** JourneyBegin Section *************** */}
      <JourneyBegin />

      {/* *************** Footer Section *************** */}
      <Footer />

    </div>
  )
}

export default Home