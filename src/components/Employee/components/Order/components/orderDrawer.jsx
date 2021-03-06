// React
import React, { useState, useEffect } from "react";

// third part
import {
  Drawer,
  Form,
  Select,
  Input,
  TimePicker,
  Button,
  Row,
  Col,
} from "antd";

// Services
import { getTable } from "../../../../../services/tableServices";
import { getDishes } from "../../../../../services/dishServices";

// custom
import { openNotification } from "../../../../custom";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 24 },
};

const OrderDrawer = ({ visible, onClose, handleAdd }) => {
  // state
  const [tableNumber, setTableNumber] = useState([]);
  const [orders, setOrders] = useState([]);

  //   fetchTableNumber
  const fetchTableNumber = async () => {
    try {
      await getTable()
        .then((res) => res.data)
        .then((data) => setTableNumber(data));
    } catch (error) {
      openNotification("error", "Cant get tables", "Check connection");
    }
  };
  const fetchOrders = async () => {
    try {
      await getDishes()
        .then((res) => res.data)
        .then((data) => setOrders(data));
    } catch (error) {}
  };

  useEffect(() => {
    fetchTableNumber();
    fetchOrders();
  }, []);

  return (
    <Drawer
      title="Take Order"
      visible={visible}
      onClose={onClose}
      closable={false}
      width={480}
    >
      <Form {...layout} hideRequiredMark onFinish={handleAdd}>
        <Form.Item
          label="Table Number"
          name="table_number"
          rules={[{ required: true, message: "Enter Table Number" }]}
        >
          <Select placeholder="Select table number">
            {tableNumber.map((table) => (
              <Select.Option key={table.id} value={table.table_number}>
                {table.table_number}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Customer"
          name="customer_name"
          rules={[{ required: true, message: "Enter Customer Name" }]}
        >
          <Input placeholder="Customer Name" allowClear />
        </Form.Item>

        <Form.Item
          label="Order"
          name="dish"
          rules={[{ required: true, message: " Choose Dish" }]}
        >
          <Select placeholder="Please select" mode="multiple">
            {orders.map((or) => (
              <Select.Option key={or.id} value={or.name}>
                {or.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: " Choose Price" }]}
        >
          <Select mode="multiple" placeholder="Please select">
            {orders.map((or) => (
              <Select.Option key={or.id} value={or.price}>
                {or.name}-{or.price}¥
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Quantity"
          name="quantity"
          placeholder="Enter Quantity"
        >
          <Input.TextArea className="border" />
        </Form.Item>

        <Form.Item
          label="Time"
          name="time"
          placeholder="select time"
          rules={[{ required: true, message: "Choose Ordered Time" }]}
        >
          <TimePicker className="w-100" format="HH:mm" />
        </Form.Item>
        <Row>
          <Col offset={6} span={4}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Order
              </Button>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item>
              <Button type="danger" className="ml-3" onClick={onClose}>
                Cancel
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
};

export default OrderDrawer;
