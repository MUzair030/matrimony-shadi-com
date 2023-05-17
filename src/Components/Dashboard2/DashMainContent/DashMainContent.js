import React from 'react'
import styles from './Dashboard2/Dashboard2.module.css';
import DashMainInvitations from './DashMainInvitations';
import DashMainMatches from './DashMainMatches';
import DashMainProfile from './DashMainProfile';
import DashMainRecentVisitors from './DashMainRecentVisitors';


function DashMainContent() {
  return (
    <>
      <div className={styles.d_mainContent}>
        <DashMainProfile />

        <DashMainInvitations />
        <DashMainRecentVisitors />

        <DashMainMatches />
      </div>
    </>
  )
}

export default DashMainContent