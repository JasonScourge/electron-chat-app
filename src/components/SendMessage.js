import React, { useState } from "react";
import { auth, db } from "../../src/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import dayjs from "dayjs";
import sendBtn from "../assets/images/send-btn.png";
import { Form, Input, Button } from "antd";

const SendMessage = ({ scroll, user }) => {
  const [message, setMessage] = useState("");

  const { uid, displayName } = user;
  const sendMessage = async () => {
    if (message.trim() !== "") {
      await addDoc(collection(db, "messages"), {
        text: message,
        name: displayName,
        serverTimestamp: serverTimestamp(),
        createdAt: dayjs().toString(),
        timeStamp: dayjs().format("h:mm A"),
        uid: uid,
      });
      setMessage("");
      scroll.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Form onFinish={() => sendMessage()} className="send-message">
      <Input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="Type message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="send-message-button">
        <Button
          onClick={() => sendMessage()}
          type="submit"
          icon={
            <div className="message-send-icon">
              <img src={sendBtn} alt="send-icon" />
            </div>
          }
        />
      </div>
    </Form>
  );

  return <Form></Form>;
};

export default SendMessage;
