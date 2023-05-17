import React from 'react'
import styles from "./Dashboard2/Dashboard2.module.css";
import user_profile_img from "../../../assets/IMAGES/girl_profile.jpg";
import age_icon from "../../../assets/IMAGES/age_icon.svg";
import location_icon from "../../../assets/IMAGES/location_icon.svg";
import ring_icon from "../../../assets/IMAGES/ring_icon.svg";

function DashRecentVisitorsCard() {
  return (
    <>
      <div className={styles.dmv_card}>
        {/* <div className={styles.dmvc_online}>
                Online 
              </div> */}

        <div className={styles.dmvc_profile_img}>
          <img src={user_profile_img} alt="profile-img" />
        </div>

        <div className={styles.dmvc_user_details}>
          <h1>Sayra Khan<b className='text-success'>.</b></h1>
          <ul className={styles.dmvcu_detail_list}>
            <li>Single</li>
            <li>Digital Artist</li>
          </ul>
          <div className={styles.dmvcu_religion}>Muslim</div>

          <div className={styles.dmvcu_age_location}>
            <div className={styles.dmvcual_img}>
              <img src={age_icon} alt="age-icon" />
            </div>
            <span className={styles.dmvcual_text}>32 yrs, <span>5’ 1’’</span></span>
          </div>

          <div className={styles.dmvcu_age_location}>
            <div className={styles.dmvcual_img}>
              <img src={location_icon} alt="location-icon" />
            </div>
            <span className={styles.dmvcual_text}>Munnich, Italy</span>
          </div>

          <hr className={styles.dmvcu_line} />
        </div>

        <div className={styles.dmvc_connect_now}>
          <div>Send her ring?</div>
          <button>
            <img src={ring_icon} alt="ring-icon" />
            <span>Connect Now</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default DashRecentVisitorsCard