import React from "react";
import chatBoxImg from "../../assets/IMAGES/girl_profile.jpg";
import styles from "../ChatBox/ChatBoxItem/ChatBoxItem.module.css";

function ChatBoxItem(props) {
  const { chatProfileImage, chatProfileName, status } = props;

  return (
    <>
      <div className={styles.chatBoxItem}>
        <div className={styles.cb_img}>
          <img src={`${process.env.PUBLIC_URL}/${chatProfileImage}` || chatBoxImg} alt="chat-box-img" />
        </div>
        <span className={styles.cb_name}> {chatProfileName || "Aliza Anthony"}</span>
        <span className={styles.cb_status}></span>
      </div>
    </>
  );
}

export default ChatBoxItem;
