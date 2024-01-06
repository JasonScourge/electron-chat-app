import React, { useState, useEffect } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { Col, Row, Modal, Button } from "antd";
import { db } from "../../src/firebase";
import NewChatBtn from "../components/NewChatBtn";
import ChatBox from "../components/ChatBox";
import DisplayPicture from "../components/DisplayPicture";
import { user1, user2 } from "../data/users";

function ChatApp() {
  const [isChatActive, setIsChatActive] = useState(false);
  const [isUserSelectionActive, setIsUserSelectionActive] = useState(false);
  const [user, setUser] = useState(null);
  const [chatTarget, setChatTarget] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
      limit(1)
    );

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      QuerySnapshot.forEach((doc) => {
        setMessage(doc.data());
      });
    });
    return () => unsubscribe;
  }, []);

  useEffect(() => {
    if (!user) {
      setIsUserSelectionActive(true);
      setUser(user1);
      setChatTarget(user2);
    }
  }, [user]);

  return (
    <Row>
      <Modal
        open={isUserSelectionActive}
        footer={null}
        closeIcon={false}
        maskClosable={false}
      >
        <div className="center">
          <p className="header-title-bold">
            Select one of the following users to get started.
          </p>
        </div>
        <div className="center">
          <Button
            className="next-btn"
            type="primary"
            onClick={() => {
              setUser(user1);
              setChatTarget(user2);
              setIsUserSelectionActive(false);
            }}
          >
            {user1.displayName}
          </Button>
        </div>
        <div className="center">
          <Button
            className="next-btn"
            type="primary"
            onClick={() => {
              setUser(user2);
              setChatTarget(user1);
              setIsUserSelectionActive(false);
            }}
          >
            {user2.displayName}
          </Button>
        </div>
        <div className="center">
          <p className="footer-title-bold">
            Afterwards, click on the pencil icon to start a chat.
          </p>
        </div>
      </Modal>
      <Col className="chat-sidebar" span={6}>
        <div
          onClick={() => {
            setIsChatActive(true);
          }}
        >
          {isChatActive && (
            <div className="sidebar-chat-preview">
              <DisplayPicture chatTarget={chatTarget} />
              <div className="sidebar-chat-message">
                <Row className="sidebar-chat-top">
                  <Col xs={4} sm={6} lg={10} className="chat-name">
                    {chatTarget?.displayName}
                  </Col>
                  <Col xs={6} sm={12} lg={12} className="chat-timestamp">
                    {message?.timeStamp}
                  </Col>
                  <Col xs={3} sm={8} lg={12} className="chat-message-details">
                    {message?.text}
                  </Col>
                </Row>
              </div>
            </div>
          )}
          <NewChatBtn className="clickable" />
        </div>
      </Col>
      <Col className="chat-window" span={18}>
        {isChatActive && <ChatBox user={user} />}
      </Col>
    </Row>
  );
}

export default ChatApp;
