import React from "react";
import { auth } from "../../src/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Message = ({ message, user }) => {
  return (
    <div className={`chat-bubble ${message?.uid === user?.uid ? "right" : ""}`}>
      <div className="chat-bubble__right">
        <p className="user-message">{message.text}</p>
        <div className="time-stamp">{message.timeStamp}</div>
      </div>
    </div>
  );
};

export default Message;
