import React from "react";
import styles from "./Dashboard2/Dashboard2.module.css";
import DashRecentVisitorsCard from "./DashRecentVisitorsCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Dashboard2/RecentVisitorsCarousel/RecentVisitorsCarousel.css'

function DashMainRecentVisitors() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
  return (
    <>
      <div className={styles.dm_visitors}>
        <div className={styles.dmv_header}>
          <h1>Recent Visitors</h1>
          <div>08</div>
        </div>

        <div className="dmv_carousel">
          <Carousel responsive={responsive} itemClass="dmvc-item"
            containerClass="dmvc_container">
            <DashRecentVisitorsCard />
            <DashRecentVisitorsCard />
            <DashRecentVisitorsCard />
            <DashRecentVisitorsCard />
          </Carousel>
        </div>

        {/* <div className="row">
          <div className="col-lg-4">
            <DashRecentVisitorsCard />
          </div>
          <div className="col-lg-4">
            <DashRecentVisitorsCard />
          </div>
          <div className="col-lg-4">
            <DashRecentVisitorsCard />
          </div>
        </div> */}
      </div>
    </>
  );
}

export default DashMainRecentVisitors;
