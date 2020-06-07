import React, { Fragment } from "react";
import {
  Row,
  Col,
  Input,
  Divider,
  Button,
  Typography,
  Layout,
  InputNumber,
} from "antd";
const Cabinet = ({
  first_name,
  last_name,
  gender,
  age,
  address,
  email,
  phone_number,
  password,
  handleChange,
  handleAgeChange,
  handlePhoneChange,
  handleUpdate,
  handleCancel,
}) => {
  return (
    <Fragment>
      <Layout.Content style={{ margin: "2em 16px" }}>
        <div
          style={{ background: "#fff", padding: 24, minHeight: 280 }}
          className="border border-dark rounded"
        >
          <Typography.Title>
            Profile
            <br />
            <Typography.Text style={{ fontSize: "15px", marginTop: "0px" }}>
              The Information Can be Edit
            </Typography.Text>
          </Typography.Title>
          <Divider />
          <div className="mb-4">
            <Row justify="space-around">
              <Col span={4}>
                <Typography.Text>First name : </Typography.Text>
              </Col>
              <Col span={20}>
                <Input
                  className="form-control"
                  value={first_name}
                  name="first_name"
                  onChange={handleChange}
                />
              </Col>
            </Row>
          </div>
          <div className="mb-4">
            <Row justify="space-around">
              <Col span={4}>
                <Typography.Text>Last name : </Typography.Text>
              </Col>
              <Col span={20}>
                <Input
                  className="form-control"
                  value={last_name}
                  name="last_name"
                  onChange={handleChange}
                />
              </Col>
            </Row>
          </div>
          <div className="mb-4">
            <Row justify="space-around">
              <Col span={4}>
                <Typography.Text>Gender :</Typography.Text>
              </Col>
              <Col span={20}>
                <select
                  className="form-control"
                  value={gender}
                  name="gender"
                  onChange={handleChange}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </Col>
            </Row>
          </div>
          <div className="mb-4">
            <Row justify="space-around">
              <Col span={4}>
                <Typography.Text>Age :</Typography.Text>
              </Col>
              <Col span={20}>
                <InputNumber
                  className="w-100 form-control"
                  value={age}
                  name="age"
                  onChange={handleAgeChange}
                  min={0}
                  max={100}
                />
              </Col>
            </Row>
          </div>
          <div className="mb-4">
            <Row justify="space-around">
              <Col span={4}>
                <Typography.Text>Address :</Typography.Text>
              </Col>
              <Col span={20}>
                <Input
                  className="form-control"
                  value={address}
                  name="address"
                  onChange={handleChange}
                />
              </Col>
            </Row>
          </div>
          <div className="mb-4">
            <Row justify="space-around">
              <Col span={4}>
                <Typography.Text>Phone :</Typography.Text>
              </Col>
              <Col span={20}>
                <InputNumber
                  className="w-100 form-control"
                  value={phone_number}
                  name="phone_number"
                  onChange={handlePhoneChange}
                  min={0}
                />
              </Col>
            </Row>
          </div>
          <div className="mb-4">
            <Row justify="space-around">
              <Col span={4}>
                <Typography.Text>Email :</Typography.Text>
              </Col>
              <Col span={20}>
                <Input
                  className="form-control"
                  type="email"
                  value={email}
                  name="email"
                  onChange={handleChange}
                />
              </Col>
            </Row>
          </div>
          <div className="mb-4">
            <Row justify="space-around">
              <Col span={4}>
                <Typography.Text>Password :</Typography.Text>
              </Col>
              <Col span={20}>
                <Input
                  className="form-control"
                  placeholder="Enter New Password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                />
              </Col>
            </Row>
          </div>

          <Divider />
          <div className="ml-2">
            <Row>
              <Col span={2}>
                <Button type="primary" onClick={handleUpdate}>
                  Edit
                </Button>
              </Col>
              <Col>
                <Button type="danger" onClick={handleCancel}>
                  Cancel
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </Layout.Content>
    </Fragment>
  );
};

export default Cabinet;
