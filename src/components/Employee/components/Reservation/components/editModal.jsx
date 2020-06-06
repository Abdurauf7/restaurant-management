import React, { useEffect, useState } from "react";

import {
  Modal,
  Form,
  Select,
  Input,
  DatePicker,
  InputNumber,
  Typography,
} from "antd";

import { getTable } from "../../../../../services/tableServices";
import { openNotification } from "../../../../custom";

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 16,
  },
};

const EditModal = ({ data, visible, onClose, handleUpdate }) => {
  const [form] = Form.useForm();
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
    <Modal
      closable={false}
      visible={visible}
      title="Edit Reservation"
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
          id: data.id,
          table_number: data.table_number,
          customer_name: data.customer_name,
          seats: data.seats,
        }}
      >
        <Form.Item
          label="Table Number"
          name="table_number"
          rules={[{ required: true, message: "Enter Table Number" }]}
        >
          <Select placeholder="select table number">
            {tableNumber.map((table) => (
              <Select.Option key={table.id} value={table.table_number}>
                {table.table_number}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Cutomer Name"
          name="customer_name"
          rules={[{ required: true, message: "Enter Customer Name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Enter the seats"
          name="seats"
          rules={[{ required: true, message: "Enter seats number" }]}
        >
          <InputNumber min={0} className="w-100" />
        </Form.Item>
        <Form.Item
          label="Date"
          name="date"
          rules={[{ required: true, message: "Enter date" }]}
        >
          <DatePicker.RangePicker showTime />
        </Form.Item>
        <Form.Item name="id">
          <Typography />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditModal;
