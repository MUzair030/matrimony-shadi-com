import React from 'react'
import "./Notifications.css"
import MessageIcon from '@mui/icons-material/Message';

const Notification = () => {
    return (
        <div className="notification_box">
            <div className="d_nofit_logo">
                <MessageIcon className='d_noftif_icon' />
            </div>
            <div className="notif_descript">
                <p className='d_notif_message mb-0'>Nitification Message</p>
                <p className='d_notif_time mb-0'>08-10-2022</p>
            </div>
        </div>
    )
}

export default Notification