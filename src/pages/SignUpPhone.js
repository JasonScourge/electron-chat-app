import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row, Input, Button } from "antd";

import SignUpImage from "../components/SignUpImage";
import PhonePrefix from "../components/PhonePrefix";

function SignUpPhone() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  return (
    <div className="display center">
      <Row>
        <Col span={24}>
          <SignUpImage />
        </Col>
        <Col span={24}>
          <div className="title-text">What's your Phone Number?</div>
        </Col>
        <Col span={24}>
          {/* NOTE: Input any number will do as there is no actual SMS service */}
          <Input
            placeholder="Phone Number"
            onChange={(event) => {
              const reg = new RegExp("^[0-9]+$");
              const value = event.target.value.trim();
              if (reg.test(value) || value === "") {
                setPhoneNumber(value);
              }
            }}
            value={phoneNumber}
            prefix={<PhonePrefix />}
          />
          <div>
            <Button
              disabled={!phoneNumber}
              className="next-btn"
              type="primary"
              onClick={() => {
                navigate("/signUpCode");
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

export default SignUpPhone;
