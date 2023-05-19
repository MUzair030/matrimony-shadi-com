import React from "react";
import bell from "../../assets/IMAGES/notification.png";
import girl_profile from "../../assets/IMAGES/girl_profile.jpg";
import styles from "./DashMainContent/Dashboard2/Dashboard2.module.css";

function DashNotifications() {
  return (
    <>
      <div className="d-lg-none d-sm-block mb-4 mt-3">
        <div className={styles.dn_headers}>
          <div className={styles.dn_img}>
            <img src={bell} alt="bell-img" />
          </div>
          <span>Notification</span>
        </div>
      </div>
      <div className={styles.d_notifications}>


        <div className={styles.dn_header}>
          <div className={styles.dn_img}>
            <img src={bell} alt="bell-img" />
          </div>
          <span>Notification</span>
        </div>
        
        <div className={styles.scrollStyle}>

          <div className={styles.dn_item}>
            <div className={styles.dni_profile}>
              <div className={styles.dni_img}>
                <img src={girl_profile} alt="profile-img" />
              </div>
              <span><b>Hashim Ali</b> You Missed a call from hashim</span>
            </div>
          </div>
          <div className={styles.dn_item}>
            <div className={styles.dni_profile}>
              <div className={styles.dni_img}>
                <img src={girl_profile} alt="profile-img" />
              </div>

              <span><b>Hashim Ali</b> You Missed a call from hashim</span>
            </div>
          </div>
          <div className={styles.dn_item}>
            <div className={styles.dni_profile}>
              <div className={styles.dni_img}>
                <img src={girl_profile} alt="profile-img" />
              </div>

              <span><b>Hashim Ali</b> You Missed a call from hashim</span>
               
            </div>
          </div>
          
          <div className={styles.dn_item}>
            <div className={styles.dni_profile}>
              <div className={styles.dni_img}>
                <img src={girl_profile} alt="profile-img" />
              </div>

              <span><b>Hashim Ali</b> You Missed a call from hashim</span>
               
            </div>
          </div>
          <div className={styles.dn_item}>
            <div className={styles.dni_profile}>
              <div className={styles.dni_img}>
                <img src={girl_profile} alt="profile-img" />
              </div>

              <span><b>Hashim Ali</b> You Missed a call from hashim</span>
               
            </div>
          </div>
          <div className={styles.dn_item}>
            <div className={styles.dni_profile}>
              <div className={styles.dni_img}>
                <img src={girl_profile} alt="profile-img" />
              </div>

              <span><b>Hashim Ali</b> You Missed a call from hashim</span>
               
            </div>
          </div>
          <div className={styles.dn_item}>
            <div className={styles.dni_profile}>
              <div className={styles.dni_img}>
                <img src={girl_profile} alt="profile-img" />
              </div>

              <span><b>Hashim Ali</b> You Missed a call from hashim</span>
               
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default DashNotifications;
