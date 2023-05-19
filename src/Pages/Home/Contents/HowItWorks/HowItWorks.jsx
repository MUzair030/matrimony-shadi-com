/* eslint-disable no-unused-vars */

import React from 'react'
import "./HowItWorks.css"

const HowItWorks = () => {

    const image_chat = "assets/images/how_it_works/chat.jpg"
    const image_find = "assets/images/how_it_works/find.jpg"
    const image_profile = "assets/images/how_it_works/profile.jpg"
    const image_work_profile = "assets/images/how_it_works/work-profile.jpg"

    return (
        <div className="container_border" style={{overflow: 'hidden'}}>
            <div className="how_it_works mt-0 mt-lg-5">
                <div className="row">
                    <div className="col-md-12 col-lg-7">
                        <div className="how_it_works_desc">
                            <div className="head_title_box align-items-start mb-3">
                                <h2 className='text-start'>How It Works?</h2>
                                <div className="hero_line_divider mt-4 mb-4"><span></span></div>
                            </div>
                            <div className="how_it_works_text">
                                <p>It’s quite easy and exiciting to get a match for yourself from Relish Dating. You just focus on your pickup lines, we will get your perfect matches.</p>
                                <p>Relish Dating has also been chosen as the best rising dating website in the Week Love magazine.</p>
                            </div>
                            <ul className="how_it_works_list">
                                <li><span>&#10003;</span>Register to our dating website</li>
                                <li><span>&#10003;</span>Fill up your profile completely</li>
                                <li><span>&#10003;</span>Upload your attractive profile picture</li>
                                <li><span>&#10003;</span>Search your interests</li>
                                <li><span>&#10003;</span>Stay active on the dating website</li>
                                <li><span>&#10003;</span>Message your interests and chat with them.</li>
                            </ul>
                            <button class="mt-2">Get Started</button>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-5">
                        <div className="how_it_works_imagebox">
                            <div className="mid_image_box">
                                <img className='how_it_works_img_chat img-fluid' src={`${process.env.PUBLIC_URL}/${image_chat}`} alt="" />
                                <div className="find_imagebox">
                                    <img className='how_it_works_img_work_profile img-fluid' src={`${process.env.PUBLIC_URL}/${image_work_profile}`} alt="" />
                                    <img className='how_it_works_img_find img-fluid' src={`${process.env.PUBLIC_URL}/${image_find}`} alt="" />
                                </div>
                                <img className='how_it_works_img_profile img-fluid' src={`${process.env.PUBLIC_URL}/${image_profile}`} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks