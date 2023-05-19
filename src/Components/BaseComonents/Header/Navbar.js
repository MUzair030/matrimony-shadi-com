/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './navbar.css'
import logo from '../../../assets/shaadi-logo.png'

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light navbar-main">
        <div class="container-fluid">
          <a class="navbar-brand navbar_title" href="#">
           <img src = {logo} alt = 'logo image'></img>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto me-4 mb-2 mb-lg-0">
              <li class="navbar_links_main nav-item dropdown">
                <a
                  class="navbar_link nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-target="#navbar"
                  aria-expanded="false"
                >
                  Dashboard
                </a>
                <ul class="dropdown-menu tooltip_div dashboard" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="navbar_links_main nav-item dropdown">
                <a
                  class="navbar_link nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown5"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-target="#navbar"
                  aria-expanded="false"
                >
                  Profile
                </a>
                <ul class="dropdown-menu tooltip_div profile" aria-labelledby="navbarDropdown5">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="navbar_links_main nav-item dropdown">
                <a
                  class="navbar_link nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown2"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-target="#navbar"
                  aria-expanded="false"
                >
                  Preference
                </a>
                <ul class="dropdown-menu tooltip_div preference" aria-labelledby="navbarDropdown2">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="navbar_links_main nav-item dropdown">
                <a
                  class="navbar_link nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown3"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-target="#navbar"
                  aria-expanded="false"
                >
                  Customer Care
                </a>
                <ul class="dropdown-menu tooltip_div customer_care" aria-labelledby="navbarDropdown3">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="navbar_links_main nav-item dropdown">
                <a
                  class="navbar_link nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown4"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-target="#navbar"
                  aria-expanded="false"
                >
                  Settings
                </a>
                <ul class="dropdown-menu tooltip_div_settings settings" aria-labelledby="navbarDropdown4">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
           
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
