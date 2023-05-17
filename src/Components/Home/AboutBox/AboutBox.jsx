/* eslint-disable no-unused-vars */
import React from 'react'
import "../Home.css"
import AboutItems from "./AboutItems"

const AboutBox = (props) => {

  const about_slides = props.data_slides;
  const { title, title2, className, style, col_6 } = props;

  return (
    <div className={`about_slide__section ${className}`} style={style}>
      <div className="row justify-content-center">
        <div className="col-11 col-sm-10 col-md-9">
          <div className="about_slide_title_box">
            <h2>{title}</h2>
            <h2>{title2}</h2>
          </div>
        </div>
      </div>
      <div className="row">
        {
          about_slides.map((item) => <AboutItems data={item} key={item.id} col_6={col_6} />)
        }
      </div>
    </div>
  )
}

export default AboutBox