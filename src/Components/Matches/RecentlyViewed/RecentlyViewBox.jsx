/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import "./RecentlyViewBox.css"
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EducationIcon from '@mui/icons-material/SchoolOutlined';
import RotateRightSharpIcon from '@mui/icons-material/RotateRightSharp';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { NavDropdown } from "react-bootstrap";
import { Paragraph } from "../../BaseComonents/BaseComonents"

const RecentlyViewBox = (props) => {

  const { user_name, user_profile } = props;
  const PhotoTempRequest = `assets/images/profiles/dummy/250-photo-profile-1.jpg`

  return (
    <div className="recentlyviewed_box_wrapper">
      <div className='recentlyviewed_box'>
        <div className="recentlyviewed_box_top">
          {/* <div className="recentlyviewed_box_status_wrapper">
          <div className="recentlyviewed_box_live_status">
            <p className='live_status_title'>Online</p>
            <span className='live_status_indicator'></span>
          </div>
        </div> */}
          <div className="recentlyviewed_box_imagebox_wrapped">
            <div className="recentlyviewed_box_imagebox">
              {/* <img className="img-fluid recentlyviewed_box_imagebox_image" src={`${process.env.PUBLIC_URL}/${user_profile}`} alt="" /> */}
              <div className="img-fluid recentlyviewed_box_imagebox_image"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${user_profile ? user_profile : PhotoTempRequest})` }} />
            </div>
          </div>
          <div className="recentlyviewed_box_detail_body">
            <div className="recentlyviewed_box_detail_name">
              <h4>{user_name ? user_name : "Alizabeth Swoarn"}</h4>
            </div>
            <div className="recentlyviewed_box_detail_body_info recentlyviewed_box_detail_body_info_1">
              <span className='recentlyviewed_box_detail_body_info_1_a'>Single</span>
              <span className='recentlyviewed_box_detail_body_info_1_b'>Content Writer</span>
            </div>
            <div className="recentlyviewed_box_detail_body_info recentlyviewed_box_detail_body_info_2">
              <span className='recentlyviewed_box_detail_body_info_2_a'>Muslim</span>
              <span className='recentlyviewed_box_detail_body_info_2_b'>Awan</span>
            </div>
            <div className="recentlyviewed_box_details">
              <Paragraph text1={"27 yrs"} text2={`"5'5"`} textSeparator="," icon={<RotateRightSharpIcon className='paragraph_icon' />} />
              <Paragraph text1={"Karachi"} text2={"Sindh"} icon={<PlaceOutlinedIcon className='paragraph_icon' />} />
            </div>
          </div>
          <div className="recentlyviewed_box_footer_wrapped">
            <div className="recentlyviewed_box_footer">
              <span className="recentlyviewed_box_text_link">View her profile?</span>
              <div className="recentlyviewed_box_connect_btn">
                <div className="recentlyviewed_box_connect_btn_icon_box">
                  <FavoriteBorderIcon />
                </div>
                <div className="recentlyviewed_box_connect_btn_title">
                  <span>Send her ring?</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentlyViewBox