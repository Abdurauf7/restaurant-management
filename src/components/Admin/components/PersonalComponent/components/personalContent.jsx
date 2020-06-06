// React
import React, { Fragment, useEffect, useState } from "react";

// Third Part
import { Layout, Divider } from "antd";

// Custom common Component
import {
  HeaderTitle,
  openNotification,
  CustomDrawerButton,
} from "../../../../custom";
import * as All from "./";

// Services
import {
  getUser,
  editUser,
  addUser,
  deleteUser,
} from "../../../../../services/userServices";

const PersonalContent = () => {
  // initializing states
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState();
  const [editData, setEditData] = useState({});
  const [drawerVisible, setDrawerVisible] = useState();

  //   method for getting Data
  const fetchPersonData = async () => {
    await getUser()
      .then((res) => res.data)
      .then((res) => setData(res))
      .catch((err) =>
        openNotification(
          "error",
          "Cannot get informations",
          "Please check connection"
        )
      );
  };

  useEffect(() => {
    fetchPersonData();
  }, []);

  // custom Drawer
  const showDrawer = () => {
    setDrawerVisible(true);
  };

  // Personal Add method
  const onhandleAdd = async (items) => {
    try {
      await addUser(items);
    } catch (error) {
      openNotification("error", "Cannot add User", "Check Connection");
    }
  };

  // Drawer modeal Close Method
  const onClose = () => {
    setDrawerVisible(false);
    window.location.reload();
  };

  //   Modal Cancel method
  const onCancel = () => {
    setVisible(false);
    window.location.reload();
  };

  // Modifying employee items
  const onhandleUpdate = async (items) => {
    try {
      await editUser(items);
    } catch (error) {
      openNotification("error", "Can't Edit User", "Check Connection");
    }
  };

  // Deleting Employees
  const deleteItem = async (item) => {
    try {
      await deleteUser(item);
    } catch (error) {
      openNotification("error", " Can't Delete User", "Check Connection");
    }
  };
  // getting items for modal
  const editItem = async (item) => {
    const newData = { ...item };
    setEditData(newData);
    setVisible(true);
  };
  return (
    <Fragment>
      <Layout.Content style={{ margin: "2em 16px" }}>
        <div
          style={{ background: "#fff", padding: 24, minHeight: 280 }}
          className="border border-dark rounded"
        >
          <HeaderTitle title={"Personal Menu"} legth={data.length} />
          <CustomDrawerButton title="Add Personal" showDrawer={showDrawer} />
          <Divider />
          <All.PersonDarawer
            title="Add Person"
            visible={drawerVisible}
            onClose={onClose}
            onhandleAdd={onhandleAdd}
          />

          <All.PersonalTable
            data={data}
            deleteItem={deleteItem}
            editItem={editItem}
          />
          <All.PersonModal
            visible={visible}
            onCancel={onCancel}
            data={editData}
            onhandleUpdate={onhandleUpdate}
          />
        </div>
      </Layout.Content>
    </Fragment>
  );
};

export default PersonalContent;
