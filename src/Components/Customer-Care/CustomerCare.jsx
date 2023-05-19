import React, { Fragment, useEffect, useState } from "react";
import "./customercare.css";
import { Link } from "react-router-dom";
import {
  Col,
  Container,
  Row,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Card,
} from "reactstrap";
import ContactUs from "./ContactUs";
import { Header, Footer } from ".."

const CustomerCare = () => {
  const [open, setOpen] = useState("1");
  const [openMemberShip, setOpenMemberShip] = useState("2");

  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  const MembershipAcrodion = (id) => {
    if (openMemberShip === id) {
      setOpenMemberShip();
    } else {
      setOpenMemberShip(id);
    }
  };

  useEffect(() => {
    // document.body.style.scrollbarTrackColor = "red";
    document.body.style.scrollbarBaseColor = "red";
    document.body.style.scrollbarArrowColor = "green";
    document.body.style.scrollbarTrackColor = "blue";
  }, [])

  return (
    <>
      <Header isProfile={true} disabled />
      <Fragment>
        <div className="background_image_cont">
          <h2 className='search_help_title'>You can choose from Popular Topics</h2>
          <div className='cutomer_care_search_cont'>
            <input type='text' className='customercare_serach_field' placeholder='Search'></input>
            <i className="fa fa-search search_icon"></i>
          </div>
        </div>
        <div className="main_cont_customercare">
          <div className="parent_cont_customercare">
            <div className="c_care_topics_cont">
              <div className="c_care_accordion_wrapper">
                <Accordion className="c_care_accordion" open={open} toggle={toggle}>
                  <AccordionItem>
                    <AccordionHeader className="c_care_acc_header" targetId="1">
                      <i className="fa fa-user-circle c-care_acc_icons"></i>
                      <b>Profile & Photos</b>
                    </AccordionHeader>
                    <AccordionBody accordionId="1">
                      <ol>
                        <li>
                          <Link to="/customer-care-detail" style={{ textDecoration: "none" }}>
                            I want to edit my profile
                          </Link>
                        </li>
                        <li>
                          <Link to="/customer-care-detail" style={{ textDecoration: "none" }}>
                            I want to add photos
                          </Link>
                        </li>
                        <li>
                          <Link to="/customer-care-detail" style={{ textDecoration: "none" }}>
                            I want to change the display name on my profile
                          </Link>
                        </li>
                        <li>
                          <Link to="/customer-care-detail" style={{ textDecoration: "none" }}>
                            I want to change the privacy setting of my photos
                          </Link>
                        </li>
                        <li>
                          <Link to="/customer-care-detail" style={{ textDecoration: "none" }}>
                            I want to hide or delete my profile
                          </Link>
                        </li>
                        <li>
                          <Link to="/customer-care-detail" style={{ textDecoration: "none" }}>
                            I want to change my Email address
                          </Link>
                        </li>
                        <li>
                          <Link to="/customer-care-detail" style={{ textDecoration: "none" }}>
                            I want to change or hide my phone number
                          </Link>
                        </li>
                        <li>
                          <Link to="/customer-care-detail" style={{ textDecoration: "none" }}>
                            I want to delete my inactive profile.(asking to upload
                            ID-Proof)
                          </Link>
                        </li>
                        <li>
                          <Link to="/customer-care-detail" style={{ textDecoration: "none" }}>
                            Is it necessary to add a photo to my profile. How can i
                            add photos ?
                          </Link>
                        </li>
                        <li>
                          <Link to="/customer-care-detail" style={{ textDecoration: "none" }}>
                            How do I update the family details on my profile ?
                          </Link>
                        </li>
                      </ol>
                    </AccordionBody>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="c_care_accordion_wrapper">
                <Accordion
                  className="c_care_accordion"
                  // open={openMemberShip}
                  // toggle={MembershipAcrodion}
                  open={open} toggle={toggle}
                >
                  <AccordionItem>
                    <AccordionHeader className="c_care_acc_header" targetId="2">
                      <i className="fa fa-credit-card c-care_acc_icons"></i>
                      <b>Membership & Payments</b>
                    </AccordionHeader>
                    <AccordionBody accordionId="2">
                      <ol>
                        <li>
                          <Link to="/customer-care-detail" style={{ textDecoration: "none" }}>
                            I want to know about the various membership plans and
                            their benefits
                          </Link>
                        </li>
                        <li>
                          <Link to="/customer-care-detail" style={{ textDecoration: "none" }}>
                            I want to buy a membership how can i pay
                          </Link>
                        </li>
                        <li>
                          <Link to="/customer-care-detail" style={{ textDecoration: "none" }}>
                            I want to know the status of my order
                          </Link>
                        </li>
                        <li>
                          <Link to="/customer-care-detail" style={{ textDecoration: "none" }}>
                            I want to to request for refund
                          </Link>
                        </li>
                        <li>
                          <Link to="/customer-care-detail" style={{ textDecoration: "none" }}>
                            I want to know about the offers and discounts
                          </Link>
                        </li>
                        <li>
                          <Link to="/customer-care-detail" style={{ textDecoration: "none" }}>
                            I need help my payment is declined but the amount is
                            deducted
                          </Link>
                        </li>
                      </ol>
                    </AccordionBody>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="c_care_accordion_wrapper">
                <Accordion className="c_care_accordion" open={open} toggle={toggle}>
                  <AccordionItem>
                    <AccordionHeader className="c_care_acc_header" targetId="3">
                      <i className="fa fa-id-card c-care_acc_icons"></i>
                      <b>Contacting Members</b>
                    </AccordionHeader>
                    <AccordionBody accordionId="3">
                      <ol>
                        <li>
                          <Link to="" style={{ textDecoration: "none" }}>
                            I want to edit my profile
                          </Link>
                        </li>
                        <li>
                          <Link to="" style={{ textDecoration: "none" }}>
                            I want to add photos
                          </Link>
                        </li>
                        <li>
                          <Link to="" style={{ textDecoration: "none" }}>
                            I want to change the display name on my profile
                          </Link>
                        </li>
                        <li>
                          <Link to="" style={{ textDecoration: "none" }}>
                            I want to change the privacy setting of my photos
                          </Link>
                        </li>
                        <li>
                          <Link to="" style={{ textDecoration: "none" }}>
                            I want to hide or delete my profile
                          </Link>
                        </li>
                        <li>
                          <Link to="" style={{ textDecoration: "none" }}>
                            I want to change my Email address
                          </Link>
                        </li>
                        <li>
                          <Link to="" style={{ textDecoration: "none" }}>
                            I want to change or hide my phone number
                          </Link>
                        </li>
                        <li>
                          <Link to="" style={{ textDecoration: "none" }}>
                            I want to delete my inactive profile.(asking to upload
                            ID-Proof)
                          </Link>
                        </li>
                        <li>
                          <Link to="" style={{ textDecoration: "none" }}>
                            Is it necessary to add a photo to my profile. How can i
                            add photos ?
                          </Link>
                        </li>
                        <li>
                          <Link to="" style={{ textDecoration: "none" }}>
                            How do I update the family details on my profile ?
                          </Link>
                        </li>
                      </ol>
                    </AccordionBody>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="c_care_accordion_wrapper">
                <Accordion className="c_care_accordion" open={open} toggle={toggle}>
                  <AccordionItem>
                    <AccordionHeader className="c_care_acc_header" targetId="4">
                      <i className="fa fa-search c-care_acc_icons"></i>
                      <b>Search Options</b>
                    </AccordionHeader>
                    <AccordionBody accordionId="4">
                      <ol>
                        <li>
                          <Link to="" style={{ textDecoration: "none" }}>
                            I want to edit my profile
                          </Link>
                        </li>
                        <li>
                          <Link to="" style={{ textDecoration: "none" }}>
                            I want to add photos
                          </Link>
                        </li>
                        <li>
                          <Link to="" style={{ textDecoration: "none" }}>
                            I want to change the display name on my profile
                          </Link>
                        </li>
                        <li>
                          <Link to="" style={{ textDecoration: "none" }}>
                            I want to change the privacy setting of my photos
                          </Link>
                        </li>
                        <li>
                          <Link to="" style={{ textDecoration: "none" }}>
                            I want to hide or delete my profile
                          </Link>
                        </li>
                        <li>
                          <Link to="" style={{ textDecoration: "none" }}>
                            I want to change my Email address
                          </Link>
                        </li>
                        <li>
                          <Link to="" style={{ textDecoration: "none" }}>
                            I want to change or hide my phone number
                          </Link>
                        </li>
                        <li>
                          <Link to="" style={{ textDecoration: "none" }}>
                            I want to delete my inactive profile.(asking to upload
                            ID-Proof)
                          </Link>
                        </li>
                        <li>
                          <Link to="" style={{ textDecoration: "none" }}>
                            Is it necessary to add a photo to my profile. How can i
                            add photos ?
                          </Link>
                        </li>
                        <li>
                          <Link to="" style={{ textDecoration: "none" }}>
                            How do I update the family details on my profile ?
                          </Link>
                        </li>
                      </ol>
                    </AccordionBody>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="c_care_accordion_wrapper">
                <Accordion className="c_care_accordion" open={open} toggle={toggle}>
                  <AccordionItem>
                    <AccordionHeader className="c_care_acc_header" targetId="5">
                      <i className="fa fa-sign-in c-care_acc_icons"></i>
                      <b>Register & Login</b>
                    </AccordionHeader>
                    <AccordionBody accordionId="5">
                      <ol>
                        <li>
                          <Link to="" style={{ textDecoration: "none" }}>
                            I want to edit my profile
                          </Link>
                        </li>
                        <li>
                          <Link to="" style={{ textDecoration: "none" }}>
                            I want to add photos
                          </Link>
                        </li>
                        <li>
                          <Link to="" style={{ textDecoration: "none" }}>
                            I want to change the display name on my profile
                          </Link>
                        </li>
                        <li>
                          <Link to="" style={{ textDecoration: "none" }}>
                            I want to change the privacy setting of my photos
                          </Link>
                        </li>
                        <li>
                          <Link to="" style={{ textDecoration: "none" }}>
                            I want to hide or delete my profile
                          </Link>
                        </li>
                        <li>
                          <Link to="" style={{ textDecoration: "none" }}>
                            I want to change my Email address
                          </Link>
                        </li>
                        <li>
                          <Link to="" style={{ textDecoration: "none" }}>
                            I want to change or hide my phone number
                          </Link>
                        </li>
                        <li>
                          <Link to="" style={{ textDecoration: "none" }}>
                            I want to delete my inactive profile.(asking to upload
                            ID-Proof)
                          </Link>
                        </li>
                        <li>
                          <Link to="" style={{ textDecoration: "none" }}>
                            Is it necessary to add a photo to my profile. How can i
                            add photos ?
                          </Link>
                        </li>
                        <li>
                          <Link to="" style={{ textDecoration: "none" }}>
                            How do I update the family details on my profile ?
                          </Link>
                        </li>
                      </ol>
                    </AccordionBody>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="c_care_accordion_wrapper">
                <Accordion className="c_care_accordion" open={open} toggle={toggle}>
                  <AccordionItem>
                    <AccordionHeader className="c_care_acc_header" targetId="6">
                      <i className="fa fa-exclamation-circle c-care_acc_icons"></i>
                      <b>Report But/Profile</b>
                    </AccordionHeader>
                    <AccordionBody accordionId="6">
                      <ol>
                        <li>
                          <Link to="" style={{ textDecoration: "none" }}>
                            I want to edit my profile
                          </Link>
                        </li>
                        <li>
                          <Link to="" style={{ textDecoration: "none" }}>
                            I want to add photos
                          </Link>
                        </li>
                        <li>
                          <Link to="" style={{ textDecoration: "none" }}>
                            I want to change the display name on my profile
                          </Link>
                        </li>
                        <li>
                          <Link to="" style={{ textDecoration: "none" }}>
                            I want to change the privacy setting of my photos
                          </Link>
                        </li>
                        <li>
                          <Link to="" style={{ textDecoration: "none" }}>
                            I want to hide or delete my profile
                          </Link>
                        </li>
                        <li>
                          <Link to="" style={{ textDecoration: "none" }}>
                            I want to change my Email address
                          </Link>
                        </li>
                        <li>
                          <Link to="" style={{ textDecoration: "none" }}>
                            I want to change or hide my phone number
                          </Link>
                        </li>
                        <li>
                          <Link to="" style={{ textDecoration: "none" }}>
                            I want to delete my inactive profile.(asking to upload
                            ID-Proof)
                          </Link>
                        </li>
                        <li>
                          <Link to="" style={{ textDecoration: "none" }}>
                            Is it necessary to add a photo to my profile. How can i
                            add photos ?
                          </Link>
                        </li>
                        <li>
                          <Link to="" style={{ textDecoration: "none" }}>
                            How do I update the family details on my profile ?
                          </Link>
                        </li>
                      </ol>
                    </AccordionBody>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            <ContactUs />
          </div>
        </div>
      </Fragment>
      <Footer isProfile={true} />
    </>
  );
};

export default CustomerCare;
