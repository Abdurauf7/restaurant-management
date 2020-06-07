// React
import React, { Fragment } from "react";

// Third part
import {
  Form,
  Input,
  Select,
  Button,
  InputNumber,
  Row,
  Col,
  DatePicker,
  Layout,
} from "antd";

// services
import { registerUser } from "../../services/userServices";
import { openNotification, Footer } from "../custom";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const { Option } = Select;
const Register = ({ history }) => {
  const onHandleAdd = async (values) => {
    try {
      await registerUser(values, history);
    } catch (error) {
      openNotification("error", "Can't add User", "Check Connection");
    }
  };
  return (
    <Fragment>
      <Layout>
        <Layout.Content style={{ margin: "5em 16px" }}>
          <div className="container pt-5">
            <div
              style={{
                background: "#fff",
                padding: 44,
                minHeight: 480,
              }}
              className="border border-info"
            >
              <Form {...layout} name="basic" onFinish={onHandleAdd}>
                <Row justify="center">
                  <h1 className=" mt-2 mb-5 font-weight-bold text-uppercase">
                    Register
                  </h1>
                </Row>
                <Row>
                  <Col span={10}>
                    <Form.Item
                      label="First Name"
                      name="first_name"
                      rules={[
                        { required: true, message: "Please input firstName" },
                      ]}
                    >
                      <Input placeholder="Enter First Name" allowClear />
                    </Form.Item>
                  </Col>
                  <Col span={10} offset={2}>
                    <Form.Item
                      label="Last Name"
                      name="last_name"
                      rules={[
                        { required: true, message: "Please input lastName" },
                      ]}
                    >
                      <Input allowClear placeholder="Last Name" />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={10}>
                    <Form.Item
                      label="Gender"
                      name="gender"
                      rules={[
                        { required: true, message: "Please choose gender" },
                      ]}
                    >
                      <Select placeholder="Select your gender">
                        <Option default value="Male">
                          Male
                        </Option>
                        <Option value="Female">Female</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={10} offset={2}>
                    <Form.Item
                      label="Age"
                      name="age"
                      rules={[{ required: true, message: "Please input age" }]}
                    >
                      <InputNumber
                        min={0}
                        max={60}
                        placeholder="Enter your age"
                        className="w-100"
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={10}>
                    <Form.Item
                      label="Address"
                      name="address"
                      rules={[
                        { required: true, message: "Please input Address" },
                      ]}
                    >
                      <Select placeholder="Select Address">
                        <Option value="Huangpu">Huangpu</Option>

                        <Option value="Changning">Changning</Option>

                        <Option value="Jing'an">Jing'an</Option>

                        <Option value="Putuo">Putuo</Option>

                        <Option value="Hongkou">Hongkou</Option>

                        <Option value="Yangpu">Yangpu</Option>

                        <Option value="Minhang">Minhang </Option>

                        <Option value="Baoshan"> Baoshan</Option>

                        <Option value="Jiading"> Jiading</Option>

                        <Option value="Pudong"> Pudong</Option>

                        <Option value="Jinshan"> Jinshan</Option>

                        <Option value="Songjiang"> Songjiang</Option>

                        <Option value="Qingpu"> Qingpu</Option>

                        <Option value="Fengxian"> Fengxian</Option>

                        <Option value="Chongming"> Chongming</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={10} offset={2}>
                    <Form.Item
                      label="Phone"
                      name="phone_number"
                      rules={[
                        { required: true, message: "Please Input PhoneNumber" },
                      ]}
                    >
                      <InputNumber
                        min={0}
                        placeholder="Enter Phone Number"
                        className="w-100"
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={10}>
                    <Form.Item
                      label="Position"
                      name="work_position"
                      rules={[
                        {
                          required: true,
                          message: "Please choose workPosition",
                        },
                      ]}
                    >
                      <Select placeholder="Select Work Position">
                        <Option default value="Chef">
                          Chef
                        </Option>
                        <Option value="Waiter">Waiter</Option>
                        <Option value="Manager">Manager</Option>
                        <Option value="Cleaner">Cleaner</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={10} offset={2}>
                    <Form.Item
                      label="Salary"
                      name="salary"
                      rules={[
                        {
                          required: true,
                          message: "Please input salary that you want",
                        },
                      ]}
                    >
                      <InputNumber
                        min={0}
                        max={50000}
                        placeholder="Enter salary"
                        className="w-100"
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={10}>
                    <Form.Item
                      name="email"
                      label="Email"
                      rules={[{ required: true, type: "email" }]}
                    >
                      <Input placeholder="Enter Email" />
                    </Form.Item>
                  </Col>
                  <Col span={10} offset={2}>
                    <Form.Item
                      label="Password"
                      name="password"
                      rules={[
                        { required: true, message: "Please input password" },
                      ]}
                    >
                      <Input.Password placeholder="Enter password" />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={10}>
                    <Form.Item
                      name="date"
                      label="Date"
                      rules={[
                        { required: true, message: "Please choose date" },
                      ]}
                    >
                      <DatePicker
                        className="w-100"
                        placeholder="Choose Your Registered Date"
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col offset={4}>
                    <Form.Item>
                      <Button type="primary" htmlType="submit">
                        Register
                      </Button>
                    </Form.Item>
                  </Col>
                  <Col offset={1}>
                    <Form.Item>
                      <Button
                        onClick={() => history.replace("/")}
                        type="danger"
                      >
                        Back
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </Layout.Content>
      </Layout>
      <Footer />
    </Fragment>
  );
};

export default Register;
