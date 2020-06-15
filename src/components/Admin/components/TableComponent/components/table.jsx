// React
import React, { Fragment } from "react";

// Third Part
import { Table } from "antd";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import moment from "moment";
// Functional Component
const TableT = ({ data, deleteTableItems, editItems }) => {
  return (
    <Table
      dataSource={data}
      rowKey={(data) => data.id}
      bordered
      size="middle"
      scroll={{ x: 1300 }}
    >
      <Table.Column
        title="TableNumber"
        dataIndex="table_number"
        defaultSortOrder="ascend"
        sorter={(a, b) => a.table_number - b.table_number}
      />
      <Table.Column
        title="Seats"
        dataIndex="seats"
        defaultSortOrder="ascend"
        sorter={(a, b) => a.seats - b.seats}
      />
      <Table.Column
        title="Date"
        render={(text, record) => moment(record.date).format("ll")}
      />
      <Table.Column
        fixed="right"
        title="Actions"
        width={80}
        render={(record) => (
          <Fragment>
            <DeleteFilled
              className="btn btn-danger"
              onClick={() => deleteTableItems(record.id)}
            />

            <EditFilled
              className="btn btn-primary mt-2"
              onClick={() => editItems(record)}
            />
          </Fragment>
        )}
      />
    </Table>
  );
};

export default TableT;
