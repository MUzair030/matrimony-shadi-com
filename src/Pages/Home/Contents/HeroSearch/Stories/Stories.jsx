/* eslint-disable no-unused-vars */

import React from 'react'
import { Link } from 'react-router-dom';
import "./Stories.css"

const Stories = (props) => {
    const { id, image, title, description, posted_at } = props.stories;

    return (
        <div className='story_box_card mb-3'>
            <div className="row m-0">
                <div className="col-3 col-sm-3 col-md-3 p-0">
                    <Link to="">
                        <div className="story_box_card_image_box">
                            <img className='img-fluid story_box_image' src={`${process.env.PUBLIC_URL}/${image}`} alt="" />
                        </div>
                    </Link>
                </div>
                <div className="col-9 col-sm-9 col-md-9 p-0">
                    <div className="story_box_card_body">
                        <div className="story_box_card_body_content">
                            <Link to="">
                                <h2>{title}</h2>
                            </Link>
                            <div className="story_box_body_para mt-3"
                                dangerouslySetInnerHTML={{ __html: description }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stories