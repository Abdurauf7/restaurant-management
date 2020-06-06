import React, { useState, Fragment } from "react";

import { apiUrl } from "../../config.json";
import { Form, Input, Layout, Typography, Row, Col, Button, Card } from "antd";

import httpService from "../../services/httpService";
import { openNotification, HeaderTitle, Footer } from "../custom/";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};

const RememberPassword = ({ history }) => {
  const [newPassword, setNewPassword] = useState([]);
  const onhandleSend = (item) => {
    try {
      httpService
        .post(apiUrl + "user/remember", item)
        .then((res) => res.data.data)
        .then((data) => setNewPassword(data));
    } catch (error) {
      openNotification("error", "Can't send email", "Check connection");
    }
  };

  return (
    <Fragment>
      <Layout>
        <Layout.Content style={{ margin: "5em 16px" }}>
          <div
            style={{
              background: "#fff",
              padding: 44,
              minHeight: 480,
            }}
            className="border border-info"
          >
            <div className="mb-5">
              <HeaderTitle title={"Remember Password"} />
            </div>
            <Row>
              <Col xs={10} sm={10} md={10} lg={10} xl={10}>
                <Form {...layout} hideRequiredMark onFinish={onhandleSend}>
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                      {
                        required: true,
                        type: "email",
                        message: "Enter correct email address",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Row>
                    <Col offset={8}>
                      <Form.Item>
                        <Button type="primary" htmlType="submit">
                          Send
                        </Button>
                      </Form.Item>
                    </Col>
                    <Col offset={1}>
                      <Form.Item>
                        <Button
                          type="ghost"
                          onClick={() => history.replace("/")}
                        >
                          Back to Home
                        </Button>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </Col>
              <Col xs={{ span: 12, offset: 2 }} sm={10} md={10} lg={10} xl={10}>
                <Card
                  style={{ width: "300px" }}
                  className="text-center rounded border border-warning"
                  title="New password"
                  cover={
                    <Typography.Title
                      className="mt-4 border border-info bg-light"
                      level={4}
                    >
                      {newPassword}
                    </Typography.Title>
                  }
                >
                  <Card.Meta
                    title="This is your new password"
                    description="Dont forget to change your password in to your cabinet"
                  />
                </Card>
              </Col>
            </Row>
          </div>
        </Layout.Content>
      </Layout>

      <Footer />
    </Fragment>
  );
};

export default RememberPassword;
