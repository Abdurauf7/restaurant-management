// React
import React, { useState, useEffect, Fragment } from "react";

// Third part
import { Layout, Divider } from "antd";

import {
  Order,
  getOrder,
  DelteOrder,
  updateOrder,
} from "../../../../../services/orderServices";

// Custom
import {
  HeaderTitle,
  CustomDrawerButton,
  openNotification,
} from "../../../../custom/";
import * as All from "./";

const { Content } = Layout;
const OrderContent = () => {
  // state
  const [DrawerVisible, setDrawerVisible] = useState();
  const [orderData, setOrderData] = useState([]);
  const [editableData, setEditableData] = useState({});
  const [modalVisible, setModalVisible] = useState();

  const getData = async () => {
    try {
      await getOrder()
        .then((res) => res.data)
        .then((data) => setOrderData(data));
    } catch (err) {
      openNotification("error", "Can't get data", "Check connection");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // showDrawer
  const showDrawer = () => {
    setDrawerVisible(true);
  };
  const onClose = () => {
    setDrawerVisible(false);
    window.location.reload();
  };
  const handleAdd = async (items) => {
    try {
      await Order(items);
    } catch (error) {
      openNotification("error", "Can't order", "Check Connection");
    }
  };

  const handleDelete = async (item) => {
    try {
      await DelteOrder(item);
    } catch (error) {
      openNotification("error", "Can't delete Orders", "Check Connection");
    }
  };
  const handleEdit = (data) => {
    const newdata = { ...data };
    setModalVisible(true);
    setEditableData(newdata);
  };

  const handleUpdate = async (items) => {
    try {
      updateOrder(items);
    } catch (error) {
      openNotification("error", "Check Connection");
    }
  };
  const onCloseModa = () => {
    setModalVisible(false);
    window.location.reload();
  };
  return (
    <Fragment>
      <Content style={{ margin: "2em 16px" }}>
        <div
          style={{ background: "#fff", padding: 24, minHeight: 280 }}
          className="border border-dark rounded"
        >
          <HeaderTitle title={"Order Menu"} legth={orderData.length} />
          <CustomDrawerButton title={"Take order"} showDrawer={showDrawer} />
          <Divider />
          <All.OrderDrawer
            visible={DrawerVisible}
            onClose={onClose}
            handleAdd={handleAdd}
          />
          <All.OrderedList
            data={orderData}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
          <All.EditModal
            visible={modalVisible}
            editableData={editableData}
            onClose={onCloseModa}
            handleUpdate={handleUpdate}
          />
        </div>
      </Content>
    </Fragment>
  );
};

export default OrderContent;
