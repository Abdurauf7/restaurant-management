// React
import React, { useState, useEffect, Fragment } from "react";

// Third part
import { Layout, Divider } from "antd";

// Custom common Component
import {
  CustomDrawerButton,
  HeaderTitle,
  openNotification,
} from "../../../../custom/";
import * as All from "./";

// Services
import {
  getTable,
  deleteItems,
  editTables,
  addTables,
} from "../../../../../services/tableServices";

// Functional Component
const TableContent = () => {
  const [table, setTable] = useState([]);
  const [visible, setVisible] = useState();
  const [modalVisible, setModalVisible] = useState();
  const [editTable, setEdibtable] = useState({});

  // getting Data
  const getData = async () => {
    // get tables
    await getTable()
      .then((res) => res.data)
      .then((data) => setTable(data))
      .catch((err) =>
        openNotification(
          "error",
          "Can't get information",
          "Please check connection"
        )
      );
  };

  useEffect(() => {
    getData();
  }, []);

  //   Drawer show method
  const showDrawer = () => {
    setVisible(true);
  };

  // Modal and Drawer Close method
  const onClose = () => {
    setVisible(false);
    window.location.reload();
  };

  // Adding new Items for table
  const onHandleAdd = async (items) => {
    try {
      await addTables(items);
    } catch (error) {
      openNotification("error", "Can't add Items", "Check connection");
    }
  };

  // deleting table items
  const deleteTableItems = async (items) => {
    try {
      await deleteItems(items);
    } catch (error) {
      openNotification("error", "Can't delete Items", "Check connection");
    }
  };
  // showing Modal method
  const editItems = (items) => {
    setModalVisible(true);
    setEdibtable(items);
  };

  // Edit table method
  const handleEdit = async (items) => {
    await editTables(items);
    setModalVisible(false);
  };

  // modal close method
  const onModalClose = () => {
    setModalVisible(false);
    window.location.reload();
  };

  return (
    <Fragment>
      <Layout.Content style={{ margin: "2em 16px" }}>
        <div
          style={{ background: "#fff", padding: 24, minHeight: 280 }}
          className="border border-dark rounded"
        >
          <HeaderTitle title="Table Menu" legth={table.length} />
          <CustomDrawerButton title="Add Table" showDrawer={showDrawer} />
          <All.TableDrawer
            visible={visible}
            onClose={onClose}
            onHandleAdd={onHandleAdd}
          />
          <Divider />
          <All.Table
            data={table}
            deleteTableItems={deleteTableItems}
            editItems={editItems}
          />
          <All.EditModal
            visible={modalVisible}
            data={editTable}
            handleEdit={handleEdit}
            onClose={onModalClose}
          />
        </div>
      </Layout.Content>
    </Fragment>
  );
};

export default TableContent;
