// React
import React from "react";

// Third Part
import {
  Modal,
  Row,
  Col,
  Form,
  Input,
  InputNumber,
  DatePicker,
  Typography,
} from "antd";

// Custom common component
import { openNotification } from "../../../../custom/";

// Functional Component
const DishModal = ({ visible, data, onhandleUpdate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      closable={false}
      visible={visible}
      title="Edit Dish"
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
            openNotification("error", "Error While Modifying");
          });
      }}
    >
      <Form
        hideRequiredMark
        form={form}
        layout="vertical"
        initialValues={{
          id: data.id,
          dish: data.name,
          price: data.price,
        }}
      >
        <Row>
          <Col span={15}>
            <Form.Item
              name="dish"
              label="Dish"
              rules={[
                {
                  required: true,
                  message: "Please input the name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={5} offset={2}>
            <Form.Item
              name="price"
              label="Price"
              rules={[
                {
                  required: true,
                  message: "Please input the price!",
                },
              ]}
            >
              <InputNumber min={0} step={0.1} />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          name="date"
          label="Date"
          rules={[
            {
              required: true,
              message: "Please input the date!",
            },
          ]}
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

export default DishModal;
