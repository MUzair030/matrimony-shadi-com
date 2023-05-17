/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import "./ProfileCreation.css"
import {
    Tabs,
    Tab,
    useFormControl,
    Checkbox,
    Box,
    TextField,
    Stack,
    Button
} from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import { Form, Row, Col, Card, CardHeader, CardBody, CardFooter } from 'reactstrap'
import { Header } from '../../Components'
import { useNavigate } from "react-router-dom"
import { Controller, useForm } from "react-hook-form";
import DoneIcon from '@mui/icons-material/Done';
import ProfileIcon from '@mui/icons-material/AccountCircle';
import EducationIcon from '@mui/icons-material/School';
import YourIntroIcon from '@mui/icons-material/PermIdentity';
import ProfileForm from './ProfileForm';
import AboutMoreForm from './AboutMoreForm';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import useWindowDimensions from '../../Hooks/useWindowDimensions';
import ShadiProfileLogo from "../../assets/shaadi-logo-profile.png"

const ProfileCreation = () => {

    const navigate = useNavigate();

    const [tabValue, setTabValue] = useState(0);
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };
    const { screenWidth, screenHeight } = useWindowDimensions();

    const ImageTest = "assets/images/banner/banner-img-3.jpg";
    // const ImageTest = "assets/images/banner/banner-img-6.jpg";

    useEffect(() => {

    }, [])

    const handleContinueTab = () => {
        if (tabValue === 0) {
            setTabValue(1);
        }
        if (tabValue === 1) {
            // setTabValue(2);
            navigate("/partner-preference")
        }
    }

    const handlePreviousTab = () => {
        if (tabValue === 2) {
            setTabValue(1);
        }
        if (tabValue === 1) {
            setTabValue(0);
        }
    }

    return (
        <>
            {/* <Header isProfileCreation={true} /> */}
            <div className='profile_creation_wrapper'>
                <div className="container-fluid">
                    <Row className='justify-content-center m-0'>
                        <Col xs="12" sm="12" md="11" xl="10" className='my-4'>
                            <TabContext value={tabValue}>
                                <div className={`prof_creation_tabContext_tabpanel_header ${tabValue == 0 || tabValue == 1 ? "prof_c_tab_spacing" : ""}`}>
                                    <div className="prof_creation_img_box">
                                        <img className="img-fluid" src={ShadiProfileLogo} alt="" />
                                        <p>We strive for better connection</p>
                                    </div>
                                    <div className="prof_creation_tabs_header">
                                        <div className="prof_creation_top_panel text-center">
                                            <TabPanel
                                                value={0}
                                                className="ProfileCreation___tabpanel"
                                            >
                                                <h4 className='mb-0'>Let’s Create Your Profile Now</h4>
                                            </TabPanel>
                                            <TabPanel
                                                value={1}
                                                className="ProfileCreation___tabpanel"
                                            >
                                                {/* <h4 className='mb-0'>Questions About Your Education & Career</h4> */}
                                                {/* <h4 className='mb-0'>Tell Us More About Yorself</h4> */}
                                                <h4 className='mb-0'>Let’s Create Your Profile Now</h4>
                                            </TabPanel>
                                        </div>
                                        <Tabs
                                            TabIndicatorProps={{
                                                style: { background: "#FF629500", justifyContent: 'center' },
                                            }}
                                            value={tabValue}
                                            onChange={handleTabChange}
                                            className="ProfileCreation__tab_wrapper"
                                            aria-label="icon tabs example"
                                        >
                                            <Tab
                                                icon={
                                                    <ProfileIcon className={`prof_creation_icon ${tabValue == 1 || tabValue == 2 ? "ptab_completed" : ""}`} />
                                                }
                                                // label="Profile"
                                                aria-label="profile_part"
                                                className={`ProfileCreation_TabContext__tab ${tabValue == 1 || tabValue == 2 ? "ptab_completed" : ""}`}
                                            />
                                            <Tab
                                                icon={
                                                    <EducationIcon className={`prof_creation_icon ${tabValue == 2 ? "ptab_completed" : ""}`} />
                                                }
                                                // label="Education"
                                                aria-label="education_part"
                                                className={`ProfileCreation_TabContext__tab ${tabValue == 2 ? "ptab_completed" : ""}`}
                                            // disabled={tabValue === 0}
                                            />
                                        </Tabs>
                                    </div>
                                </div>
                                <Card style={{ marginTop: 40 }} className="prof_creation_card">
                                    <CardBody>
                                        <div className="prof_creation_main_panel my-4">
                                            <TabPanel
                                                value={0}
                                                className="ProfileCreation___tabpanel profile_creation_fields"
                                            >
                                                <ProfileForm nextTab={handleContinueTab} />
                                            </TabPanel>
                                            <TabPanel
                                                value={1}
                                                className="ProfileCreation___tabpanel profile_creation_fields"
                                            >
                                                <AboutMoreForm nextTab={handleContinueTab} />
                                            </TabPanel>
                                            {/* <div className="next_button_panel">
                                                                <Button type='button' className='btn_next' onClick={handleContinueTab}>
                                                                    {tabValue === 2 ? "Create Profile" : "Continue"}
                                                                </Button>
                                                            </div> */}
                                            {/* {
                                                tabValue !== 0 && <div className="back_button_box">
                                                    <span className='btn_back' onClick={handlePreviousTab}>
                                                        <ArrowBackOutlinedIcon />
                                                    </span>
                                                </div>
                                            } */}
                                        </div>
                                    </CardBody>
                                </Card>
                            </TabContext>
                        </Col>
                    </Row>
                </div>
            </div>
        </>

    )
}

export default ProfileCreation