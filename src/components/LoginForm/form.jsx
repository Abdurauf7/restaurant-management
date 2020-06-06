import React from "react";
import { Form, Typography, Input, Button, Card, Row, Col } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import HelpInfo from "./popover";

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 24 }
};

const tailLayout = {
  wrapperCol: { offset: 6, span: 16 }
};

const SignIn = ({ onlogin, onhandleFail }) => {
  return (
    <Card bordered={false}>
      <Form
        {...layout}
        name="normal_login"
        style={{ margin: "15em 0" }}
        className="login-form"
        hideRequiredMark
        onFinish={onlogin}
        onFinishFailed={onhandleFail}
      >
        <Form.Item>
          <Typography.Title className="text-center ml-5">
            SignIn
          </Typography.Title>
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please input your Email!"
            }
          ]}
        >
          <Input className="site-form-item-icon" prefix={<UserOutlined />} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!"
            }
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            className="site-form-item-icon"
          />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Row>
            <Col>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Login
              </Button>
            </Col>
            <Col>
              <div className="ml-2">
                <HelpInfo />
              </div>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default SignIn;
