import React from "react";
import "./ProfileCard.css";

const ProfileCard = () => {
  const ProfilePage = false;

  const Cover = "assets/images/dashboard/cover.jpg";
  const Profile = "assets/images/dashboard/profileImg.jpg";

  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={`${process.env.PUBLIC_URL}/${Cover}`} alt="" />
        <img src={`${process.env.PUBLIC_URL}/${Profile}`} alt="" />
      </div>

      <div className="ProfileName">
        <span>Zendaya MJ</span>
        <span>Senior UI/UX Designer</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>Status</span>
            <span>Active</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>City</span>
            <span>Karachi</span>
          </div>

          <div className="vl"></div>
          <div className="follow">
            <span>Account Type</span>
            <span>Premimum</span>
          </div>
        </div>
        
        <hr />
      </div>
      <div className="followStatus">
        <div>
          <div className="follow">
            <span>Pending Activities</span>
            <span>1</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>Accepted Invitations</span>
            <span>3</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>Account Type</span>
            <span>Premimum</span>
          </div>
        </div>
        {/* <hr /> */}
      </div>
    </div>
  );
};

export default ProfileCard;
