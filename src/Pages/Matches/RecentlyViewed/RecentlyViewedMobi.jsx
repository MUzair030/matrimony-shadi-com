/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react'
import { Header, Footer, ChatBox, MyMatchesFilter, RecentlyViewBoxMobi } from '../../../Components'
import "./RecentlyViewedMobi.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ArrowForward, ArrowBack } from "@material-ui/icons";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const RecentlyViewedMobi = (props) => {

    const slider = useRef(null);

    const user_profile1 = "assets/images/profiles/dummy/profile-photo-1.jpg";
    const user_profile2 = "assets/images/profiles/dummy/profile-photo-4.jpg";
    const user_profile3 = "assets/images/profiles/dummy/profile-photo-3.jpg";
    const user_profile4 = "assets/images/profiles/dummy/profile-photo-5.jpg";
    const user_profile5 = "assets/images/profiles/dummy/profile-photo-6.jpg";
    const user_profile6 = "assets/images/profiles/dummy/profile-photo-7.jpg";
    const user_profile7 = "assets/images/profiles/dummy/profile-photo-8.jpg";

    const inializeView = [
        { name: "Abida Asim", user_profile: user_profile7 },
        { name: "Freeha Jabeen", user_profile: user_profile1 },
        { name: "Kiran Ali Khan", user_profile: user_profile4 },
        { name: "Nimra Batool", user_profile: user_profile2 },
        { name: "Rida Azam", user_profile: user_profile5 },
        { name: "Jasmine Asim", user_profile: user_profile3 },
    ]
    const [recentlyViewedData, setRecentlyViewedData] = useState(inializeView);

    return (
        <>
            <div className="matches_page_wrapper">
                <div className="container_border_mini">
                    <div className="recently_viewed_page_container">
                        <div className="recently_viewed_page_left_container d-none d-lg-block">
                            <ChatBox />
                        </div>
                        <div className="recently_viewed_page_center_container">
                            <div className="row m-0">
                                {
                                    recentlyViewedData && recentlyViewedData.map((item, index) => (
                                        <div className="col-12 col-sm-12 col-md-6 mb-4">
                                            <RecentlyViewBoxMobi key={index} user_name={item.name} user_profile={item.user_profile} />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="recently_viewed_page_right_container d-none d-lg-block">
                            <MyMatchesFilter />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecentlyViewedMobi