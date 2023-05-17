/* eslint-disable no-unused-vars */
import React from 'react'
import "./MatchListBoxDesk.css"
import SweetAlert from "sweetalert2";
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import CheckCircleRoundedFilledIcon from '@mui/icons-material/CheckCircleRounded';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import { Link } from 'react-router-dom';
import { OverlayTrigger, Popover, Tooltip } from 'react-bootstrap';

const MatchListBoxDesk = (props) => {

    const { user_name } = props;

    // const PhotoTempRequest = `assets/images/profiles/dummy/250-photo-request-f.jpg`
    const PhotoTempRequest = `assets/images/profiles/dummy/250-photo-profile-1.jpg`
    const StatusBackgroundImage = `assets/images/static_images/online-status-icons.png`

    const requestForPhoto = () => {
        SweetAlert.fire({
            title: "Please Add Your Photo First",
            text: "You can request member's photo after your own photo is added to your profile.",
            icon: "warning",
            showCancelButton: true,
            cancelButtonText: "Cancel",
            confirmButtonText: "Add Photo Now",
            reverseButtons: true,
        }).then((result) => {
            if (result.value) {
                alert("Photo Added Message....")
            }
        });
    }

    const matchlistboxVeriicationToolTip = (props) => (
        <Popover {...props}>
            {/* <Popover.Header as="h3">Popover right</Popover.Header> */}
            <Popover.Body className='py-1 d-flex align-items-center'>
                <DoneOutlinedIcon style={{ color: 'var(--color-green_light)', fontSize: '1.4rem' }} />
                <span className='ms-1'>Mobile no. is verified</span>
            </Popover.Body>
        </Popover>
    );

    const matchlistbox_Profile_Match_ToolTip = (props) => (
        <Popover {...props}>
            <Popover.Body className='py-1 pe-4'>
                <div className='d-flex align-items-center'>
                    <DoneOutlinedIcon style={{ color: 'var(--color-green_light)', fontSize: '1.4rem' }} />
                    <span className='ms-1'>Similarity 1</span>
                </div>
                <div className='d-flex align-items-center'>
                    <DoneOutlinedIcon style={{ color: 'var(--color-green_light)', fontSize: '1.4rem' }} />
                    <span className='ms-1'>Similarity 2</span>
                </div>
            </Popover.Body>
        </Popover>
    );

    return (
        <>
            <div className='matchlistbox_wrapper'>
                <div className="matchlistbox">
                    <div className="matchlistbox_profiledetail_wrap">
                        <div className="matchlistbox_profiledetail_box_left">
                            <div className="matchlistbox_profiledetail_box">
                                <div className="matchlistbox_profiledetail_header_box">
                                    <div className="top_header">
                                        <div className="name_box">
                                            <h4>
                                                <Link to="">{user_name ? user_name : "Alizabeth"} </Link>
                                            </h4>
                                            <div className="h_verification_box">
                                                <OverlayTrigger
                                                    placement="bottom"
                                                    delay={{ show: 10, hide: 150 }}
                                                    overlay={matchlistboxVeriicationToolTip}
                                                >
                                                    <VerifiedUserOutlinedIcon />
                                                </OverlayTrigger>
                                            </div>
                                        </div>
                                        <div className="matchlistbox_menus">
                                            {/* Menus */}
                                        </div>
                                    </div>
                                    <div className="bottom_header">
                                        <div className="matchlistbox_status_btn_wrapper">
                                            <div className="matchlistbox_status_btn">
                                                {/* <img className='status_icon' src={`${process.env.PUBLIC_URL}/${StatusBackgroundImage}`} alt="" /> */}
                                                <div className='status_icon' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${StatusBackgroundImage})` }}></div>
                                                <span className='ms-1 status_info'>Online Now</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="matchlistbox_profiledetail_body">
                                    <Link className='matchlistbox_profiledetail_box_wrap_link' to="">
                                        <div className="matchlistbox_profiledetail_box">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 p-0">
                                                    <div className="row m-0">
                                                        <div className="col-12">
                                                            <p className='mb-1'>
                                                                <span className='profile_age'>21 yrs</span>
                                                                <span className='profile_height'>, {`5'5"`}</span>
                                                            </p>
                                                        </div>
                                                        <div className="col-12">
                                                            <p className='mb-1'>
                                                                <span className='profile_religion'>Muslim</span>
                                                                <span className='profile_community'>, {`Rajput`}</span>
                                                            </p>
                                                        </div>
                                                        <div className="col-12">
                                                            <p className='mb-1'>
                                                                <span className='profile_language'>Urdu</span>
                                                            </p>
                                                        </div>
                                                        <div className="col-12">
                                                            <p className='mb-1'>
                                                                <span className='profile_city'>Hyderabad</span>
                                                                <span className='profile_state'>, {`Sindh`}</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="matchlistbox_imagebox_wrap">
                            <div className="matchlistbox_imagebox">
                                <img className='matchlistbox_image img-fluid' cla src={`${process.env.PUBLIC_URL}/${PhotoTempRequest}`} alt="" />
                                <div className="matchlistbox_image_overlay">
                                    <div className="matchlistbox_image_requests">
                                        <div className="request_photo" onClick={requestForPhoto}></div>
                                    </div>
                                    <div className="matchlistbox_image_hidder"> </div>
                                </div>
                            </div>
                        </div>
                        <div className="matchlistbox_profiledetail_box_right">
                            <div className="matchlistbox_profiledetail_box">
                                <div className="matchlistbox_profiledetail_header_box">
                                    <div className="top_header">
                                        <div className="name_box">
                                            <h4>
                                                {""}
                                            </h4>
                                        </div>
                                        <div className="matchlistbox_menus">
                                            {/* Menus */}
                                        </div>
                                    </div>
                                    <div className="bottom_header">
                                        <div className="matchlistbox_profile_match_btn_wrapper">
                                            <OverlayTrigger
                                                placement="bottom"
                                                delay={{ show: 10, hide: 150 }}
                                                overlay={matchlistbox_Profile_Match_ToolTip}
                                            >
                                                <div className="matchlistbox_profile_match_btn">
                                                    <span className='profile_match'><GroupRoundedIcon /></span>
                                                    <span className='ms-1 profile_match_info'>Compatibility</span>
                                                </div>
                                            </OverlayTrigger>
                                        </div>
                                    </div>
                                </div>
                                <div className="matchlistbox_profiledetail_body">
                                    <Link className='matchlistbox_profiledetail_box_wrap_link' to="">
                                        <div className="matchlistbox_profiledetail_box">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 p-0">
                                                    <div className="row m-0">
                                                        <div className="col-12">
                                                            <p className='mb-1'>
                                                                <span className='profile_martial_status'>Never Married</span>
                                                            </p>
                                                        </div>
                                                        <div className="col-12">
                                                            <p className='mb-1'>
                                                                <span className='profile_income'>Not working yet</span>
                                                            </p>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="matchlistbox_description">
                                                                <p className='profile_para'>Here are a few things you may need to know about me. I have completed my Masters in Engineering. I've been an active student throughout my academic years. As a family, we are closely connected and support each other. I am looking for a life partner who would be my friend and stand by me in every phase of life. Thank you for your attention.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="matchlistbox_connectionbox_wrap">
                        <div className="matchlistbox_connectionbox_box">
                            <div className="matchlistbox_connectionbox">
                                <div className="matchlistbox_likeprofile_box">
                                    <p className=' text_profile mb-0 text-center'>Like me?</p>
                                    <div className='matchlistbox_likeprofile_icon_box'>
                                        <span className="icon_box">
                                            <DoneRoundedIcon className='m_icon' />
                                        </span>
                                        <p className="matchlistbox_likeprofile_status mb-0 text-center">Connect Now</p>
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

export default MatchListBoxDesk