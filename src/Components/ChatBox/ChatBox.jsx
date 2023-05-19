/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "./ChatBox.css"
import ChatBoxItem from './ChatBoxItem'
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';

const ChatBox = () => {

    const [showChatBox, setShowChatBox] = useState(true)

    const handleChatBox = () => {
        setShowChatBox(!showChatBox)
    }

    const chatList = [
        { id: 1, chatProfileImage: `assets/images/profiles/dummy/250-photo-profile-1.jpg`, chatProfileName: "Aliza Anthony", },
        { id: 2, chatProfileImage: `assets/images/profiles/dummy/bala_hatun_1.jpg`, chatProfileName: "Asma Jasmeen", },
        { id: 3, chatProfileImage: `assets/images/profiles/dummy/250-photo-profile-1.jpg`, chatProfileName: "Aliza Anthony", },
        { id: 4, chatProfileImage: `assets/images/profiles/dummy/bala_hatun_2.jpg`, chatProfileName: "Alia Aslam", },
        { id: 5, chatProfileImage: `assets/images/profiles/dummy/250-photo-profile-1.jpg`, chatProfileName: "Aliza Anthony", },
        { id: 6, chatProfileImage: `assets/images/profiles/dummy/bala_hatun_4.jpg`, chatProfileName: "Jasmene", },
        { id: 7, chatProfileImage: `assets/images/profiles/dummy/250-photo-profile-1.jpg`, chatProfileName: "Aliza Anthony", },
        { id: 8, chatProfileImage: `assets/images/profiles/dummy/250-photo-profile-1.jpg`, chatProfileName: "Aliza Anthony", },
    ];

    return (
        <div className="chat_box" style={{ minHeight: showChatBox == false ? "auto" : 500 }}>
            <div className="chat_box_header" onClick={handleChatBox}>
                <CommentOutlinedIcon className="chat_box_icon" />
                Chat Box
            </div>

            <div style={{ display: showChatBox ? "block" : "none" }}>
                {/* <ChatBoxItem /> */}
                {
                    chatList.length > 0 && chatList.map((item) => (
                        <ChatBoxItem chatProfileImage={item.chatProfileImage} chatProfileName={item.chatProfileName} />
                    ))
                }
            </div>
        </div>
    )
}

export default ChatBox