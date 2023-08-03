/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react'
import "../../../Matches/RecentlyViewed/RecentlyViewed.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Header, Footer, RecentlyViewBox, ChatBox, MyMatchesFilter } from '../../../../Components'
import Slider from "react-slick";
import { Card, CardBody } from "reactstrap"
import { ArrowForward, ArrowBack } from "@material-ui/icons";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1,
                arrows: true,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
            },
        },
    ],
};

const RecentlyViewedDesk = (props) => {

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
                    <div className="recent_visitors_page_container">
                        {/* <div className="recently_viewed_page_left_container d-none d-lg-block">
                            <ChatBox />
                        </div> */}
                        <div className="recently_viewed_page_center_container">
                            <div className="row m-0">
                                <div className="col-12 mb-4">
                                    <Card className="recently_viewed_page_slider px-1">
                                        <CardBody className="py-4">
                                            <Slider
                                                nextArrow={<span className='recently_viewed_page_slider_arrow_icon'><ArrowForwardIosIcon /></span>}
                                                prevArrow={<span className='recently_viewed_page_slider_arrow_icon'><ArrowBackIosIcon /></span>}
                                                ref={slider}
                                                {...settings}
                                            >
                                                {
                                                    recentlyViewedData && recentlyViewedData.map((item, index) => (
                                                        <RecentlyViewBox key={index} user_name={item.name} user_profile={item.user_profile} />
                                                    ))
                                                }
                                            </Slider>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                        </div>
                        {/* <div className="recently_viewed_page_right_container d-none d-lg-block">
                            <MyMatchesFilter />
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecentlyViewedDesk