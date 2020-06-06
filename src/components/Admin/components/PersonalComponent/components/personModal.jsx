// React
import React from "react";

// Third Part
import {
  Modal,
  Form,
  Input,
  InputNumber,
  Row,
  Col,
  Select,
  DatePicker,
  Typography,
} from "antd";
import { openNotification } from "../../../../custom";

// Functional Component
const PersonModal = ({ visible, data, onCancel, onhandleUpdate }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      closable={false}
      visible={visible}
      title="Edit Person Items"
      okText="Edit"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            onhandleUpdate(values);
          })
          .catch((info) => {
            openNotification("error", "Error while Modifying");
          });
      }}
    >
      <Form
        hideRequiredMark
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          id: data.id,
          first_name: data.first_name,
          last_name: data.last_name,
          age: data.age,
          address: data.address,
          gender: data.gender,
          phone_number: data.phone_number,
          work_position: data.work_position,
          salary: data.salary,
          isAdmin: "No",
        }}
      >
        <Row>
          <Col span={10}>
            <Form.Item
              name="first_name"
              label="First Name"
              rules={[
                {
                  required: true,
                  message: "Please input the First Name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={10} offset={2}>
            <Form.Item
              name="last_name"
              label="Last Name"
              rules={[
                {
                  required: true,
                  message: "Please input the Last Name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={10}>
            <Form.Item
              label="Age"
              name="age"
              rules={[{ required: true, message: "Please input age" }]}
            >
              <InputNumber min={0} max={60} className="w-100" />
            </Form.Item>
          </Col>
          <Col span={10} offset={2}>
            <Form.Item
              label="Gender"
              name="gender"
              rules={[{ required: true, message: "Please choose your gender" }]}
            >
              <Select>
                <Select.Option value="Male">Male</Select.Option>
                <Select.Option value="Female">Female</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={10}>
            <Form.Item label="Address" name="address">
              <Select>
                <Select.Option value="Huangpu">Huangpu</Select.Option>

                <Select.Option value="Changning">Changning</Select.Option>

                <Select.Option value="Jing'an">Jing'an</Select.Option>

                <Select.Option value="Putuo">Putuo</Select.Option>

                <Select.Option value="Hongkou">Hongkou</Select.Option>

                <Select.Option value="Yangpu">Yangpu</Select.Option>

                <Select.Option value="Minhang">Minhang </Select.Option>

                <Select.Option value="Baoshan"> Baoshan</Select.Option>

                <Select.Option value="Jiading"> Jiading</Select.Option>

                <Select.Option value="Pudong"> Pudong</Select.Option>

                <Select.Option value="Jinshan"> Jinshan</Select.Option>

                <Select.Option value="Songjiang"> Songjiang</Select.Option>

                <Select.Option value="Qingpu"> Qingpu</Select.Option>

                <Select.Option value="Fengxian"> Fengxian</Select.Option>

                <Select.Option value="Chongming"> Chongming</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={10} offset={2}>
            <Form.Item
              label="Phone"
              name="phone_number"
              rules={[{ required: true, message: "Please input phone" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={10}>
            <Form.Item
              label="Position"
              name="work_position"
              rules={[
                { required: true, message: "Please select employee position" },
              ]}
            >
              <Select>
                <Select.Option default value="Chef">
                  Chef
                </Select.Option>
                <Select.Option value="Waiter">Waiter</Select.Option>
                <Select.Option value="Manager">Manager</Select.Option>
                <Select.Option value="Cleaner">Cleaner</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={10} offset={2}>
            <Form.Item
              label="Salary"
              name="salary"
              rules={[{ required: true, message: "Please input salary" }]}
            >
              <InputNumber min={0} max={50000} className="w-100" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={10}>
            <Form.Item
              name="isAdmin"
              label="Privilege"
              rules={[{ required: true, message: "Please Choose Privilege" }]}
            >
              <Select>
                <Select.Option value="false">No</Select.Option>
                <Select.Option value="true">Yes</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={10} offset={2}>
            <Form.Item
              name="date"
              label="Date"
              rules={[{ required: true, message: "Please input date" }]}
            >
              <DatePicker className="w-100" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item name="id">
          <Typography.Text />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default PersonModal;
