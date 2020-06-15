//React
import React, { Fragment, useState, useEffect } from "react";

// Third part
import {
  Layout,
  InputNumber,
  Divider,
  Row,
  Col,
  Card,
  Typography,
  Input,
} from "antd";
import moment from "moment";
// Tools
import _ from "lodash";

// Services
import { getOrder } from "../../../../services/orderServices";

// custom Components
import { openNotification } from "../../../custom/";

const SearchOrder = () => {
  // state
  const [orderData, setOrderData] = useState([]);
  const [searchData, setSearchData] = useState({});
  // searchMethod
  const SearchOrders = (value) => {
    const table = _.find(orderData, ["table", value]);
    const newData = { ...table };
    setSearchData(newData);
  };
  // fetch dataMethod
  const getData = async () => {
    try {
      await getOrder()
        .then((res) => res.data)
        .then((data) => setOrderData(data));
    } catch (err) {
      openNotification("error", "Can't get data", "Check connection");
    }
  };
  // Hook
  useEffect(() => {
    getData();
  }, []);

  return (
    <Fragment>
      <Layout>
        <Layout.Content
          style={{ padding: "0 50", minHeight: 680, background: "#ffffff" }}
          className="border border-dark rounded"
        >
          <Row>
            <Col span={14}>
              {orderData.map((table) => (
                <div
                  style={{ overflowX: "scroll" }}
                  key={table.id}
                  className="text-center d-flex flex-column align-items-center; mt-3 ml-5 border border-dark rounded w-50"
                >
                  {table.table}
                </div>
              ))}
            </Col>
            <Col span={1}>
              <div
                className="rounded"
                style={{
                  width: "5px",
                  height: "680px",
                  borderRight: "5px solid silver",
                }}
              />
            </Col>

            <Col span={8}>
              <div className="mt-5">
                <InputNumber
                  min={0}
                  placeholder="Input TableNumber"
                  className="rounded border border-warning"
                  style={{ width: "100%" }}
                  onChange={(value) => SearchOrders(value)}
                />
                <div style={{ width: "100%" }}>
                  <Divider className="border border-dark rounded" />
                </div>
                <Card
                  className="text-center border border-info rounded"
                  style={{
                    width: "100%",
                    height: "500px",
                    overflowY: "scroll",
                  }}
                  title={
                    <Typography.Title
                      level={4}
                      className="bg-light border border-secondary rounded"
                    >
                      {`Table : ${searchData.table}`}
                    </Typography.Title>
                  }
                  cover={
                    <Typography.Title
                      className="font-weight-light text-uppercase"
                      style={{ margin: "1em 0" }}
                      level={3}
                    >{`Customer: ${searchData.customer}`}</Typography.Title>
                  }
                >
                  <Divider />
                  <Card.Meta
                    title={
                      <Input.TextArea
                        style={{ height: "10em" }}
                        className="border border-warning rounded font-weight-bold text-uppercase text-dark"
                        value={`${searchData.ordered_items},`}
                      />
                    }
                    description={
                      <div className="mt-5">
                        <Typography.Text>{`Time: ${moment(
                          searchData.time
                        ).format("LT")}`}</Typography.Text>
                      </div>
                    }
                  />
                </Card>
              </div>
            </Col>
          </Row>
        </Layout.Content>
      </Layout>
    </Fragment>
  );
};

export default SearchOrder;
