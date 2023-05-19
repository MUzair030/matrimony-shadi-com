/* eslint-disable no-unused-vars */
import React from 'react'
import "./HeroSlide.css"
import { Carousel } from "react-bootstrap"

const HeroSlide = () => {

    var Hero_Slide_Image = "assets/images/banner/banner-img-1.jpg";
    var Hero_Slide_Image_1 = "assets/images/banner/banner-img-1.jpg";
    var Hero_Slide_Image_2 = "assets/images/banner/banner-img-2.jpg";
    var Hero_Slide_Image_3 = "assets/images/banner/banner-img-3.jpg";
    var Hero_Slide_ProfileImage_1 = "assets/images/banner/profile_head/profile-head-man-1.jpg";
    var Hero_Slide_ProfileImage_2 = "assets/images/banner/profile_head/profile-head-man-2.jpg";
    var Hero_Slide_ProfileImage_3 = "assets/images/banner/profile_head/profile-head-woman-3.jpg";
    var Hero_Slide_ProfileImage_4 = "assets/images/banner/profile_head/profile-head-woman-2.jpg";
    var Hero_Slide_ProfileImage_5 = "assets/images/banner/profile_head/profile-head-man-3.jpg";
    var Hero_Slide_ProfileImage_6 = "assets/images/banner/profile_head/profile-head-woman-1.jpg";
    
    return (
        <div className='hero__slide'>
            <div className="hero__slide_container">
                <div className="hero__slide_infobox">
                    <div className="hero__slide_infobox_widget">
                        <div className="title_wrapped">
                            <h5>Find Your</h5>
                            <h1>Best Match</h1>
                            <div className="hero_line_divider mb-4 pb-2">
                                <span></span>
                            </div>
                            <p className='mb-4'>
                                Relish Dating is the Best Dating site for singles to find their <strong style={{color: 'var(--color-secondary)'}}>Perfect Match</strong>. It’s super easy and very exciting.
                            </p>
                            <button className='mt-2'>Get Started</button>
                        </div>
                    </div>
                    <div className="profile_head_box">
                        <img src={`${process.env.PUBLIC_URL}/${Hero_Slide_ProfileImage_1}`} alt="" />
                    </div>
                    <div className="profile_head_box">
                        <img src={`${process.env.PUBLIC_URL}/${Hero_Slide_ProfileImage_2}`} alt="" />
                    </div>
                    <div className="profile_head_box">
                        <img src={`${process.env.PUBLIC_URL}/${Hero_Slide_ProfileImage_3}`} alt="" />
                    </div>
                    <div className="profile_head_box">
                        <img src={`${process.env.PUBLIC_URL}/${Hero_Slide_ProfileImage_4}`} alt="" />
                    </div>
                    <div className="profile_head_box">
                        <img src={`${process.env.PUBLIC_URL}/${Hero_Slide_ProfileImage_5}`} alt="" />
                    </div>
                    <div className="profile_head_box">
                        <img src={`${process.env.PUBLIC_URL}/${Hero_Slide_ProfileImage_6}`} alt="" />
                    </div>
                </div>
                <div className="hero__slide_imagebox">
                    {/* <img className='hero__slide_imagebox_image' src={`${process.env.PUBLIC_URL}/${Hero_Slide_Image}`} alt="" /> */}
                    <Carousel fade interval={3000} className='hero__slide_imagebox_carousel'>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 hero__slide_imagebox_image"
                                src={`${process.env.PUBLIC_URL}/${Hero_Slide_Image_1}`}
                                alt=""
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 hero__slide_imagebox_image"
                                src={`${process.env.PUBLIC_URL}/${Hero_Slide_Image_2}`}
                                alt=""
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 hero__slide_imagebox_image"
                                src={`${process.env.PUBLIC_URL}/${Hero_Slide_Image_3}`}
                                alt=""
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default HeroSlide