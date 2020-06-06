// React
import React, { Fragment } from "react";
// Third Part
import {
  Drawer,
  Form,
  Input,
  InputNumber,
  DatePicker,
  Button,
  Row,
  Col,
} from "antd";

// Form layout customization
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

// Functional Component
const DishDarawer = ({ visible, title, onClose, onhandleAdd }) => {
  return (
    <Drawer
      closable={false}
      title={title}
      width={380}
      visible={visible}
      onClose={onClose}
    >
      <Fragment>
        <Form
          {...layout}
          name="basic"
          onFinish={onhandleAdd}
          hideRequiredMark
          className="m-0"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input name " }]}
          >
            <Input placeholder="Enter Dish Name" allowClear />
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please input price" }]}
          >
            <InputNumber
              placeholder="Enter Dish Price"
              min={0}
              step={0.1}
              className="w-100"
            />
          </Form.Item>
          <Form.Item
            label="Date"
            name="date"
            rules={[{ required: true, message: "Please choose Date" }]}
          >
            <DatePicker className="w-100" />
          </Form.Item>

          <Row>
            <Col span={5}>
              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Add
                </Button>
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item {...tailLayout}>
                <Button type="danger" onClick={onClose}>
                  Cancel
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Fragment>
    </Drawer>
  );
};

export default DishDarawer;
