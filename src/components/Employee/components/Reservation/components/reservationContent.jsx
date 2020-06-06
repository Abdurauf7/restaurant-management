// React
import React, { useState, useEffect } from "react";

// third part
import { Layout, Divider } from "antd";

// custom
import {
  HeaderTitle,
  CustomDrawerButton,
  openNotification
} from "../../../../custom/";
import * as All from "./";

// Services

import {
  getReservation,
  addReservation,
  deleteReservationItem,
  EditReservation
} from "../../../../../services/reservationServices";

const { Content } = Layout;

const ReservationContent = () => {
  const [drawerVisible, setDrawerVisible] = useState();
  const [getReservationData, setReservationData] = useState([]);
  const [modalVisible, setModalVisible] = useState();
  const [editableData, setEditableData] = useState({});

  const fetchReservationData = async () => {
    try {
      await getReservation()
        .then(res => res.data)
        .then(data => setReservationData(data));
    } catch (error) {
      openNotification(
        "error",
        "Can't get Reservation info",
        "Check connection"
      );
    }
  };

  useEffect(() => {
    fetchReservationData();
  }, []);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
    setModalVisible(false);
    window.location.reload();
  };

  const onHandleAdd = async items => {
    try {
      await addReservation(items);
    } catch (error) {
      openNotification("error", "Can't add user", "Check Connection");
    }
  };

  const deleteReservation = async item => {
    try {
      await deleteReservationItem(item);
    } catch (err) {
      openNotification("error", "Can't delte ", "Check Connection");
    }
  };

  const handleEdit = items => {
    const newData = { ...items };
    setEditableData(newData);
    setModalVisible(true);
  };

  const handleUpdate = async items => {
    try {
      EditReservation(items);
    } catch (error) {
      openNotification("error", "Can't change Reservation", "Check connection");
    }
  };
  return (
    <Content style={{ margin: "2em 16px" }}>
      <div
        style={{ background: "#fff", padding: 24, minHeight: 280 }}
        className="border border-dark rounded"
      >
        <HeaderTitle
          title={"Reservation Menu"}
          legth={getReservationData.length}
        />
        <CustomDrawerButton title={"Reserv place"} showDrawer={showDrawer} />
        <Divider />
        <All.ReservationDrawer
          visible={drawerVisible}
          onHandleAdd={onHandleAdd}
          onClose={onClose}
        />
        <All.ReservationList
          data={getReservationData}
          deleteReservation={deleteReservation}
          handleEdit={handleEdit}
        />
        <All.EditModal
          data={editableData}
          visible={modalVisible}
          onClose={onClose}
          handleUpdate={handleUpdate}
        />
      </div>
    </Content>
  );
};

export default ReservationContent;
