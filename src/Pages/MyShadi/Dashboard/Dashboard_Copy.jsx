import React from 'react'
import "./Dashboard_Copy.css"
import { Header, Footer } from "../../../Components"
import { Link } from "react-router-dom"
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import MessageIcon from '@mui/icons-material/Message';

const Dashboard = () => {


    const ProfileImage = `assets/images/profiles/dummy/250-photo-profile-1.jpg`

    return (
        <>
            <Header isProfile={true} disabled={true} />
            <div className='dashboard_page_wrapped'>
                <div className="row justify-content-center m-0">
                    <div className="col-12 col-sm-11 col-md-11 p-auto p-sm-2">
                        <div className="dashboard_page">
                            <div className="dashboard_page_left">
                                <div className="dashboard_short_links">
                                    <div className="d_short_links_title">
                                        <p className='mb-0'>My Account Info</p>
                                    </div>
                                    <div className="d_links_box">
                                        <Link to="">
                                            <div className="d_link">
                                                <span className='dlogo'><DoubleArrowIcon /></span>
                                                <span className='dtext'>Contact Info</span>
                                            </div>
                                        </Link>
                                        <Link to="">
                                            <div className="d_link">
                                                <span className='dlogo'><DoubleArrowIcon /></span>
                                                <span className='dtext'>My Profile Info</span>
                                            </div>
                                        </Link>
                                        <Link to="">
                                            <div className="d_link">
                                                <span className='dlogo'><DoubleArrowIcon /></span>
                                                <span className='dtext'>My Photo Albums</span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="dashboard_notification_wrapper">
                                    <div className="d_notif_title">
                                        <p className='mb-0'>Notification</p>
                                    </div>
                                    <div className="dashboard_notification">
                                        <div className="dashboard_notification_box">
                                            <div className="d_nofit_logo">
                                                <MessageIcon className='d_noftif_icon' />
                                            </div>
                                            <div className="d_nofif_descript">
                                                <p className='d_notif_message mb-0'>Nitification Message</p>
                                                <p className='d_notif_time mb-0'>08-10-2022</p>
                                            </div>
                                        </div>
                                        <div className="dashboard_notification_box">
                                            <div className="d_nofit_logo">
                                                <MessageIcon className='d_noftif_icon' />
                                            </div>
                                            <div className="d_nofif_descript">
                                                <p className='d_notif_message mb-0'>Nitification Message</p>
                                                <p className='d_notif_time mb-0'>08-10-2022</p>
                                            </div>
                                        </div>
                                        <div className="dashboard_notification_box">
                                            <div className="d_nofit_logo">
                                                <MessageIcon className='d_noftif_icon' />
                                            </div>
                                            <div className="d_nofif_descript">
                                                <p className='d_notif_message mb-0'>Nitification Message</p>
                                                <p className='d_notif_time mb-0'>08-10-2022</p>
                                            </div>
                                        </div>
                                        <div className="dashboard_notification_box">
                                            <div className="d_nofit_logo">
                                                <MessageIcon className='d_noftif_icon' />
                                            </div>
                                            <div className="d_nofif_descript">
                                                <p className='d_notif_message mb-0'>Nitification Message</p>
                                                <p className='d_notif_time mb-0'>08-10-2022</p>
                                            </div>
                                        </div>
                                        <div className="dashboard_notification_box">
                                            <div className="d_nofit_logo">
                                                <MessageIcon className='d_noftif_icon' />
                                            </div>
                                            <div className="d_nofif_descript">
                                                <p className='d_notif_message mb-0'>Nitification Message</p>
                                                <p className='d_notif_time mb-0'>08-10-2022</p>
                                            </div>
                                        </div>
                                        <div className="dashboard_notification_box">
                                            <div className="d_nofit_logo">
                                                <MessageIcon className='d_noftif_icon' />
                                            </div>
                                            <div className="d_nofif_descript">
                                                <p className='d_notif_message mb-0'>Nitification Message</p>
                                                <p className='d_notif_time mb-0'>08-10-2022</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dasbboard_page_center">
                                <div className="dasbboard_activity">
                                    <div className="activity_box_wrapped">
                                        <div className="activity_box">
                                            <div className="activity_indicator">
                                                <p className='mb-0'>1</p>
                                            </div>
                                            <div className="activity_text">
                                                <p className='mb-0'>Pending Activities</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="activity_box_wrapped">
                                        <div className="activity_box">
                                            <div className="activity_indicator">
                                                <p className='mb-0'>1</p>
                                            </div>
                                            <div className="activity_text">
                                                <p className='mb-0'>Accepted Invitations</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="activity_box_wrapped">
                                        <div className="activity_box">
                                            <div className="activity_indicator">
                                                <p className='mb-0'>1</p>
                                            </div>
                                            <div className="activity_text">
                                                <p className='mb-0'>Pending Activities</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="activity_box_wrapped">
                                        <div className="activity_box">
                                            <div className="activity_indicator">
                                                <p className='mb-0'>1</p>
                                            </div>
                                            <div className="activity_text">
                                                <p className='mb-0'>Accepted Invitations</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="activity_box_wrapped">
                                        <div className="activity_box">
                                            <div className="activity_indicator">
                                                <p className='mb-0'>1</p>
                                            </div>
                                            <div className="activity_text">
                                                <p className='mb-0'>Pending Activities</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="activity_box_wrapped">
                                        <div className="activity_box">
                                            <div className="activity_indicator">
                                                <p className='mb-0'>1</p>
                                            </div>
                                            <div className="activity_text">
                                                <p className='mb-0'>Accepted Invitations</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="activity_box_wrapped">
                                        <div className="activity_box">
                                            <div className="activity_indicator">
                                                <p className='mb-0'>1</p>
                                            </div>
                                            <div className="activity_text">
                                                <p className='mb-0'>Pending Activities</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dashboard_page_right">
                                <div className="dashboard_user_profile_box_wrapped">
                                    <div className="dashboard_user_profile_box">
                                        <div className="dashboard_user_profile_imagebox">
                                            <img className='dashboard_user_profile_image img-fluid' src={`${process.env.PUBLIC_URL}/${ProfileImage}`} alt="" />
                                        </div>
                                    </div>
                                    <div className="dashboard_user_profile_info_wrapped">
                                        <div className="dashboard_user_profile_info_box">
                                            <div className="d_userprof_descript">
                                                <p className='d_userprof_info_1 mb-0'>Alina Alina</p>
                                                <p className='d_userprof_info_2 mb-0'>AA244u4</p>
                                            </div>
                                            <div className="d_userprof_btn_box">
                                                <p className='d_userprof_btn mb-0'>Edit</p>
                                            </div>
                                        </div>
                                        <div className="dashboard_user_profile_info_box">
                                            <div className="d_userprof_descript">
                                                <p className='d_userprof_info_1 mb-0'>Free Membership</p>
                                                <p className='d_userprof_info_2 mb-0'>Account Type</p>
                                            </div>
                                            <div className="d_userprof_btn_box">
                                                <p className='d_userprof_btn mb-0'>Upgrade</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Dashboard