import React, { useState } from "react";
import { Col, Row, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import NewChatBtn from "../components/NewChatBtn";
import MessageBar from "../components/MessageBar";

function Chat() {
  const navigate = useNavigate();
  const [isChatActive, setIsChatActive] = useState(false);

  return (
    <Row>
      <Col className="chat-sidebar" span={6}>
        <div
          onClick={() => {
            setIsChatActive(true);
          }}
        >
          <NewChatBtn className="clickable" />
        </div>
      </Col>
      <Col className="chat-window" span={18}>
        {isChatActive && <MessageBar />}
      </Col>
    </Row>
  );
}

export default Chat;
