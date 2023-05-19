/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';
import "./Stories.css"

const StorySingleBox = (props) => {
    const { id, image, title, description, posted_at } = props.story;

    return (
        <div className='story_box_single_card'>
            <Link to="">
                <div className="story_box_single_image_image_box">
                    <img className='img-fluid story_box_single_image' src={`${process.env.PUBLIC_URL}/${image}`} alt="" />
                </div>
            </Link>
            <div className="story_box_single_body">
                <Link to="">
                    <h2>{title}</h2>
                </Link>
                <div className="story_box_single_body_para mt-3"
                    dangerouslySetInnerHTML={{ __html: description }}>
                </div>
            </div>
        </div>
    )
}

export default StorySingleBox