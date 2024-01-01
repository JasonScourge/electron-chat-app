import React, { useState } from "react";
import { Col, Row, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

import SignUpImage from "../components/SignUpImage";

function SignUpName() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();

  return (
    <div className="display center">
      <Row>
        <Col span={24}>
          <SignUpImage />
        </Col>
        <Col span={24}>
          <div className="title-text">{`What\'s your Full Name?`}</div>
        </Col>
        <Col span={24}>
          <Input
            placeholder="Name"
            onChange={(event) => {
              const reg = new RegExp("^[a-zA-Z ]*$");
              const value = event.target.value;

              if (value !== " " && (reg.test(value) || value === "")) {
                setFirstName(value);
              }
            }}
            value={firstName}
          />
        </Col>
        <Col className="input-box-spacing" span={24}>
          <Input
            placeholder="Last Name"
            onChange={(event) => {
              const reg = new RegExp("^[a-zA-Z ]*$");
              const value = event.target.value;

              if (value !== " " && (reg.test(value) || value === "")) {
                setLastName(value);
              }
            }}
            value={lastName}
          />
        </Col>
        <Col span={24}>
          <div>
            <Button
              disabled={!firstName && !lastName}
              className="next-btn"
              type="primary"
              onClick={() => {
                navigate("/signUpName");
              }}
            >
              Next
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default SignUpName;
