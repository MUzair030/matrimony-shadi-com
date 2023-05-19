/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "./MatchViewBox.css"
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
import MatchviewboxDetailedProfile from "./Matchviewbox_Detailed_Profile/MatchviewboxDetailedProfile"
import PartnerPreferences from './PartnerPreferences/PartnerPreferences';

const MatchViewBoxDesk = (props) => {

  const { user_name } = props;
  const PhotoTempRequest = `assets/images/profiles/dummy/250-photo-profile-1.jpg`

  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div className='matchviewbox_wrapper'>
    
      <div className="matchviewbox">
        <div className="matchviewbox_left">
          <div className="matchviewbox_detail_wrapped">
            <div className="matchviewbox_detail">
              <div className="matchviewbox_detail_header">
                <div className="matchviewbox_detail_name">
                  {/* <h4>{user_name ? user_name : "Alizabeth"}</h4> */}
                  <h4>{"Alizabeth Swoarn"}</h4>
                </div>
                <div className="matchviewbox_detail_menus">
                  <div className="matchviewbox_detail_menus_button_box">
                    <div className="matchviewbox_detail_menus_button me-3">
                      <PhoneInTalkIcon />
                    </div>
                    <div className="matchviewbox_detail_menus_button">
                      <FavoriteBorderIcon />
                    </div>
                  </div>
                  <div className="matchviewbox_detail_dropmenus">
                    <NavDropdown title={<MoreVertIcon className='icon' />} id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Shortlist</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Hide</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Block</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">Report</NavDropdown.Item>
                    </NavDropdown>
                  </div>
                </div>
              </div>
              <div className="matchviewbox_detail_body">
                <div className="matchviewbox_detail_body_info matchviewbox_detail_body_info_1">
                  <span className='matchviewbox_detail_body_info_1_a'>Single</span>
                  <span className='matchviewbox_detail_body_info_1_b'>Content Writer</span>
                </div>
                <div className="matchviewbox_detail_body_info matchviewbox_detail_body_info_2">
                  <span className='matchviewbox_detail_body_info_2_a'>Muslim</span>
                  <span className='matchviewbox_detail_body_info_2_b'>Awan</span>
                </div>
              </div>
            </div>
            <div className='matchviewbox_detail_bottom_wrapper'>
              <div className="matchviewbox_detail_bottom">
                <div className="matchviewbox_detail_bottom_icon_info">
                  <div className="matchviewbox_detail_bottom_icon_info_icon">
                    <PlaceOutlinedIcon />
                  </div>
                  <div className="matchviewbox_detail_bottom_info matchviewbox_detail_bottom_info_2">
                    <span className='matchviewbox_detail_bottom_info_2_a'>Karachi</span>
                    <span className='matchviewbox_detail_bottom_info_2_b'>Sindh</span>
                  </div>
                </div>
                <div className="matchviewbox_detail_bottom_icon_info">
                  <div className="matchviewbox_detail_bottom_icon_info_icon">
                    <EducationIcon />
                  </div>
                  <div className="matchviewbox_detail_bottom_info">
                    <span className=''>Bachelors Degree in Arts</span>
                  </div>
                </div>
                <div className="matchviewbox_detail_bottom_icon_info">
                  <div className="matchviewbox_detail_bottom_icon_info_icon">
                    <RotateRightSharpIcon />
                  </div>
                  <div className="matchviewbox_detail_bottom_info matchviewbox_detail_bottom_info_2">
                    <span className='matchviewbox_detail_bottom_info_2_a'>27 yrs</span>
                    <span className='matchviewbox_detail_bottom_info_2_b'>5'5</span>
                  </div>
                </div>
                <div className="matchviewbox_detail_bottom_icon_info">
                  <div className="matchviewbox_detail_bottom_icon_info_icon">
                    <MonetizationOnOutlinedIcon />
                  </div>
                  <div className="matchviewbox_detail_bottom_info">
                    <span className=''>18,00 $ / Month</span>
                  </div>
                </div>
              </div>
              <div className="matchviewbox_detail_status_box">
                <div className="matchviewbox_live_status">
                  <p className='live_status_title'>Online</p>
                  <span className='live_status_indicator'></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="matchviewbox_right">
          <div className="matchviewbox_imagebox">
            <img className="matchviewbox_image img_fluid"
              src={`${process.env.PUBLIC_URL}/${PhotoTempRequest}`} alt="" />
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
              <MatchviewboxDetailedProfile />
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

export default MatchViewBoxDesk