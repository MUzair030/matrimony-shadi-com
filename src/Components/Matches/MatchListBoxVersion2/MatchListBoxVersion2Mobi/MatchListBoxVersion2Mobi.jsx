/* eslint-disable no-unused-vars */
import React from 'react'
import "./MatchListBoxVersion2Mobi.css"
import { Carousel, Card, NavDropdown } from "react-bootstrap"
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Link } from "react-router-dom"
import LocationIcon from '@mui/icons-material/Room';
import ArticleIcon from '@mui/icons-material/Article';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import MessageIcon from '@mui/icons-material/Message';
import LikeThumbIcon from '@mui/icons-material/ThumbUpOutlined';
import OnlineIcon from '@mui/icons-material/OnlinePredictionOutlined';
import LikeIcon from '@mui/icons-material/Favorite';
import LikeUnfilledIcon from '@mui/icons-material/FavoriteBorder';
import PeopleIcon from '@mui/icons-material/People';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import EducationIcon from '@mui/icons-material/SchoolOutlined';
import RotateRightSharpIcon from '@mui/icons-material/RotateRightSharp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import MosqueOutlinedIcon from '@mui/icons-material/MosqueOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';



const MatchListBoxVersion2Mobi = (props) => {

  const { user_name } = props;

  // const PhotoTempRequest = `assets/images/profiles/dummy/250-photo-request-f.jpg`
  const PhotoTempRequest = `assets/images/profiles/dummy/250-photo-profile-1.jpg`

  return (
    <>
      <div className='matchlistbox_v2_mobi_wrapper'>
        <div className="matchlistbox_v2_mobi">
          <div className="matchlistbox_v2_mobi_image_box">
            <Carousel interval={null} indicators={true} className='matchlistbox_v2_mobi_carousel'>
              <Carousel.Item>
                <Card.Img
                  className="d-block img-fluid w-100 matchlistbox_v2_mobi_carousel_image"
                  src={`${process.env.PUBLIC_URL}/${PhotoTempRequest}`}
                  alt="" />
                <Card.ImgOverlay>
                  <Card.Text></Card.Text>
                </Card.ImgOverlay>
              </Carousel.Item>
              <Carousel.Item>
                <Card.Img
                  className="d-block img-fluid w-100 matchlistbox_v2_mobi_carousel_image"
                  src={`${process.env.PUBLIC_URL}/${PhotoTempRequest}`}
                  alt="" />
                <Card.ImgOverlay>
                  <Card.Text></Card.Text>
                </Card.ImgOverlay>
              </Carousel.Item>
              <Carousel.Item>
                <Card.Img
                  className="d-block img-fluid w-100 matchlistbox_v2_mobi_carousel_image"
                  src={`${process.env.PUBLIC_URL}/${PhotoTempRequest}`}
                  alt="" />
                <Card.ImgOverlay>
                  <Card.Text></Card.Text>
                </Card.ImgOverlay>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div className="matchlistbox_v2_mobi_profiledetail_wrap">
          <div className="matchlistbox_v2_mobi_profiledetail">
            <div className="matchlistbox_v2_mobi_profiledetail_header">
              <div className="matchlistbox_v2_mobi_profiledetail_header_left">
                <div className="name_box d-flex">
                  <h4>
                    <Link to="">{user_name ? user_name : "Alizabeth"} </Link>
                  </h4>
                </div>
                <div className="location_box mb-1">
                  <span className='location_icon'>
                    <LocationIcon />
                  </span>
                  <p className='mb-0'>
                    <span className='profile_city'>Hyderabad</span>
                    <span className='profile_state'>, {`Sindh`}</span>
                  </p>
                </div>
              </div>
              <div className="matchlistbox_v2_mobi_profiledetail_header_right">
                <div className="matchlistbox_v2_mobi_connect_box">
                  <p className="title">Connect</p>
                  <div className="icon_box_wrapper">
                    <div className="icon_box">
                      <FavoriteBorderIcon className='icon' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="matchlistbox_v2_mobi_profiledetail_body">
              <div className="about_content">
                <div className="row">
                  <div className="col-12 col-sm-12">
                    <div className="about_title_wrapper">
                      <h6 className='about_title'>
                        <span className="icon_wrap">
                          <PeopleAltOutlinedIcon />
                        </span>
                        <span className='title'>
                          About
                        </span>
                      </h6>
                      <div className="match_list_box_v2_detail_menus">
                        <NavDropdown title={<MoreVertIcon />} id="basic-nav-dropdown">
                          <NavDropdown.Item href="#action/3.1">Shortlist</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">Hide</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Block</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.4">Report</NavDropdown.Item>
                        </NavDropdown>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="body_content">
                <div className="row">
                  <div className="col-6">
                    <p className='profile_info mb-2'>
                      <span className='profile_icon'><RotateRightSharpIcon /></span>
                      <span className="profile_info_body">
                        <span className='profile_age'>21 yrs</span>
                        <span className='profile_height'>, {`5'5"`}</span>
                      </span>
                    </p>
                  </div>
                  <div className="col-6">
                    <p className='profile_info mb-2'>
                      <span className='profile_icon'><EducationIcon /></span>
                      <span className="profile_info_body">
                        <span className='profile_age'>Single</span>
                        <span className='profile_height'>/ {`Content Writer`}</span>
                      </span>
                    </p>
                  </div>
                  <div className="col-6">
                    <p className='profile_info mb-2'>
                      <span className='profile_icon'><ArticleIcon /></span>
                      <span className="profile_info_body">
                        <span className='profile_religion'>Muslim</span>
                        <span className='profile_community'>, {`Rajput`}</span>
                      </span>
                    </p>
                  </div>
                  <div className="col-6">
                    <p className='profile_info mb-2'>
                      <span className='profile_icon'><MonetizationOnOutlinedIcon /></span>
                      <span className="profile_info_body">
                        <span className='profile_religion'>18,00 $ / Month</span>
                        {/* <span className='profile_community'>, {``}</span> */}
                      </span>
                    </p>
                  </div>
                  <div className="col-6">
                    <p className='profile_info mb-2'>
                      <span className='profile_icon'><MosqueOutlinedIcon /></span>
                      <span className="profile_info_body">
                        <span className='profile_religion'>Bachelors Degree in Arts</span>
                      </span>
                    </p>
                  </div>
                  <div className="col-6">
                    <p className='profile_info mb-2'>
                      <span className='profile_icon'><PersonOutlineOutlinedIcon /></span>
                      <span className="profile_info_body">
                        <span className='profile_religion'>Online</span>
                        {/* <span className='profile_community'>, {``}</span> */}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="about_content">
                  <div className="row">
                    <div className="col-12 col-sm-12">
                      <p className='about_content_detail mb-0'>
                      Here are a few things you may need to know about me. I have completed my Masters in Engineering. I've been an active student throughout my academic years. As a family, we are closely connected and support each other. I am looking for a life partner who would be my friend and stand by me in every phase of life. Thank you for your attention.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="matchlistbox_v2_mobi_bottom_status">
                  {/* <div className="matchlistbox_v2_mobi_connect_box">
                    <p className="title">Like this Page?</p>
                    <div className="icon_box_wrapper">
                      <div className="icon_box">
                        <RotateRightSharpIcon className='icon' />
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MatchListBoxVersion2Mobi