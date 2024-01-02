import React from "react";
import sendBtn from "../assets/images/send-btn.png";
import { Col, Row, Input, Button } from "antd";

export default function MessageBar({ messages }) {
  return (
    <Row className="message-bar">
      <Col span={22}>
        <div className="text-field-wrapper">
          <Input placeholder="Message" className="message-text-field" />
        </div>
      </Col>
      <Col span={2}>
        <img className="message-send-icon" src={sendBtn} alt="send-icon" />
      </Col>
    </Row>
  );
}
