import React from "react";
import { useState } from "react";
import logo from "../../assets/shaadi-logo.png";
import { Link } from 'react-router-dom'
import styles from "../Header/HeadNavbar2/HeadNavbar2.module.css";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import { Button } from "reactstrap";
import useWindowDimensions from '../../Hooks/useWindowDimensions';

function HeadNavbar2() {
  const { screenWidth, screenHeight } = useWindowDimensions();

  // OPEN SIDEBAR
  const [openNav, setOpenNav] = useState(false);

  // Change Navbar Bg Color on Scroll
  const [navBar, setNavBar] = useState(false);

  const navBarBg = () => {
    if (window.scrollY >= 10) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", navBarBg);

  const [activeTabDashboard, setActiveTabDashboard] = useState(false);
  const [activeTabPreference, setActiveTabPreference] = useState(false);
  const [activeTabInbox, setActiveTabInbox] = useState(false);
  const [activeTabMatches, setActiveTabMatches] = useState(false);
  const [activeTabSettings, setActiveTabSettings] = useState(false);
  const [activeTabSearch, setActiveTabSearch] = useState(false);

  const handleActiveTabDashboard = () => {
    setActiveTabDashboard(!activeTabDashboard);
    setActiveTabPreference(false)
    setActiveTabInbox(false);
    setActiveTabMatches(false);
    setActiveTabSettings(false)
    setActiveTabSearch(false)
  };

  const handleActiveTabPreference = () => {
    setActiveTabDashboard(false);
    setActiveTabPreference(!activeTabPreference)
    setActiveTabInbox(false);
    setActiveTabMatches(false);
    setActiveTabSettings(false)
    setActiveTabSearch(false)
  };


  const handleActiveTabInbox = () => {
    setActiveTabDashboard(false);
    setActiveTabPreference(false)
    setActiveTabInbox(!activeTabInbox);
    setActiveTabMatches(false);
    setActiveTabSettings(false)
    setActiveTabSearch(false)
  };

  const handleActiveTabMatches = () => {
    setActiveTabDashboard(false);
    setActiveTabPreference(false)
    setActiveTabInbox(false);
    setActiveTabMatches(!activeTabMatches);
    setActiveTabSettings(false)
    setActiveTabSearch(false)
  };

  const handleActiveTabSettings = () => {
    setActiveTabDashboard(false);
    setActiveTabPreference(false)
    setActiveTabInbox(false);
    setActiveTabMatches(false);
    setActiveTabSettings(!activeTabSettings)
    setActiveTabSearch(false)
  };

  const handleActiveTabSearch = () => {
    setActiveTabDashboard(false);
    setActiveTabPreference(false)
    setActiveTabInbox(false);
    setActiveTabMatches(false);
    setActiveTabSettings(false)
    setActiveTabSearch(!activeTabSearch)
  };

  return (
    <>
      {/* NAVBAR */}
      <div className={styles.D_navbar_wrapper}>
        <nav className={styles.D_navbar}>
          <div className={`container_ ${styles.navbar_container}`} style={{ height: "100%" }}>
            <div className={styles.inner}>
              {/* LOGO */}
              <div className={styles.logo}>
                <Link to={"/"}><img src={logo} alt="logo" /></Link>
              </div>

              <div
                className={
                  openNav ? `${styles.links} ${styles.active}` : `${styles.links}`
                }
              >
                {/* LINKS */}
                <ul
                  className={
                    navBar
                      ? `${styles.navbar_list} ${styles.active}`
                      : `${styles.navbar_list}`
                  }
                >
                  {/* ********** List ********** */}
                  <li
                    className={
                      activeTabDashboard
                        ? `${styles.nl_list} ${styles.active}`
                        : `${styles.nl_list}`
                    }
                    onClick={() => handleActiveTabDashboard()}
                  >
                    <span className={styles.dropdown_title}>Dashboard {activeTabDashboard ? <ExpandLessOutlinedIcon className={styles.dropdown_arrow} /> : <ExpandMoreOutlinedIcon className={styles.dropdown_arrow} />} </span>
                    <ul className={activeTabDashboard
                      ? `${styles.nl_hidden_list} ${styles.active}`
                      : `${styles.nl_hidden_list}`}>
                      <li className={styles.nlh_list}><Link to={"/about"}>My Info</Link></li>
                      <li className={styles.nlh_list}><Link to={"/dashboard2"}>View Profile</Link></li>
                      <li className={styles.nlh_list}><Link to={""}>Update Info</Link></li>
                      <li className={styles.nlh_list}><Link to={"/visitors"}>Recent Visitors</Link></li>
                    </ul>
                  </li>

                  {/* ********** List ********** */}
                  <li
                    className={
                      activeTabPreference
                        ? `${styles.nl_list} ${styles.active}`
                        : `${styles.nl_list}`
                    }
                    onClick={() => handleActiveTabPreference()}
                  >
                    <span className={styles.dropdown_title}>Preference {activeTabPreference ? <ExpandLessOutlinedIcon className={styles.dropdown_arrow} /> : <ExpandMoreOutlinedIcon className={styles.dropdown_arrow} />} </span>
                    <ul className={activeTabPreference
                      ? `${styles.nl_hidden_list} ${styles.active}`
                      : `${styles.nl_hidden_list}`}>
                      <li className={styles.nlh_list}><Link to={""}>...</Link></li>
                      <li className={styles.nlh_list}><Link to={""}>...</Link></li>
                      <li className={styles.nlh_list}><Link to={""}>...</Link></li>
                    </ul>
                  </li>

                  {/* ********** List ********** */}
                  <li
                    className={
                      activeTabInbox
                        ? `${styles.nl_list} ${styles.active}`
                        : `${styles.nl_list}`
                    }
                    onClick={() => handleActiveTabInbox()}
                  >
                    <span className={styles.dropdown_title}>Inbox {activeTabInbox ? <ExpandLessOutlinedIcon className={styles.dropdown_arrow} /> : <ExpandMoreOutlinedIcon className={styles.dropdown_arrow} />} </span>
                    <ul className={activeTabInbox
                      ? `${styles.nl_hidden_list} ${styles.active}`
                      : `${styles.nl_hidden_list}`}>
                      <li className={styles.nlh_list}><Link to={"/inbox"}>Indox</Link></li>
                      <li className={styles.nlh_list}><Link to={""}>Received</Link></li>
                      <li className={styles.nlh_list}><Link to={""}>Archives</Link></li>
                      <li className={styles.nlh_list}><Link to={""}>Blocked Member</Link></li>
                    </ul>
                  </li>

                  {/* ********** List ********** */}
                  <li
                    className={
                      activeTabMatches
                        ? `${styles.nl_list} ${styles.active}`
                        : `${styles.nl_list}`
                    }
                    onClick={() => handleActiveTabMatches()}
                  >
                    <span className={styles.dropdown_title}>Matches {activeTabMatches ? <ExpandLessOutlinedIcon className={styles.dropdown_arrow} /> : <ExpandMoreOutlinedIcon className={styles.dropdown_arrow} />} </span>
                    <ul className={activeTabMatches
                      ? `${styles.nl_hidden_list} ${styles.active}`
                      : `${styles.nl_hidden_list}`}>
                      <li className={styles.nlh_list}><Link to={"/near-me"}>Near Me</Link></li>
                      <li className={styles.nlh_list}><Link to={"/viewed"}>Recently Viewed</Link></li>
                      <li className={styles.nlh_list}><Link to={"/my-matches"}>My-Matches</Link></li>
                      <li className={styles.nlh_list}><Link to={"/today-matches"}>Today's Matches</Link></li>
                    </ul>
                  </li>

                  {/* ********** List ********** */}
                  <li
                    className={
                      activeTabSettings
                        ? `${styles.nl_list} ${styles.active}`
                        : `${styles.nl_list}`
                    }
                    onClick={() => handleActiveTabSettings()}
                  >
                    <span className={styles.dropdown_title}>Settings {activeTabSettings ? <ExpandLessOutlinedIcon className={styles.dropdown_arrow} /> : <ExpandMoreOutlinedIcon className={styles.dropdown_arrow} />} </span>
                    <ul className={activeTabSettings
                      ? `${styles.nl_hidden_list} ${styles.active}`
                      : `${styles.nl_hidden_list}`}>
                      <li className={styles.nlh_list}><Link to={"/settings"}>Settings</Link></li>
                      <li className={styles.nlh_list}><Link to={"/preferences"}>Preferences</Link></li>
                      <li className={styles.nlh_list}><Link to={""}>...</Link></li>
                    </ul>
                  </li>

                  {/* ********** List ********** */}
                  <li
                    className={
                      activeTabSearch
                        ? `${styles.nl_list} ${styles.active}`
                        : `${styles.nl_list}`
                    }
                    onClick={() => handleActiveTabSearch()}
                  >
                    <span className={styles.dropdown_title}>Search {activeTabSearch ? <ExpandLessOutlinedIcon className={styles.dropdown_arrow} /> : <ExpandMoreOutlinedIcon className={styles.dropdown_arrow} />} </span>
                    <ul className={activeTabSearch
                      ? `${styles.nl_hidden_list} ${styles.active}`
                      : `${styles.nl_hidden_list}`}>
                      <li className={styles.nlh_list}><Link to={""}>Search By Name</Link></li>
                      <li className={styles.nlh_list}><Link to={""}>Search By ID</Link></li>
                      <li className={styles.nlh_list}><Link to={""}>...</Link></li>
                    </ul>
                  </li>

                  <li style={screenWidth > 922 ? { marginLeft: 'auto' } : {}}>
                    <Link to={"/customer-care"}>
                      <Button className={`${styles.list_button}`}>Customer Care</Button>
                    </Link>
                  </li>
                </ul>
              </div>


              {/* HAMBURGER */}
              <div className={styles.hamburger} onClick={() => setOpenNav(!openNav)}>
                <input className={styles.checkbox} type="checkbox" />
                <div
                  className={
                    openNav
                      ? `${styles.hamburger_lines} ${styles.active}`
                      : `${styles.hamburger_lines}` && navBar
                        ? `${styles.hamburger_lines} ${styles.color_active}`
                        : `${styles.hamburger_lines}`
                  }
                >
                  <span className={`${styles.line} ${styles.line1}`}></span>
                  <span className={`${styles.line} ${styles.line2}`}></span>
                  <span className={`${styles.line} ${styles.line3}`}></span>
                </div>
              </div>

            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default HeadNavbar2;
