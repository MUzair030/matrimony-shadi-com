/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./MatchviewboxDetailedProfileMobi.css";
import AboutIcon from "@mui/icons-material/InfoOutlined";
import ContactIcon from "@mui/icons-material/PermContactCalendarOutlined";
import LifeStyleIcon from "@mui/icons-material/HeartBrokenOutlined";
import FamilyIcon from "@mui/icons-material/GroupOutlined";
import PhoneIcon from "@mui/icons-material/PhoneIphoneOutlined";
import MailIcon from "@mui/icons-material/MailOutlineOutlined";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SkateboardingIcon from "@mui/icons-material/Skateboarding";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import DriveEtaIcon from "@mui/icons-material/DriveEta";

const MatchviewboxDetailedProfileMobi = () => {
  const LifeStylesData = [
    {
      id: 1,
      activity_name: "Sports",
      icon: SportsEsportsIcon,
      color: "#8397FF",
    },
    {
      id: 2,
      activity_name: "Music",
      icon: MusicNoteIcon,
      color: "#FD7080",
    },
    {
      id: 3,
      activity_name: "Football",
      icon: SportsSoccerIcon,
      color: "#2FCD2C",
    },
    {
      id: 4,
      activity_name: "Dancer",
      icon: SkateboardingIcon,
      color: "#FFAE64",
    },
    {
      id: 5,
      activity_name: "Cooking",
      icon: OutdoorGrillIcon,
      color: "#C73333",
    },
    {
      id: 6,
      activity_name: "Driving",
      icon: DriveEtaIcon,
      color: "#A48024",
    },
  ];

  const FaimlyData = [
    {
      id: 1,
      icon: "assets/images/icons/family/father_icon.png",
      family_member: "Father",
      member_detail: "Colonol Retired",
    },
    {
      id: 2,
      icon: "assets/images/icons/family/father_icon.png",
      family_member: "Mother",
      member_detail: "House Wife",
    },
    {
      id: 3,
      icon: "assets/images/icons/family/father_icon.png",
      family_member: "4 Brothers",
      member_detail: "2 married",
    },
    {
      id: 4,
      icon: "assets/images/icons/family/father_icon.png",
      family_member: "2 Sisters",
      member_detail: "2 un-married",
    },
    {
      id: 5,
      icon: "assets/images/icons/family/father_icon.png",
      family_member: "8 Siblings",
      member_detail: "",
    },
    {
      id: 6,
      icon: "assets/images/icons/family/father_icon.png",
      family_member: "Other",
      member_detail: "",
    },
  ];

  return (
    <div className="matchviewbox_mobi_detailed_profile">
      <div className="matchviewbox_mobi_detailed_profile_box_wrapper">
        <div className="matchviewbox_mobi_detailed_profile_box">
          <div className="matchviewbox_mobi_detailed_profile_box_header">
            <div className="pb_mobi_title_box">
              <div className="pb_mobi_icon_box">
                <AboutIcon className="pb_icon" />
              </div>
              <h5 className="pb_mobi_title">About</h5>
            </div>
          </div>
          <div className="matchviewbox_mobi_detailed_profile_box_body">
            <div className="about_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              repudiandae quidem nobis itaque exercitationem dolorem tempore
              beatae sunt, aperiam corrupti veritatis perspiciatis quas! Dolor!
            </div>
          </div>
        </div>
      </div>

      <div className="matchviewbox_mobi_detailed_profile_box_wrapper">
        <div className="matchviewbox_mobi_detailed_profile_box">
          <div className="matchviewbox_mobi_detailed_profile_box_header contact_box">
            <div className="pb_mobi_title_box">
              <div className="pb_mobi_icon_box">
                <ContactIcon className="pb_icon" />
              </div>
              <h5 className="pb_mobi_title">Contact</h5>
            </div>
          </div>
          <div className="matchviewbox_mobi_detailed_profile_box_body contact_box">
            <div className="left_box">
              <div className="detail_info_box">
                <p className="far fa-envelope-open info_icon"></p>
                <p className="info_text">unknown@gmail.com</p>
              </div>
              <div className="detail_info_box">
                <p className="fa fa-mobile-alt info_icon"></p>
                <p className="info_text">03*********</p>
              </div>
            </div>
            <div className="right_box">
              <div className="subscribe_package_box">
                <p>
                  Click to view our <b>Premium Packages</b>
                </p>
                <h5>Subscribe Package</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="matchviewbox_mobi_detailed_profile_box_wrapper">
        <div className="matchviewbox_mobi_detailed_profile_box">
          <div className="matchviewbox_mobi_detailed_profile_box_header">
            <div className="pb_mobi_title_box">
              <div className="pb_mobi_icon_box">
                <LifeStyleIcon className="pb_icon" />
              </div>
              <h5 className="pb_mobi_title">Lifestyle</h5>
            </div>
          </div>
          <div className="matchviewbox_mobi_detailed_profile_box_body lifestyle">
            {LifeStylesData.length > 0 &&
              LifeStylesData.map((item) => {
                return (
                  <div className="lifestyle_box_wrapper">
                    <div
                      className="lifestyle_box"
                      style={
                        item?.color ? { backgroundColor: item?.color } : {}
                      }
                    >
                      <p className="title">{item.activity_name}</p>
                      <div className="icon_box_wrapper">
                        <div
                          className="icon_box"
                          style={
                            item?.color ? { backgroundColor: item?.color } : {}
                          }
                        >
                          {" "}
                          {item?.icon && <item.icon className="icon" />}{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <div className="matchviewbox_mobi_detailed_profile_box_wrapper family_wrap">
        <div className="matchviewbox_mobi_detailed_profile_box">
          <div className="matchviewbox_mobi_detailed_profile_box_header">
            <div className="pb_mobi_title_box">
              <div className="pb_mobi_icon_box">
                <FamilyIcon className="pb_icon" />
              </div>
              <h5 className="pb_mobi_title">Family</h5>
            </div>
          </div>
          <div className="matchviewbox_mobi_detailed_profile_box_body family">
            {LifeStylesData.length > 0 &&
              FaimlyData.map((item) => {
                return (
                  <div className="family_box_wrapper">
                    <div
                      className="family_box"
                      style={
                        item?.color ? { backgroundColor: item?.color } : {}
                      }
                    >
                      <div className="family_icon_box">
                        {item?.icon && (
                          <img
                            className="family_icon"
                            src={`${process.env.PUBLIC_URL}/${item?.icon}`}
                            alt={""}
                          />
                        )}
                      </div>
                      <div className="family_detail_box">
                        <p className="title">{item.family_member}</p>
                        {item.member_detail && item.member_detail != "" && (
                          <p className="description">({item.member_detail})</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchviewboxDetailedProfileMobi;
