import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Footer.css"
import { FaFacebookF, FaTwitter, FaBlogger } from "react-icons/fa"
import { TiSocialYoutubeCircular } from "react-icons/ti"

const Footer = (props) => {

  const { isProfile } = props

  return (
    <div className='footer_wrapper'>
      <Container>
        {
          isProfile !== true && <div className="footer_section">
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div id="footer-1" className="footer_company_detail">
                  <div className="footer_heading">
                    <span className='me-2'>Shadi Dot Com</span>
                  </div>
                  <p className='footer_description'>
                    Shadi Dot Com is committed to the principle that you should only use dating website once and live happily ever after since our start in 2022. You should never have to register on a dating website again
                  </p>
                  <div className="footer_social_links">
                    <Link to="">
                      <span><FaFacebookF /></span>
                    </Link>
                    <Link to="">
                      <span><FaTwitter /></span>
                    </Link>
                    <Link to="">
                      <span><TiSocialYoutubeCircular /></span>
                    </Link>
                    <Link to="">
                      <span><FaBlogger /></span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-2">
                <div id="footer-2" className="footer_widget_nav_menu">
                  <div className="footer_heading">
                    <span className='me-2'>Quick Links</span>
                  </div>
                  <ul className="footer_nav_link">
                    <li><Link to="">Testimonial</Link></li>
                    <li><Link to="">Blog</Link></li>
                    <li><Link to="">Contact Us</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div id="footer-3" className="footer_contact_detail">
                  <div className="footer_heading">
                    <span className='me-2'>Contact Details</span>
                  </div>
                  <ul className="footer_contact_list">
                    <li>
                      <span className="fa fa-envelope"></span>
                      <span className='detail-content'>contact@shadidotcom</span>
                    </li>
                    <li>
                      <span className="fa fa-phone"></span>
                      <span className='detail-content'>+92 1111 111 111</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div id="footer-4" className="footer_newsletter">
                  <div className="footer_heading">
                    <span className='me-2'>Subscribe To Newsletter</span>
                  </div>
                  <p className="newsletter_para">
                    Be the first one to know about out new features, updates and many more.
                  </p>
                  <div className="footer_subscribe_box">
                    <form class="my-form">
                      <div class="input-group">
                        <input id="subscribe_mail" name="subscribe_mail" type="email" class="form-control rounded-0 border-0" placeholder="Newsletter / Email address" aria-label="Recipient's username" aria-describedby="basic-addon2" required />
                        <div class="input-group-append">
                          <button class="btn btn-outline-secondary rounded-0" type="submit" name="submit_email" id="button-addon2"><i class="fa fa-paper-plane"></i></button>
                        </div>
                      </div>
                      <div id="invalid_email" name="invalid_email" class="m-font-10 mx-3" style={{ fontSize: 12, color: 'red' }}>
                        <span></span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        {
          isProfile === true && <div className='footer_profile_links_wrap'>
            <div className="footer_profile_links">
              <Link to="">About Us</Link>
              <Link to="">Success Stories</Link>
              <Link to="">Our Blog</Link>
              <Link to="">Contact Us</Link>
            </div>
          </div>
        }
        <div className="footer_copy_right">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <p className='copyright_para'>Copyright © 2022 Relish Dating. All rights reserved.</p>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="copyright_links">
                <Link to="">FAQs</Link>
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/terms-conditions">Terms & Conditions</Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer