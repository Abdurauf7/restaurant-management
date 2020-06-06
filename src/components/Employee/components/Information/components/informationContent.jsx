// React
import React, { useEffect, useState } from "react";

// Third Part
import { Layout } from "antd";

// Custom Components
import HeaderTitle from "../../../../custom/title";
import InformationList from "./informationList";
import { openNotification } from "../../../../custom";

// Service
import { getOrder } from "../../../../../services/orderServices";

// Functional Component
const InformationContent = () => {
  // state
  const [ordersData, setOrdersData] = useState([]);

  const getData = async () => {
    try {
      await getOrder()
        .then((res) => res.data)
        .then((data) => setOrdersData(data));
    } catch (error) {
      openNotification("error", "Can't get Orders", "Check Connectin");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout.Content style={{ margin: "2em 16px" }}>
      <div
        style={{ background: "#fff", padding: 24, minHeight: 280 }}
        className="border border-dark rounded"
      >
        <HeaderTitle legth={ordersData.length} title={"Orders Information"} />
        <InformationList data={ordersData} />
      </div>
    </Layout.Content>
  );
};

export default InformationContent;
