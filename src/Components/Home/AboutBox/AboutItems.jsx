/* eslint-disable no-unused-vars */
import React from 'react'
import "../Home.css"

const AboutItems = (props) => {

  const { image_path, description } = props.data
  const { col_6 } = props;

  return (
     <div className={ col_6 ? "col-12 col-sm-6 col-md-6" : "col-12 col-sm-6 col-md-4"} >
      <div className="about_box_item">
        <div className="image_wrapper">
          <img src={`${process.env.PUBLIC_URL}/${image_path}`} alt={`${image_path.substring(image_path.lastIndexOf('/') + 1)}`} />
        </div>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default AboutItems