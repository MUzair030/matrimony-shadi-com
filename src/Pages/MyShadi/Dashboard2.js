import React from "react";
import { Footer, Header } from "../../Components";
import DashMainContent from "../../Components/Dashboard2/DashMainContent/DashMainContent";
import DashNotifications from "../../Components/Dashboard2/DashNotifications";
import styles from "../../Components/Dashboard2/DashMainContent/Dashboard2/Dashboard2.module.css";

function Dashboard2() {
  return (
    <>
      <Header isProfile={true} disabled={true} />

      <div className={`${styles.dashboard}`}>
        <div className="container-fluid">
          <div className="row">
            <div className={`${styles.column_3}`}>
              {/* <DashNotifications /> */}
            </div>
            <div className={`${styles.column_6} col-lg-4 col-sm-12`}>
              <DashMainContent />
            </div>
            
            {/* <div className={`${styles.column_3} col-lg-4`}>
              <div className={styles.d_blank_box} style={{ height: "467px" }}>
                {/* BOX 
              </div>
            </div> */}
          </div>
        </div>
        
      </div>

      <Footer />
    </>
  );
}

export default Dashboard2;
