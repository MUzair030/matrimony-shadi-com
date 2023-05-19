import React from "react";
import styles from "./Dashboard2/Dashboard2.module.css";
import DashRecentVisitorsCard from "./DashRecentVisitorsCard";
import InvitationCard from "./InvitationCard";

function DashMainInvitations() {
  return (
    <>
      <div className={styles.dm_visitors}>
        <div className={styles.dmv_header}>
          <h1>Invitations</h1>
          <div>05</div>
        </div>

        <div className={styles.mainInvitation}>
            <div className="row">
            <div className="col-lg-12 col-sm-12">
                <InvitationCard/>
            </div>
            </div>
        </div>
        
      </div>
    </>
  );
}

export default DashMainInvitations;
