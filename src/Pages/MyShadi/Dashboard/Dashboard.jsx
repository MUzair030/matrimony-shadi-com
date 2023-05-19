import React from 'react'
import "./Dashboard.css"
import { Header, Footer, Notifications } from "../../../Components"
import { Link } from "react-router-dom"
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import ProfileCard from "./Contents/ProfileCard/ProfileCard"

const Dashboard = () => {

    const ProfileImage = `assets/images/profiles/dummy/250-photo-profile-1.jpg`

    return (
        <>
            <Header isProfile={true} disabled={true} />
            <div className='dashboard_page_wrapped'>
                <div className="row justify-content-center m-0">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-11 p-auto p-sm-2">
                        <div className="dashboard_page Profile">
                            <div className="dashboard_page_left_wrapped ProfileSide">
                                <div className="dashboard_page_left">
                                    <div className="dashboard_short_links_wrapper">
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
                                    </div>
                                    <Notifications />
                                </div>
                                <div className="dashboard_page_center Profile-cente_">
                                    <ProfileCard />
                                </div>
                            </div>
                            <div className="dashboard_page_right">

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