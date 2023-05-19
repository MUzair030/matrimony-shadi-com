/* eslint-disable no-unused-vars */
import React from 'react'
import "./MatchListBoxMobi.css"
import { Carousel, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import LocationIcon from '@mui/icons-material/Room';
import ArticleIcon from '@mui/icons-material/Article';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import MessageIcon from '@mui/icons-material/Message';
import LikeThumbIcon from '@mui/icons-material/ThumbUpOutlined';
import OnlineIcon from '@mui/icons-material/OnlinePredictionOutlined';
import LikeIcon from '@mui/icons-material/Favorite';
import LikeUnfilledIcon from '@mui/icons-material/FavoriteBorder';

const MatchListBoxMobi = (props) => {

    const { user_name } = props;

    // const PhotoTempRequest = `assets/images/profiles/dummy/250-photo-request-f.jpg`
    const PhotoTempRequest = `assets/images/profiles/dummy/250-photo-profile-1.jpg`

    return (
        <>
            <div className='matchlistbox_mobi_wrapper'>
                <div className="matchlistbox_mobi">
                    <div className="matchlistbox_mobi_image_box">
                        <Carousel interval={null} indicators={true} className='matchlistbox_mobi_carousel'>
                            <Carousel.Item>
                                <Card.Img
                                    className="d-block img-fluid w-100 matchlistbox_mobi_carousel_image"
                                    src={`${process.env.PUBLIC_URL}/${PhotoTempRequest}`}
                                    alt="" />
                                <Card.ImgOverlay>
                                    <Card.Text></Card.Text>
                                </Card.ImgOverlay>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Card.Img
                                    className="d-block img-fluid w-100 matchlistbox_mobi_carousel_image"
                                    src={`${process.env.PUBLIC_URL}/${PhotoTempRequest}`}
                                    alt="" />
                                <Card.ImgOverlay>
                                    <Card.Text></Card.Text>
                                </Card.ImgOverlay>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Card.Img
                                    className="d-block img-fluid w-100 matchlistbox_mobi_carousel_image"
                                    src={`${process.env.PUBLIC_URL}/${PhotoTempRequest}`}
                                    alt="" />
                                <Card.ImgOverlay>
                                    <Card.Text></Card.Text>
                                </Card.ImgOverlay>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                <div className="matchlistbox_mobi_profiledetail_wrap">
                    <div className="matchlistbox_mobi_profiledetail">
                        <div className="matchlistbox_mobi_profiledetail_header">
                            <div className="matchlistbox_mobi_profiledetail_header_left">
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
                            <div className="matchlistbox_mobi_profiledetail_header_right">

                            </div>
                        </div>
                        <div className="matchlistbox_mobi_profiledetail_body">
                            <div className="about_content">
                                <div className="row">
                                    <div className="col-12 col-sm-12">
                                        <h6>About</h6>
                                        <p className='mb-0'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At et quidem odit id blanditiis sapiente earum dolorum, dolore reprehenderit laudantium exercitationem veritatis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="body_content">
                                <div className="row">
                                    <div className="col-6">
                                        <p className='profile_info mb-1'>
                                            <span className='profile_icon'><ArticleIcon /></span>
                                            <span className='profile_age'>21 yrs</span>
                                            <span className='profile_height'>, {`5'5"`}</span>
                                        </p>
                                        <p className='profile_info mb-1'>
                                            <span className='profile_icon'><ArticleIcon /></span>
                                            <span className='profile_religion'>Muslim</span>
                                            <span className='profile_community'>, {`Rajput`}</span>
                                        </p>
                                        <p className='profile_info mb-1'>
                                            <span className='profile_icon'><ArticleIcon /></span>
                                            <span className='profile_religion'>Not specified</span>
                                            {/* <span className='profile_community'>, {`Rajput`}</span> */}
                                        </p>
                                    </div>
                                    <div className="col-6">
                                        <p className='profile_status_para mb-1'>
                                            <span className='profile_status_icon'><MessageIcon /></span>
                                            <span className='profile_status'>Online</span>
                                        </p>
                                        <p className='profile_match_info mb-1'>
                                            <span className='profile_match_info_icon'><GroupRoundedIcon /></span>
                                            <span className=''>Compatibility</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="row mt-1">
                                    <div className="col-6">
                                        {/* <p className='profile_like mb-1'>
                                            <span className='profile_like_icon'><LikeIcon /></span>
                                            <span className='profile_like_text'>Like this Profile ?</span>
                                        </p> */}
                                        <p className='profile_connect mb-1'>
                                            <span className='profile_connect_icon'><LikeIcon /></span>
                                            <span className='profile_connect_text'>Like me?</span>
                                        </p>
                                    </div>
                                    <div className="col-6">
                                        <p className='profile_connect mb-1'>
                                            <span className='profile_connect_icon'><OnlineIcon /></span>
                                            <span className='profile_connect_text'>Connect Now</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MatchListBoxMobi