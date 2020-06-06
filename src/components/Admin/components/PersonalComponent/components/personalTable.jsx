// React
import React, { Fragment } from "react";

// Third part
import { Table } from "antd";
import { DeleteFilled, EditFilled } from "@ant-design/icons";

// Functional Component
const PersonalTable = ({ data, deleteItem, editItem }) => {
  return (
    <Table
      bordered
      dataSource={data}
      size="middle"
      scroll={{ x: 1300 }}
      rowKey={(data) => data.id}
    >
      <Table.Column
        title="First name"
        dataIndex="first_name"
        sorter={(a, b) => a.first_name.length - b.first_name.length}
      />
      <Table.Column
        title="Last name"
        dataIndex="last_name"
        sorter={(a, b) => a.first_name.length - b.first_name.length}
      />
      <Table.Column
        title="Age"
        dataIndex="age"
        sorter={(a, b) => a.age - b.age}
      />
      <Table.Column
        title="Gender"
        dataIndex="gender"
        filters={[
          { text: "Male", value: "Male" },
          { text: "Female", value: "Female" },
        ]}
        filterMultiple={false}
        onFilter={(value, record) => record.gender.indexOf(value) === 0}
      />
      <Table.Column
        title="Address"
        dataIndex="address"
        filters={[
          {
            text: "Huangpu",
            value: "Huangpu",
          },
          {
            text: "Changning",
            value: "Changning",
          },
          {
            text: "Jing'an",
            value: "Jing'an",
          },
          {
            text: "Putuo",
            value: "Putuo",
          },
          {
            text: "Hongkou",
            value: "Hongkou",
          },
          {
            text: "Yangpu",
            value: "Yangpu",
          },
          {
            text: "Minhang",
            value: "Minhang",
          },
          {
            text: "Baoshan",
            value: "Baoshan",
          },
          {
            text: "Jiading",
            value: "Jiading",
          },
          {
            text: "Pudong",
            value: "Pudong",
          },

          {
            text: "Jinshan",
            value: "Jinshan",
          },

          {
            text: "Songjiang",
            value: "Songjiang",
          },

          {
            text: "Qingpu",
            value: "Qingpu",
          },

          {
            text: "Fengxian",
            value: "Fengxian",
          },

          {
            text: "Chongming",
            value: "Chongming",
          },
        ]}
        onFilter={(value, record) => record.address.indexOf(value) === 0}
      />
      <Table.Column
        title="Phone"
        dataIndex="phone_number"
        sorter={(a, b) => a.phone_number.length - b.phone_number.length}
      />
      <Table.Column
        title="Position"
        dataIndex="work_position"
        filters={[
          {
            text: "Chef",
            value: "Chef",
          },
          {
            text: "Waiter",
            value: "Waiter",
          },
          {
            text: "Manager",
            value: "Manager",
          },
          {
            text: "Cleaner",
            value: "Cleaner",
          },
        ]}
        onFilter={(value, record) => record.work_position.indexOf(value) === 0}
      />
      <Table.Column
        title="Salary"
        dataIndex="salary"
        sorter={(a, b) => a.salary.length - b.salary.length}
      />
      <Table.Column
        title="Date"
        dataIndex="date"
        sorter={(a, b) => a.date.length - b.date.length}
      />

      <Table.Column
        width={80}
        fixed="right"
        key={(data) => data.id}
        title="Action"
        render={(text, record) => (
          <Fragment>
            <DeleteFilled
              className="btn btn-danger"
              onClick={() => deleteItem(record.id)}
            />

            <EditFilled
              className="btn btn-primary mt-2"
              onClick={() => editItem(record)}
            />
          </Fragment>
        )}
      />
    </Table>
  );
};

export default PersonalTable;
