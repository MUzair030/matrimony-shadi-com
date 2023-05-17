/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react'
import "./MatchViewBoxMobi.css"
import "./MatchViewBox.css"
import Slider from "react-slick";
import {
    Tabs,
    Tab,
    Stack,
    Button
} from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { NavDropdown } from "react-bootstrap";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EducationIcon from '@mui/icons-material/SchoolOutlined';
import RotateRightSharpIcon from '@mui/icons-material/RotateRightSharp';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import SquareFootOutlinedIcon from '@mui/icons-material/SquareFootOutlined';
import MatchviewboxDetailedProfileMobi from "./Matchviewbox_Detailed_Profile/MatchviewboxDetailedProfileMobi";
import PartnerPreferences from "./PartnerPreferences/PartnerPreferences";
import { ArrowForward, ArrowBack } from "@material-ui/icons";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: false,
                dots: false,
                arrows: true,
            },
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 1,
                arrows: true,
            },
        },
        {
            breakpoint: 475,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                arrows: true,
            },
        },
        {
            breakpoint: 375,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows: true,
            },
        },
    ],
};

const MatchViewBoxMobi = (props) => {

    const { user_name } = props;
    const PhotoTempRequest = `assets/images/profiles/dummy/profile-photo-2.jpg`;
    const profileImagesArrayInitalize = [
        { image: "assets/images/profiles/dummy/profile-photo-2.jpg" },
        { image: "assets/images/profiles/dummy/profile-photo-3.jpg" },
        { image: "assets/images/profiles/dummy/profile-photo-4.jpg" },
        { image: "assets/images/profiles/dummy/profile-photo-5.jpg" },
        { image: "assets/images/profiles/dummy/bala_hatun_1.jpg" },
        { image: "assets/images/profiles/dummy/profile-photo-1.jpg" },
        { image: "assets/images/profiles/dummy/bala_hatun_3.jpg" },
        { image: "assets/images/profiles/dummy/profile-photo-3.jpg" },
    ]
    const [profileImagesArray, setProfileImagesArray] = useState(profileImagesArrayInitalize)
    const [displayedProfileImage, setDisplayedProfileImage] = useState(null);

    useEffect(() => {
        if (profileImagesArray && profileImagesArray.length > 0) {
            setDisplayedProfileImage(profileImagesArray[0].image)
        }
    }, [])

    const [tabValue, setTabValue] = useState(0);
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <div className="matchviewbox_mobi_wrapper">
            <div className="matchviewbox_mobi">
                <div className="matchviewbox_mobi_imagebox_wrapper">
                    <div className="matchviewbox_mobi_imagebox">
                        <img src={`${process.env.PUBLIC_URL}/${displayedProfileImage}`} alt={""} />
                    </div>
                    {
                        profileImagesArray && profileImagesArray.length > 0 && <div className="matchviewbox_mobi_imagebox_other_images_wrapper">
                            <Slider
                                nextArrow={<ArrowForwardIosIcon className='matchviewbox_slider_arrow_icon' />}
                                prevArrow={<ArrowBackIosIcon className='matchviewbox_slider_arrow_icon' />}
                                {...settings}
                            >
                                {
                                    profileImagesArray.map((item, index) => (
                                        <div key={index} className={`matchviewbox_mobi_imagebox_other_images_box ${item.image.includes(displayedProfileImage) ? "m_mobi_imgb_selected" : "m_mobi_imgb_not_selected"}`}>
                                            <img src={`${process.env.PUBLIC_URL}/${item.image}`}
                                                alt={item.image}
                                                onClick={() => setDisplayedProfileImage(item.image)}
                                            />
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                    }
                </div>
                <div className="matchviewbox_mobi_detail_wrapped">
                    <div className="matchviewbox_mobi_detail">
                        <div className="matchviewbox_mobi_detail_header">
                            <div className="matchviewbox_mobi_detail_name">
                                {/* <h4>{user_name ? user_name : "Alizabeth"}</h4> */}
                                <h4>{"Alizabeth Swoarn"}</h4>
                            </div>
                            <div className="matchviewbox_mobi_detail_menus">
                                <div className="matchviewbox_mobi_detail_menus_button_box">
                                    <div className="matchviewbox_mobi_detail_menus_button me-3">
                                        <PhoneInTalkIcon />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="matchviewbox_mobi_detail_body">
                            <div className="matchviewbox_mobi_detail_body_info matchviewbox_mobi_detail_body_info_1">
                                <span className='matchviewbox_mobi_detail_body_info_1_a'>Single</span>
                                <span className='matchviewbox_mobi_detail_body_info_1_b'>Content Writer</span>
                            </div>
                            <div className="matchviewbox_mobi_detail_body_info matchviewbox_mobi_detail_body_info_2">
                                <span className='matchviewbox_mobi_detail_body_info_2_a'>Muslim</span>
                                <span className='matchviewbox_mobi_detail_body_info_2_b'>Awan</span>
                            </div>
                        </div>
                    </div>
                    <div className='matchviewbox_mobi_detail_bottom_wrapper'>
                        <div className="matchviewbox_mobi_detail_bottom">
                            <div className="matchviewbox_mobi_detail_bottom_icon_info">
                                <div className="matchviewbox_mobi_detail_bottom_icon_info_icon">
                                    <PlaceOutlinedIcon />
                                </div>
                                <div className="matchviewbox_mobi_detail_bottom_info matchviewbox_mobi_detail_bottom_info_2">
                                    <span className='matchviewbox_mobi_detail_bottom_info_2_a'>Karachi</span>
                                    <span className='matchviewbox_mobi_detail_bottom_info_2_b'>Sindh</span>
                                </div>
                            </div>
                            <div className="matchviewbox_mobi_detail_bottom_icon_info">
                                <div className="matchviewbox_mobi_detail_bottom_icon_info_icon">
                                    <EducationIcon />
                                </div>
                                <div className="matchviewbox_mobi_detail_bottom_info">
                                    <span className=''>Bachelors Degree in Arts</span>
                                </div>
                            </div>
                            <div className="matchviewbox_mobi_detail_bottom_icon_info">
                                <div className="matchviewbox_mobi_detail_bottom_icon_info_icon">
                                    <RotateRightSharpIcon />
                                </div>
                                <div className="matchviewbox_mobi_detail_bottom_info matchviewbox_mobi_detail_bottom_info_2">
                                    <span className='matchviewbox_mobi_detail_bottom_info_2_a'>27 yrs</span>
                                    <span className='matchviewbox_mobi_detail_bottom_info_2_b'>5'5</span>
                                </div>
                            </div>
                            <div className="matchviewbox_mobi_detail_bottom_icon_info">
                                <div className="matchviewbox_mobi_detail_bottom_icon_info_icon">
                                    <MonetizationOnOutlinedIcon />
                                </div>
                                <div className="matchviewbox_mobi_detail_bottom_info">
                                    <span className=''>18,00 $ / Month</span>
                                </div>
                            </div>
                        </div>
                        <div className="matchviewbox_mobi_detail_menus_box">
                            <div className="matchviewbox_mobi_detail_dropmenus">
                                <NavDropdown title={<MoreVertIcon className='icon' />} id="basic-nav-dropdown">
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

            <div className="matchviewbox_prefrences">
                <TabContext value={tabValue}>
                    <div className="matchviewbox_prefrences_main_tabs">
                        <Tabs
                            TabIndicatorProps={{
                                style: { background: "#FF629500", justifyContent: 'center' },
                            }}
                            value={tabValue}
                            onChange={handleTabChange}
                            className="matchviewbox_prefrences__tab_wrapper"
                            aria-label="icon tabs example"
                        >
                            <Tab
                                label="Detailed Profile"
                                // icon={
                                //   <ProfileIcon className="prof_creation_icon" />
                                // }
                                aria-label="detailed_profile_part"
                                className="matchviewbox_prefrences_tabcontext__tab"
                            />
                            <Tab
                                label="Partner Prefrences"
                                aria-label="partner_prefrences_part"
                                className="matchviewbox_prefrences_tabcontext__tab"
                            />
                        </Tabs>
                    </div>
                    <div className="matchviewbox_prefrences_main_panel">
                        <TabPanel
                            value={0}
                            className="matchviewbox_prefrences___tabpanel"
                        >
                            <MatchviewboxDetailedProfileMobi />
                        </TabPanel>
                        <TabPanel
                            value={1}
                            className="matchviewbox_prefrences___tabpanel"
                        >
                            <PartnerPreferences />
                        </TabPanel>
                    </div>
                </TabContext>
            </div>

        </div>
    )
}

export default MatchViewBoxMobi