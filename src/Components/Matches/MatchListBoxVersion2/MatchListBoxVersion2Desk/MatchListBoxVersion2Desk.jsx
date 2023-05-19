/* eslint-disable no-unused-vars */
import React from 'react'
import "./MatchListBoxVersion2Desk.css"
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { NavDropdown } from "react-bootstrap";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const MatchListBoxVersion2Desk = (props) => {

    const { user_name, user_profile } = props;

    const PhotoTempRequest = `assets/images/profiles/dummy/250-photo-profile-1.jpg`

    return (
        <div className='match_list_box_v2'>
            <div className="match_list_box_v2_top_box_wrapped">
                <div className="match_list_box_v2_top_box">
                    <div className="match_list_box_v2_image_box_wrapped">
                        <div className="match_list_box_v2_image_box">
                            <img className='match_list_box_v2_image img-fluid' src={`${process.env.PUBLIC_URL}/${user_profile ? user_profile : PhotoTempRequest}`} alt="" />
                        </div>
                    </div>
                    <div className="match_list_box_v2_detail_wrapped">
                        <div className="match_list_box_v2_detail">
                            <div className="match_list_box_v2_detail_header">
                                <div className="match_list_box_v2_detail_name">
                                    <h4>{user_name ? user_name : "Alizabeth"}</h4>
                                </div>
                                <div className="match_list_box_v2_detail_menus">
                                    <NavDropdown title={<MoreVertIcon />} id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Shortlist</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Hide</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Block</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Report</NavDropdown.Item>
                                    </NavDropdown>
                                </div>
                            </div>
                            <div className="match_list_box_v2_detail_body">
                                <div className="match_list_box_v2_detail_body_info match_list_box_v2_detail_body_info_1">
                                    <span className='match_list_box_v2_detail_body_info_1_a'>Single</span>
                                    <span className='match_list_box_v2_detail_body_info_1_b'>Content Writer</span>
                                </div>
                                <div className="match_list_box_v2_detail_body_info match_list_box_v2_detail_body_info_2">
                                    <span className='match_list_box_v2_detail_body_info_2_a'>Muslim</span>
                                    <span className='match_list_box_v2_detail_body_info_2_b'>Awan</span>
                                </div>
                                <div className="match_list_box_v2_detail_body_icon_info">
                                    <div className="match_list_box_v2_detail_body_icon_info_icon">
                                        <PlaceOutlinedIcon />
                                    </div>
                                    <div className="match_list_box_v2_detail_body_info match_list_box_v2_detail_body_info_2">
                                        <span className='match_list_box_v2_detail_body_info_2_a'>Karachi</span>
                                        <span className='match_list_box_v2_detail_body_info_2_b'>Sindh</span>
                                    </div>
                                </div>
                                <div className="match_list_box_v2_detail_body_icon_info">
                                    <div className="match_list_box_v2_detail_body_icon_info_icon">
                                        <InfoOutlinedIcon />
                                    </div>
                                    <div className="match_list_box_v2_detail_body_info match_list_box_v2_detail_body_info_2">
                                        <span className='match_list_box_v2_detail_body_info_2_a'>27 yrs</span>
                                        <span className='match_list_box_v2_detail_body_info_2_b'>5'5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="match_list_box_v2_bottom_box_wrapped">
                <div className="match_list_box_v2_bottom_box">
                    <div className="match_list_box_v2_bottom_box_about_box">
                        <p className="match_list_box_v2_bottom_box_about">
                        Here are a few things you may need to know about me. I have completed my Masters in Engineering. I've been an active student throughout my academic years. As a family, we are closely connected and support each other. I am looking for a life partner who would be my friend and stand by me in every phase of life. Thank you for your attention.
                        </p>
                    </div>
                    <div className="match_list_box_v2_status_box_wrapped">
                        <div className="match_list_box_v2_status_box">
                            <div className="match_list_box_v2_status_left">

                            </div>
                            <div className="match_list_box_v2_connect_box_wrapped">
                                <div className="match_list_box_v2_connect_box">
                                    <div className="match_list_box_v2_connect_box_icon_box mx-auto">
                                        {/* "match_list_box_v2_connect_box_icon" */}
                                        <FavoriteBorderIcon />
                                    </div>
                                    <p className='match_list_box_v2_connect_box_title mb-0'>Connect Now</p>
                                </div>
                            </div>
                            <div className="match_list_box_v2_status_right">
                                <div className="match_list_box_v2_live_status">
                                    <p className='live_status_title'>Online</p>
                                    <span className='live_status_indicator'></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MatchListBoxVersion2Desk