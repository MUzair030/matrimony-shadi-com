/* eslint-disable no-unused-vars */
import React from 'react'
import "./AboutMobi.css"
import {
    Tabs,
    Tab,
    Stack,
    Button
} from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import InfoIcon from '@mui/icons-material/Info';


const AboutMobi = (props) => {

    const { user_name, user_image } = props;

    const displayedProfileImage = "assets/images/profiles/dummy/profile-photo-men-1.jpg";

    return (
        <div className="about_page_mobi">
            {/* ********************************************** */}
            <div className="aboutpage_topviewbox_mobi_wrapper">
                <div className="aboutpage_topviewbox_mobi">
                    <div className="aboutpage_topviewbox_mobi_imagebox_wrapper">
                        <div className="aboutpage_topviewbox_mobi_imagebox">
                            <img src={`${process.env.PUBLIC_URL}/${displayedProfileImage}`} alt={""} />
                        </div>
                    </div>
                    <div className="aboutpage_topviewbox_mobi_detail_wrapped">
                        <div className="aboutpage_topviewbox_mobi_detail">
                            <div className="aboutpage_topviewbox_mobi_detail_header">
                                <div className="aboutpage_topviewbox_mobi_detail_name">
                                    <h4>{user_name ? user_name : "Saif Ali Khan"}</h4>
                                </div>
                                <div className="aboutpage_topviewbox_mobi_detail_menus">
                                    <CheckBoxIcon className="aboutpage_verify_icon" />
                                </div>
                            </div>
                            <div className="aboutpage_topviewbox_mobi_detail_body">
                                <div className="aboutpage_topviewbox_mobi_detail_body_info aboutpage_topviewbox_mobi_detail_body_info_1">
                                    <span className='aboutpage_topviewbox_mobi_detail_body_info_1_a'>Single</span>
                                    <span className='aboutpage_topviewbox_mobi_detail_body_info_1_b'>Content Writer</span>
                                </div>
                                <div className="aboutpage_topviewbox_mobi_detail_body_info aboutpage_topviewbox_mobi_detail_body_info_2">
                                    <span className='aboutpage_topviewbox_mobi_detail_body_info_2_a'>Muslim</span>
                                    <span className='aboutpage_topviewbox_mobi_detail_body_info_2_b'>Awan</span>
                                </div>
                            </div>
                        </div>
                        <div className='aboutpage_topviewbox_mobi_detail_bottom_wrapper'>
                            <div className="aboutpage_topviewbox_mobi_detail_bottom">
                                {/* ------- */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aboutpage_topviewbox_aboutcontent_mobi">
                    <div className="aboutpage_topviewbox_aboutcontent_mobi_header">
                        <div className="aboutpage_topviewbox_aboutcontent_mobi_header-title_box">
                            <div className="ab_p_t_content_icon_box">
                                <InfoIcon className='ab_p_t_content_icon' />
                            </div>
                            <p className="ab_p_t_content_text">About</p>
                        </div>
                    </div>
                    <div className="aboutpage_topviewbox_aboutcontent_mobi_body">
                        Cras sed judunt. Interdum et malesuada fames ac ante in faucibus fa Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed judunt. Interdum et malesuada fames ac ante in faucibus fa Cras sed judunt. Interdum et malesuada fames ac ante in faucibus fa Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                </div>
            </div>
            {/* ********************************************** */}
        </div>
    )
}

export default AboutMobi