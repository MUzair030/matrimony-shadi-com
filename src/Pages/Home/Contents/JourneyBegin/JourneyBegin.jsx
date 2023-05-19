import React from 'react'
import "./JourneyBegin.css"

const JourneyBeginImage = "assets/images/journey_begin_image.jpg";

const JourneyBegin = () => {
    return (
        <div className="journey_begin_wrapped">
            <div className="journey_begin_image_bgcolor"></div>
            <div className="container_border">
                <div className="journey_begin">
                    <div className="journey_imagebox_wrapped">
                        <div className="journey_imagebox">
                            <img className='img-fluid' src={`${process.env.PUBLIC_URL}/${JourneyBeginImage}`} alt="" />
                        </div>
                    </div>
                    <div className="journey_description_box">
                        <div className="journey_description">
                            <div className="journey_description_title mb-3">
                                <h3>Let Your</h3>
                                <h2>JOURNEY BEGIN</h2>
                                <div className="hero_line_divider mb-4"><span></span></div>
                            </div>
                            <p className='journey_description_para'>
                                Start your dating journey today with Relish Dating and find your <b style={{color: 'var(--color-secondary)'}}>Perfect Match</b>. Get ready to enjoy each & every moment to capture those beautiful memories for your lifetime.
                            </p>
                            <button>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JourneyBegin