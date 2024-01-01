import React, { useState } from "react";
import { Col, Row, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

import SignUpImage from "../components/SignUpImage";

function SignUpCode() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  return (
    <div className="display center">
      <Row>
        <Col span={24}>
          <SignUpImage />
        </Col>
        <Col span={24}>
          <div className="title-text">+1 310-481-4739</div>
        </Col>
        <Col span={24}>
          <div className="sub-title-text">
            We have sent you an SMS with the code
          </div>
        </Col>
        <Col span={24}>
          <Input
            placeholder="Code"
            onChange={(event) => {
              const reg = new RegExp("^[0-9]+$");
              const value = event.target.value.trim();
              if (reg.test(value) || value === "") {
                setCode(value);
              }
            }}
            value={code}
          />
          <div>
            <Button
              disabled={!code}
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

export default SignUpCode;
