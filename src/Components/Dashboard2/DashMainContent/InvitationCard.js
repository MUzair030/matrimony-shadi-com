import React from 'react'
import styles from "./Dashboard2/Dashboard2.module.css";
import girl_profile from "../../../assets/IMAGES/girl_profile.jpg";
const InvitationCard = () => {
    return (
        <>
            <div className={styles.mainContainer}>

                <div className={styles.mainCard}>

                    <div className={styles.dimg}>
                        <img src={girl_profile} alt="profile-img" />
                        <span className={styles.invitecontent}><b>Sayra Khan</b> <span className='req_msg'>Just sended you connect request</span></span>
                    </div>
                    <div className={styles.btns}>
                        <button>Ignore </button>
                        <button className={styles.btn}>Connect</button>
                    </div>
                </div>

                <div className={styles.mainCard}>

                    <div className={styles.dimg}>
                        <img src={girl_profile} alt="profile-img" />

                        <span className={styles.invitecontent}><b>Sayra Khan</b> <span className='req_msg'>Just sended you connect request</span></span>
                    </div>
                    <div className={styles.btns}>
                        <button>Ignore </button>
                        <button className={styles.btn}>Connect</button>
                    </div>
                </div>

                <div className={styles.mainCard}>

                    <div className={styles.dimg}>
                        <img src={girl_profile} alt="profile-img" />

                        <span className={styles.invitecontent}><b>Sayra Khan</b> <span className='req_msg'>Just sended you connect request</span></span>
                    </div>
                    <div className={styles.btns}>
                        <button>Ignore </button>
                        <button className={styles.btn}>Connect</button>
                    </div>
                </div>

                <div className={styles.mainCard}>

                    <div className={styles.dimg}>
                        <img src={girl_profile} alt="profile-img" />

                        <span className={styles.invitecontent}><b>Sayra Khan</b> <span className='req_msg'>Just sended you connect request</span></span>
                    </div>
                    <div className={styles.btns}>
                        <button>Ignore </button>
                        <button className={styles.btn}>Connect</button>
                    </div>
                </div>

                <div className={styles.mainCard}>

                    <div className={styles.dimg}>
                        <img src={girl_profile} alt="profile-img" />

                        <span className={styles.invitecontent}><b>Sayra Khan</b> <span className='req_msg'>Just sended you connect request</span></span>
                    </div>
                    <div className={styles.btns}>
                        <button>Ignore </button>
                        <button className={styles.btn}>Connect</button>
                    </div>
                </div>

            </div>

        </>
    )
}

export default InvitationCard