import React from "react";
import { Card, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./customercare.css";

const ContactUs = () => {

  return (
    <>
      {/* <Row>
        <Col md="12" className="customercare_title">
          <h4>Contact Us</h4>
        </Col>
      </Row> */}
      <div className="c_care_contact_cont">
        <Card className="contact_us_card mb-3">
          <div className="card_inner_links">
            <Link to="" className="contact_us_card_links">
              <h5>Submit a Request</h5>
            </Link>
            <span className="contact_us_card_subtitle">
              Write to customer care
            </span>
          </div>
          <div className="card_inner_links">
            <h5 className="contact_us_card_links">Need instant help?</h5>
            <span className="contact_us_card_subtitle">24/7 live Chat</span>
          </div>
          <div className="card_inner_links">
            <h5 className="contact_us_card_links">My Requests</h5>
            <span className="contact_us_card_subtitle">
              View Status of my prveious requests
            </span>
          </div>
        </Card>
        <Card className="contact_us_card mb-3">
          <h5 className="contact_us_card_title">You Can Contact Us</h5>
          <span className="contact_us_card_subtitle">+00932932948992</span>
          <p className="para_contact_us_card">
            We are Back! Our phone services have resumed and you can now call us between 10am - 7pm (IST).
            You may experience marginally longer wait times in this period, but that will be fixed soon.
            For Instant Support, we recommend that you connect with us on Chat & we will be there to assist you.
            #StrongerTogethern this period, but that will be fixed soon.
          </p>
        </Card>
        <Card className="contact_us_chat_card">
          <div className="col-12 chat_card_header">
            <h5>
              Shaadi<span className=".com">.com</span>
            </h5>
            <i className="fa fa-list-ul"></i>
          </div>
          <div className="col-12 chat_msgs_cont">
            <div className="msg_div1">
              <div className="text_msg">
                Hello this is text message for test.
              </div>
              <div className="time_div">
                <span>12:00</span>
              </div>
            </div>
            <div className="msg_div2">
              <div className="text_msg">
                Hello this is text message for test.
              </div>
              <div className="time_div">
                <span>12:00</span>
              </div>
            </div>
            <div className="msg_div1">
              <div className="text_msg">
                Hello this is text.
              </div>
              <div className="time_div">
                <span>12:00</span>
              </div>
            </div>
            <div className="msg_div2">
              <div className="text_msg">
                Hello this is text message for test.
              </div>
              <div className="time_div">
                <span>12:00</span>
              </div>
            </div>
            <div className="msg_div1">
              <div className="text_msg">
                Hello this is text.
              </div>
              <div className="time_div">
                <span>12:00</span>
              </div>
            </div>
            <div className="msg_div2">
              <div className="text_msg">
                Hello this is text message for test.
              </div>
              <div className="time_div">
                <span>12:00</span>
              </div>
            </div>
            <div className="msg_div1">
              <div className="text_msg">
                Hello this is text.
              </div>
              <div className="time_div">
                <span>12:00</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default ContactUs;
