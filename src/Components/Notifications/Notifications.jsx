import React from 'react'
import "./Notifications.css"
import Notification from "./Notification"

const Notifications = () => {
    return (
        <div className="notification_parent_wrapper">
            <div className="d_notif_title">
                <p className='mb-0'>Notification</p>
            </div>
            <div className="notification_parent">
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
            </div>
        </div>
    )
}

export default Notifications