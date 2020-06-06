// React
import React from "react";

// Third Part
import { Drawer, Form, Row, Col, Button, InputNumber, DatePicker } from "antd";

// Form customization
const layout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 24 },
};

// Functional Component
const TableDrawer = ({ visible, onClose, onHandleAdd }) => {
  return (
    <Drawer
      title="Add Table Items"
      width={400}
      closable={false}
      visible={visible}
      onClose={onClose}
    >
      <Form {...layout} onFinish={onHandleAdd} name="basic" hideRequiredMark>
        <Form.Item
          label="Table Number"
          name="table_number"
          rules={[{ required: true, message: "Enter table Number" }]}
        >
          <InputNumber
            placeholder="Enter Table Number"
            min={0}
            className="w-100"
          />
        </Form.Item>
        <Form.Item
          label="Table Seats"
          rules={[{ required: true, message: "Enter table Seats" }]}
          name="seats"
        >
          <InputNumber
            placeholder="Enter Table Seats"
            min={0}
            className="w-100"
          />
        </Form.Item>
        <Form.Item
          label="Entered Date"
          rules={[{ required: true, message: "Enter the date" }]}
          name="date"
        >
          <DatePicker
            placeholder="Enter Table Date"
            picker="date"
            className="w-100"
          />
        </Form.Item>
        <Form.Item>
          <Row>
            <Col offset={1}>
              <Button type="primary" htmlType="submit">
                Add
              </Button>
            </Col>
            <Col offset={2}>
              <Button type="danger" onClick={onClose}>
                Cancel
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default TableDrawer;
