// React
import React from "react";

// Third Part
import { Modal, Form, InputNumber, DatePicker, Typography } from "antd";
import { openNotification } from "../../../../custom";

// Form customization
const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 24 },
};

// Functional Component
const EditModal = ({ visible, data, handleEdit, onClose }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      closable={false}
      title="Edit Table"
      okText="Edit"
      cancelText="Cancel"
      onCancel={onClose}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            handleEdit(values);
          })
          .catch((info) => {
            openNotification("error", "Error while Modifying");
          });
      }}
    >
      <Form
        {...layout}
        form={form}
        onFinish={handleEdit}
        hideRequiredMark
        initialValues={{
          id: data.id,
          table_number: data.table_number,
          seats: data.seats,
        }}
      >
        <Form.Item
          name="table_number"
          label="Tabel Number"
          rules={[{ required: true, message: "Enter table number" }]}
        >
          <InputNumber min={0} className="w-100" />
        </Form.Item>
        <Form.Item
          label="Seats"
          name="seats"
          rules={[{ required: true, message: "Enter seats" }]}
        >
          <InputNumber min={0} className="w-100" />
        </Form.Item>
        <Form.Item
          label="Date"
          name="date"
          rules={[{ required: true, message: "Enter the date" }]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item name="id">
          <Typography.Text />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditModal;
