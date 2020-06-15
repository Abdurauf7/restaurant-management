// React
import React, { useState, useEffect } from "react";

// Third Part
import {
  Row,
  Col,
  Drawer,
  Form,
  Select,
  Input,
  DatePicker,
  Button,
  InputNumber,
} from "antd";

// Services
import { getTable } from "../../../../../services/tableServices";
import { openNotification } from "../../../../custom";

const ReservationDrawer = ({ visible, onClose, onHandleAdd }) => {
  const [tableNumber, setTableNumber] = useState([]);
  const fetchTableNumber = async () => {
    try {
      await getTable()
        .then((res) => res.data)
        .then((data) => setTableNumber(data));
    } catch (error) {
      openNotification("error", "Cant get tables", "Check connection");
    }
  };

  useEffect(() => {
    fetchTableNumber();
  }, []);

  return (
    <Drawer
      title="Reserv place"
      visible={visible}
      closable={false}
      placement="bottom"
      onClose={onClose}
    >
      <Form hideRequiredMark onFinish={onHandleAdd}>
        <Row>
          <Col xs={24} sm={11} md={11} lg={5}>
            <Form.Item
              label="Table"
              name="table_number"
              rules={[{ required: true, message: "Enter tabel Number" }]}
            >
              <Select placeholder="Select Table Number">
                {tableNumber.map((table) => (
                  <Select.Option key={table.id} value={table.table_number}>
                    {table.table_number}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={{ span: 12, offset: 1 }} md={12} lg={6}>
            <Form.Item
              label="Customer"
              name="customer_name"
              rules={[{ required: true, message: "Enter Customer name" }]}
            >
              <Input placeholder="Enter Customer Name" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={11} lg={{ span: 5, offset: 1 }}>
            <Form.Item
              label="Seats"
              name="seats"
              rules={[{ required: true, message: "Enter Seats Number" }]}
            >
              <InputNumber
                placeholder="Enter Seats"
                min={0}
                className="w-100"
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={{ span: 12, offset: 1 }} md={12} lg={5}>
            <Form.Item
              label="Date"
              name="date"
              rules={[{ required: true, message: "Choose the Date" }]}
            >
              <DatePicker
                showTime
                placeholder="Select the Date"
                className="w-100"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button className="ml-5" htmlType="submit" type="primary">
              add
            </Button>
          </Col>
          <Col>
            <Button className="ml-2" type="danger" onClick={onClose}>
              Close
            </Button>
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
};

export default ReservationDrawer;
