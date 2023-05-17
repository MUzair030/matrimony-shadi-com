/* eslint-disable no-unused-vars */
import React from 'react'
import "./Tips.css"

const Tips = (props) => {

    const { id, image, title, posted_at } = props.tips;

    return (
        <div className='dating_tips_box mx-2'>
            <div className="dating_tips_box_imagebox">
                <img className='dating_tips_box_image' src={`${process.env.PUBLIC_URL}/${image}`} alt="" />
            </div>
            <div className="dating_tips_body">
                <h2>{title}</h2>
            </div>
        </div>
    )
}

export default Tips