import React from "react";
import { Popover, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { QuestionCircleOutlined } from "@ant-design/icons";

const HelpInfo = ({ visible }) => {
  const content = (
    <div>
      <Row>
        <Col span={24}>
          <Link to="/register">Register</Link>
        </Col>
        <Col>
          <Link to="/rememberPassword">Remember Password</Link>
        </Col>
      </Row>
    </div>
  );

  return (
    <Popover content={content} title="Help">
      <QuestionCircleOutlined />
    </Popover>
  );
};

export default HelpInfo;
