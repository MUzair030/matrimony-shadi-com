/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import "./Header.css"
import {
  Nav
} from "react-bootstrap"
import {
  Tabs,
  Tab,
  Checkbox,
  Box,
  TextField,
  Stack,
} from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Login from "../../Pages/AuthUser/Login"
import Register from "../../Pages/AuthUser/Register"
import HeadNavbar from "./HeadNavbar"
import HeadNavbar2 from './HeadNavbar2';

const headerSectionStyle = {
  display: 'flex',
  alignItems: 'center',
  height: '80px',
  with: '100%'
}

const Header = (props) => {

  const { isHome, isProfileCreation, isProfile, disabled } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const currentUrlPath = location.pathname;

  console.log("aaaaaaaaaaa", location.pathname)

  const [loginModal, setLoginModal] = useState(false)
  const toggleLoginModal = () => {
    setLoginModal(!loginModal);
  }

  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    if (loginModal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [loginModal])

  return (
    <>
      <div className={`header__section_wrapped py-3 ${disabled === true && "d-none"} ${props.className}`} style={!isHome && headerSectionStyle}>
        <div className="container_border w-100">
          <div className="row w-100">
            <div className="col-12 col-md-12">
              <div className="header__section">
                <Link to="/" className='link_main'>
                  <span>Home</span>
                </Link>
                <div className="user_options ">
                  {/* <Link to="/login" className='link_main'>
                <span>Login</span>
              </Link> */}
                  {/* <Link to="/register" className='link_main'>
                <span>Register</span>
              </Link> */}
                  {
                    !isProfileCreation && <Button className='btn_login_register' onClick={toggleLoginModal}>
                      <span className='fa fa-user'></span>
                      <span className='px-2'>Login/Register</span>
                    </Button>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal centered scrollable fullscreen="md" isOpen={loginModal} className="login_modal" toggle={toggleLoginModal}>
        <TabContext value={tabValue}>
          <ModalHeader>
            <Tabs
              TabIndicatorProps={{
                style: { background: "#FF629500" },
              }}
              value={tabValue}
              onChange={handleTabChange}
              className="login_modal_tab"
              aria-label="icon tabs example"
            >
              <Tab
                label="Sign In"
                aria-label="login_part"
                className="Login_TabContext__tab"
              />
              <Tab
                label="Sign Up"
                aria-label="final_part"
                className="Login_TabContext__tab"
              />
            </Tabs>
          </ModalHeader>
          <ModalBody>
            <TabPanel
              value={0}
              className="login_modal_tabpanel"
            >
              <Login />
            </TabPanel>
            <TabPanel
              value={1}
              className="login_modal_tabpanel"
            >
              <Register />
            </TabPanel>
          </ModalBody>
        </TabContext>
        <ModalFooter>
          <Button className="theme_btn_primary" color="danger" onClick={toggleLoginModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
      {/* ------------------- */}
      {
        isProfile === true && <>
          <div className="matches_nav_wrap">
            {/* <HeadNavbar /> */}
            <HeadNavbar2 />
          </div>
        </>
      }
    </>
  )
}

export default Header