// React
import React, { useEffect, useState } from "react";

// Third part
import { Modal, Form, Select, Input, TimePicker, Typography } from "antd";

// Services
import { getTable } from "../../../../../services/tableServices";
import { getDishes } from "../../../../../services/dishServices";

// Custom Common Component
import { openNotification } from "../../../../custom";

// Form customization
const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 16,
  },
};

// Functional Component
const EditModal = ({ editableData, visible, handleUpdate, onClose }) => {
  const [form] = Form.useForm();
  const [tableNumbers, setTableNumbers] = useState([]);
  const [orders, setOrders] = useState([]);

  const getDatas = async () => {
    try {
      await getTable()
        .then((res) => res.data)
        .then((data) => setTableNumbers(data));
      await getDishes()
        .then((res) => res.data)
        .then((data) => setOrders(data));
    } catch (error) {
      openNotification("error", "Cant get tables", "Check connection");
    }
  };

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <Modal
      closable={false}
      visible={visible}
      title="Edit Orders"
      okText="Edit"
      cancelText="Cancel"
      onCancel={onClose}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            handleUpdate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        {...layout}
        hideRequiredMark
        onFinish={handleUpdate}
        form={form}
        initialValues={{
          id: editableData.id,
          table_number: editableData.table,
          customer_name: editableData.customer,
          dish: editableData.ordered_items,
          price: editableData.price,
          quantity: editableData.quantity,
        }}
      >
        <Form.Item
          label="Table Number"
          name="table_number"
          rules={[{ required: true, message: "Enter Table Number" }]}
        >
          <Select placeholder="select table number">
            {tableNumbers.map((table) => (
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
        <Form.Item label="Order" name="dish">
          <Select placeholder="Please select" mode="multiple">
            {orders.map((or) => (
              <Select.Option key={or.id} value={or.name}>
                {or.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Price" name="price">
          <Select placeholder="Please select" mode="multiple">
            {orders.map((or) => (
              <Select.Option key={or.id} value={or.price}>
                {or.name}-{or.price}¥
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="More Info" name="quantity">
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Time"
          name="time"
          placeholder="select time"
          rules={[{ required: true, message: "Enter ordered time" }]}
        >
          <TimePicker />
        </Form.Item>
        <Form.Item name="id">
          <Typography />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditModal;
