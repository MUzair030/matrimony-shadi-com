import React, { Fragment } from 'react'
import './customercare.css';
import { Button, Card, Row, Col } from 'reactstrap';
import ContactUs from './ContactUs';
import { Header, Footer } from ".."
import { Link } from "react-router-dom"

const CustomerCareDetail = () => {
  return (
    <>
      <Header isProfile={true} disabled />
      <Fragment>
        <div className="main_cont_customercare_detail">
          <div className="background_image_cont">
            <h2 className='search_help_title'>What kind of help you Actually want?</h2>
            <div className='cutomer_care_search_cont'>
              <input type='text' className='customercare_serach_field' placeholder='Search'></input>
              <i className="fa fa-search search_icon"></i>
            </div>
          </div>
          <div className="customer_detail_content_parent">
            <div className="customercare_detail_card_wrapper">
              <Card className='customercare_detail_card'>
                <div className='customercare_detail_title_row'>
                  <div className='title_div'>
                    <i className="fa fa-user me-3"></i>
                    <h5 className='m-0 p-0'>I want to edit my profile</h5>
                  </div>
                </div>
                <div className='customercare_main_help'>
                  <ol className='helping_points'>
                    <li className='helping_point_numbers'>
                      Adding details to your profile lets you control and enhance how others see  your profile.
                    </li>
                    <li className='helping_point_numbers'>
                      Steps to edit profile details on Shaadi App (Android and iOS)
                      <ul className="c_care_sub_list">
                        <li>Click on the "Home" Tab available at the bottom-left corner of the Shaadi screen</li>
                        <li>Then click on the "Edit profile" option available next to your profile ID.</li>
                        <li>You get an option to edit your profile details category-wise (Basic Info, About Myself section, Religious  Background, etc..)</li>
                      </ul>
                    </li>
                    <li className='helping_point_numbers'>
                      Please note that critical details like Religion, Community, Date of Birth, Gender, Height, Marital Status, and Mother Tongue can be changed only once after profile registration.
                    </li>
                    <li className='helping_point_numbers'>
                      To edit your profile through the website, click on the button below:
                    </li>
                    <li className='helping_point_numbers'>
                      Please note that critical details like Religion, Community, Date of Birth, Gender, Height, Marital Status, and Mother Tongue can be changed only once after profile registration.
                    </li>
                  </ol>
                  <div className='btn_edit_help_row'>
                    <div className='customercare_detail_backbtn_row'>
                      <Link to={"/customer-care"}>
                        <Button className='customercare_detail_backbtn'>
                          <i class="fa fa-reply me-1"></i>
                          <span>Back</span>
                        </Button>
                      </Link>
                    </div>
                    <Button className='edit_help_btn'>Edit my profile</Button>
                  </div>
                </div>
              </Card>
            </div>
            <ContactUs />
          </div>
        </div>
      </Fragment>
      <Footer isProfile={true} />
    </>
  )
}

export default CustomerCareDetail