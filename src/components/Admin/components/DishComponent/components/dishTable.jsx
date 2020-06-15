// React
import React, { Fragment } from "react";

// Third part
import { Table } from "antd";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import moment from "moment";

// Funtional Component
const DishTable = ({ data, deleteItem, editItem }) => {
  return (
    <Table
      bordered
      dataSource={data}
      rowKey={(data) => data.id}
      scroll={{ x: 1300 }}
    >
      <Table.Column
        title="Name"
        dataIndex="name"
        sorter={(a, b) => a.name.length - b.name.length}
      />
      <Table.Column
        title="Price"
        dataIndex="price"
        sorter={(a, b) => a.price - b.price}
      />
      <Table.Column
        title="Date"
        render={(text, record) => moment(record.date).format("ll")}
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

export default DishTable;
