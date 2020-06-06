// React
import React from "react";

// Third Part
import {
  Drawer,
  Form,
  Input,
  Button,
  Row,
  Select,
  InputNumber,
  DatePicker,
} from "antd";

// Customization Layout
const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 24 },
};
// Functional Component
const PersonDarawer = ({ visible, title, onClose, onhandleAdd }) => {
  return (
    <Drawer
      closable={false}
      title={title}
      width={500}
      visible={visible}
      onClose={onClose}
    >
      <Form {...layout} name="basic" onFinish={onhandleAdd} hideRequiredMark>
        <Form.Item
          label="First Name"
          name="first_name"
          rules={[{ required: true, message: "Please input firstName" }]}
        >
          <Input placeholder="Enter First Name" allowClear />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="last_name"
          rules={[{ required: true, message: "Please input lastName" }]}
        >
          <Input placeholder="Enter Last Name" allowClear />
        </Form.Item>

        <Form.Item
          label="Gender"
          name="gender"
          rules={[{ required: true, message: "Please choose gender" }]}
        >
          <Select placeholder="Select Gender">
            <Select.Option value="Male">Male</Select.Option>
            <Select.Option value="Female">Female</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Age"
          name="age"
          rules={[{ required: true, message: "Please input age" }]}
        >
          <InputNumber
            placeholder="Enter age"
            min={0}
            max={60}
            className="w-100"
          />
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: "Please input Address" }]}
        >
          <Select placeholder="Select Address">
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
        <Form.Item
          label="Phone"
          name="phone_number"
          rules={[{ required: true, message: "Please input phoneNumber" }]}
        >
          <InputNumber
            placeholder="Enter Phone Number"
            min={0}
            className="w-100"
          />
        </Form.Item>

        <Form.Item
          label="Position"
          name="work_position"
          rules={[{ required: true, message: "Please choose workPosition" }]}
        >
          <Select placeholder="Select Work Position">
            <Select.Option value="Chef">Chef</Select.Option>
            <Select.Option value="Waiter">Waiter</Select.Option>
            <Select.Option value="Manager">Manager</Select.Option>
            <Select.Option value="Cleaner">Cleaner</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Salary"
          name="salary"
          rules={[{ required: true, message: "Please input salary" }]}
        >
          <InputNumber
            placeholder="Enter Salary"
            min={0}
            max={50000}
            className="w-100"
          />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, type: "email" }]}
        >
          <Input placeholder="Enter Email" allowClear />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input password" }]}
        >
          <Input.Password placeholder="Enter Password" allowClear />
        </Form.Item>

        <Form.Item
          name="date"
          label="Date"
          rules={[{ required: true, message: "Please choose date" }]}
        >
          <DatePicker placeholder="Enter Date" className="w-100" />
        </Form.Item>
        <Row>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="danger" onClick={onClose}>
              Cancel
            </Button>
          </Form.Item>
        </Row>
      </Form>
    </Drawer>
  );
};

export default PersonDarawer;
