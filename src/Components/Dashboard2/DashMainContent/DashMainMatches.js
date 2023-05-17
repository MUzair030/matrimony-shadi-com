import React from "react";
import styles from "./Dashboard2/Dashboard2.module.css";
import user_profile_img from "../../../assets/IMAGES/girl_profile.jpg";
import ring_icon from "../../../assets/IMAGES/ring_icon.svg";
import diamond_icon from "../../../assets/IMAGES/diamond_icon.svg";

function DashMainMatches() {
  return (
    <>
      <div className={styles.dm_matches}>
        <div className={styles.scrollStyle}>
          <div className={`${styles.dmm_row} row`}>
            <div className="col-md-12 col-lg-6">
              <div className={styles.dmm_card}>
                <div className={styles.dmmc_header}>
                  <h1>New Matches</h1>
                  <div>08</div>
                </div>

                <div className={styles.dmmc_items_holder}>
                  <div className={styles.dmmc_item}>
                    <div className={styles.dmmci_profile_details}>
                      <div className={styles.dmmci_profile_img}>
                        <img src={user_profile_img} alt="profile-img" />
                      </div>

                      <div className={styles.dmmcip_details}>
                        <h1>Alisa Ali Khan</h1>
                        <div>
                          25 yrs, <span>5’ 8’’</span>
                        </div>
                        <div>Newyork, USA</div>
                      </div>
                    </div>

                    <div className={styles.dmmci_connect_now}>
                      <div className={styles.dmmci_ring_img}>
                        <img src={ring_icon} alt="ring-img" />
                      </div>
                      <button>Connect Now</button>
                    </div>
                  </div>

                  <div className={styles.dmmc_item}>
                    <div className={styles.dmmci_profile_details}>
                      <div className={styles.dmmci_profile_img}>
                        <img src={user_profile_img} alt="profile-img" />
                      </div>

                      <div className={styles.dmmcip_details}>
                        <h1>Alisa Ali Khan</h1>
                        <div>
                          25 yrs, <span>5’ 8’’</span>
                        </div>
                        <div>Newyork, USA</div>
                      </div>
                    </div>

                    <div className={styles.dmmci_connect_now}>
                      <div className={styles.dmmci_ring_img}>
                        <img src={ring_icon} alt="ring-img" />
                      </div>
                      <button>Connect Now</button>
                    </div>
                  </div>

                  <div className={styles.dmmc_item}>
                    <div className={styles.dmmci_profile_details}>
                      <div className={styles.dmmci_profile_img}>
                        <img src={user_profile_img} alt="profile-img" />
                      </div>

                      <div className={styles.dmmcip_details}>
                        <h1>Alisa Ali Khan</h1>
                        <div>
                          25 yrs, <span>5’ 8’’</span>
                        </div>
                        <div>Newyork, USA</div>
                      </div>
                    </div>

                    <div className={styles.dmmci_connect_now}>
                      <div className={styles.dmmci_ring_img}>
                        <img src={ring_icon} alt="ring-img" />
                      </div>
                      <button>Connect Now</button>
                    </div>
                  </div>

                  <div className={styles.dmmc_item}>
                    <div className={styles.dmmci_profile_details}>
                      <div className={styles.dmmci_profile_img}>
                        <img src={user_profile_img} alt="profile-img" />
                      </div>

                      <div className={styles.dmmcip_details}>
                        <h1>Alisa Ali Khan</h1>
                        <div>
                          25 yrs, <span>5’ 8’’</span>
                        </div>
                        <div>Newyork, USA</div>
                      </div>
                    </div>

                    <div className={styles.dmmci_connect_now}>
                      <div className={styles.dmmci_ring_img}>
                        <img src={ring_icon} alt="ring-img" />
                      </div>
                      <button>Connect Now</button>
                    </div>
                  </div>

                  <div className={styles.dmmc_item}>
                    <div className={styles.dmmci_profile_details}>
                      <div className={styles.dmmci_profile_img}>
                        <img src={user_profile_img} alt="profile-img" />
                      </div>

                      <div className={styles.dmmcip_details}>
                        <h1>Alisa Ali Khan</h1>
                        <div>
                          25 yrs, <span>5’ 8’’</span>
                        </div>
                        <div>Newyork, USA</div>
                      </div>
                    </div>

                    <div className={styles.dmmci_connect_now}>
                      <div className={styles.dmmci_ring_img}>
                        <img src={ring_icon} alt="ring-img" />
                      </div>
                      <button>Connect Now</button>
                    </div>
                  </div>

                  <div className={styles.dmmc_item}>
                    <div className={styles.dmmci_profile_details}>
                      <div className={styles.dmmci_profile_img}>
                        <img src={user_profile_img} alt="profile-img" />
                      </div>

                      <div className={styles.dmmcip_details}>
                        <h1>Alisa Ali Khan</h1>
                        <div>
                          25 yrs, <span>5’ 8’’</span>
                        </div>
                        <div>Newyork, USA</div>
                      </div>
                    </div>

                    <div className={styles.dmmci_connect_now}>
                      <div className={styles.dmmci_ring_img}>
                        <img src={ring_icon} alt="ring-img" />
                      </div>
                      <button>Connect Now</button>
                    </div>
                  </div>
                </div>

                <div className={styles.dmmc_view_btn}>
                  <button>View More</button>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-lg-6">
              <div className={styles.dmm_card}>
                <div className={styles.dmmc_header}>
                  <h1>Premium Matches</h1>
                  <div>10</div>
                </div>
                <div className={styles.dmmc_items_holder}>
                  <div className={styles.dmmc_item}>
                    <div className={styles.dmmci_profile_details}>
                      <div className={styles.dmmci_profile_img}>
                        <img src={user_profile_img} alt="profile-img" />
                      </div>

                      <div className={styles.dmmcip_details}>
                        <h1>Alisa Ali Khan</h1>
                        <div>
                          25 yrs, <span>5’ 8’’</span>
                        </div>
                        <div>Newyork, USA</div>
                      </div>
                    </div>

                    <div className={styles.dmmci_connect_now}>
                      <div className={styles.dmmci_diamond_icon}>
                        <img src={diamond_icon} alt="diamond-icon" />
                      </div>
                      <div className={styles.dmmci_ring_img}>
                        <img src={ring_icon} alt="ring-img" />
                      </div>
                      <button>Connect Now</button>
                    </div>
                  </div>
                  <div className={styles.dmmc_item}>
                    <div className={styles.dmmci_profile_details}>
                      <div className={styles.dmmci_profile_img}>
                        <img src={user_profile_img} alt="profile-img" />
                      </div>

                      <div className={styles.dmmcip_details}>
                        <h1>Alisa Ali Khan</h1>
                        <div>
                          25 yrs, <span>5’ 8’’</span>
                        </div>
                        <div>Newyork, USA</div>
                      </div>
                    </div>

                    <div className={styles.dmmci_connect_now}>
                      <div className={styles.dmmci_diamond_icon}>
                        <img src={diamond_icon} alt="diamond-icon" />
                      </div>
                      <div className={styles.dmmci_ring_img}>
                        <img src={ring_icon} alt="ring-img" />
                      </div>
                      <button>Connect Now</button>
                    </div>
                  </div>
                  <div className={styles.dmmc_item}>
                    <div className={styles.dmmci_profile_details}>
                      <div className={styles.dmmci_profile_img}>
                        <img src={user_profile_img} alt="profile-img" />
                      </div>

                      <div className={styles.dmmcip_details}>
                        <h1>Alisa Ali Khan</h1>
                        <div>
                          25 yrs, <span>5’ 8’’</span>
                        </div>
                        <div>Newyork, USA</div>
                      </div>
                    </div>

                    <div className={styles.dmmci_connect_now}>
                      <div className={styles.dmmci_diamond_icon}>
                        <img src={diamond_icon} alt="diamond-icon" />
                      </div>
                      <div className={styles.dmmci_ring_img}>
                        <img src={ring_icon} alt="ring-img" />
                      </div>
                      <button>Connect Now</button>
                    </div>
                  </div>

                  <div className={styles.dmmc_item}>
                    <div className={styles.dmmci_profile_details}>
                      <div className={styles.dmmci_profile_img}>
                        <img src={user_profile_img} alt="profile-img" />
                      </div>

                      <div className={styles.dmmcip_details}>
                        <h1>Alisa Ali Khan</h1>
                        <div>
                          25 yrs, <span>5’ 8’’</span>
                        </div>
                        <div>Newyork, USA</div>
                      </div>
                    </div>

                    <div className={styles.dmmci_connect_now}>
                      <div className={styles.dmmci_diamond_icon}>
                        <img src={diamond_icon} alt="diamond-icon" />
                      </div>
                      <div className={styles.dmmci_ring_img}>
                        <img src={ring_icon} alt="ring-img" />
                      </div>
                      <button>Connect Now</button>
                    </div>
                  </div>

                  <div className={styles.dmmc_item}>
                    <div className={styles.dmmci_profile_details}>
                      <div className={styles.dmmci_profile_img}>
                        <img src={user_profile_img} alt="profile-img" />
                      </div>

                      <div className={styles.dmmcip_details}>
                        <h1>Alisa Ali Khan</h1>
                        <div>
                          25 yrs, <span>5’ 8’’</span>
                        </div>
                        <div>Newyork, USA</div>
                      </div>
                    </div>

                    <div className={styles.dmmci_connect_now}>
                      <div className={styles.dmmci_diamond_icon}>
                        <img src={diamond_icon} alt="diamond-icon" />
                      </div>
                      <div className={styles.dmmci_ring_img}>
                        <img src={ring_icon} alt="ring-img" />
                      </div>
                      <button>Connect Now</button>
                    </div>
                  </div>

                  <div className={styles.dmmc_item}>
                    <div className={styles.dmmci_profile_details}>
                      <div className={styles.dmmci_profile_img}>
                        <img src={user_profile_img} alt="profile-img" />
                      </div>

                      <div className={styles.dmmcip_details}>
                        <h1>Alisa Ali Khan</h1>
                        <div>
                          25 yrs, <span>5’ 8’’</span>
                        </div>
                        <div>Newyork, USA</div>
                      </div>
                    </div>

                    <div className={styles.dmmci_connect_now}>
                      <div className={styles.dmmci_diamond_icon}>
                        <img src={diamond_icon} alt="diamond-icon" />
                      </div>
                      <div className={styles.dmmci_ring_img}>
                        <img src={ring_icon} alt="ring-img" />
                      </div>
                      <button>Connect Now</button>
                    </div>
                  </div>
                </div>

                <div className={styles.dmmc_view_btn}>
                  <button>View More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashMainMatches;
