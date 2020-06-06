// React
import React, { Fragment, useEffect, useState } from "react";

// Third Part
import { Layout, Divider } from "antd";

// Custom Common Components
import {
  HeaderTitle,
  openNotification,
  CustomDrawerButton,
} from "../../../../custom/";
import * as All from "./";

// Services
import {
  getDishes,
  addDishes,
  deleteDishes,
  updateDishes,
} from "../../../../../services/dishServices";

const DishContent = () => {
  // initializing states
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState();
  const [editData, setEditData] = useState({});
  const [drawerVisible, setDrawerVisible] = useState();

  //   hook cycles
  const fetchDishData = async () => {
    await getDishes()
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
    fetchDishData();
  }, []);

  // Show Drawer method
  const showDrawer = () => {
    setDrawerVisible(true);
  };

  //  Add Dish Method
  const onhandleAdd = async (items) => {
    await addDishes(items);
  };

  //Drawer and Modal close method
  const onClose = () => {
    setDrawerVisible(false);
    window.location.reload();
  };

  //   Modal handle
  const onCancel = () => {
    setVisible(false);
    window.location.reload();
  };

  //   Modifying dish item inside table
  const onhandleUpdate = async (item) => {
    try {
      await updateDishes(item);
    } catch (error) {
      openNotification("error", "Can't update menu", "check connection");
    }
  };
  // Deleting Dish items
  const deleteItem = async (item) => {
    const orginaldata = data;
    try {
      await deleteDishes(item);
    } catch (error) {
      setData(orginaldata);
    }
  };

  // Editing Items
  const editItem = async (item) => {
    const newData = { ...item };
    setEditData(newData);
    setVisible(true);
  };

  return (
    <Fragment>
      <Layout.Content style={{ margin: "2em 16px" }}>
        <div
          className="border border-dark rounded"
          style={{ background: "#fff", padding: 24, minHeight: 280 }}
        >
          <HeaderTitle title={"Dish Menu"} legth={data.length} />
          <CustomDrawerButton title="Add Dish" showDrawer={showDrawer} />
          <Divider />
          <All.DishDarawer
            title="Add Dish"
            visible={drawerVisible}
            onClose={onClose}
            onhandleAdd={onhandleAdd}
          />
          <All.DishTable
            data={data}
            deleteItem={deleteItem}
            editItem={editItem}
          />
          <All.DishModal
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

export default DishContent;
