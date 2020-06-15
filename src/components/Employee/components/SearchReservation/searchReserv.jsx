// React
import React, { useState, useEffect } from "react";
import moment from "moment";
// Third Part
import { Layout, Input, Divider, Row, Col, Card, Typography } from "antd";
import _ from "lodash";

// custom
import { openNotification, HeaderTitle } from "../../../custom";

// services
import { getReservation } from "../../../../services/reservationServices";

const SearchReservation = () => {
  // state
  const [reserv, searchReserv] = useState([]);
  const [findedData, setfindedData] = useState([]);

  // get Table
  const fetchReservation = async () => {
    try {
      await getReservation()
        .then((res) => res.data)
        .then((data) => searchReserv(data));
    } catch (error) {
      openNotification("error", "Can't get data", "Check connection");
    }
  };

  // hook
  useEffect(() => {
    fetchReservation();
  }, []);

  // searchMethod
  const onSearchItem = (value) => {
    const name = value.currentTarget.value;
    const customer = _.filter(reserv, ["customer_name", name]);
    const newData = [...customer];
    setfindedData(newData);
  };

  return (
    <Layout.Content
      style={{ margin: "2em 16px" }}
      className="border border-secondary rounded"
    >
      <div style={{ background: "#fff", padding: 24, minHeight: 580 }}>
        <HeaderTitle title={"Search Reservation info"} />
        <Input
          onChange={(value) => onSearchItem(value)}
          placeholder="Enter Customer Name"
          className="w-100 mt-4"
        />
        <div className="w-100">
          <Divider />
        </div>
        <Row>
          {findedData.map((f) => (
            <Col key={f.id} span={8}>
              <Card
                key={f.id}
                className="border border-warning rounded m-2"
                title={
                  <Typography.Title
                    className=" text-center bg-light border border-dark rounded"
                    level={4}
                  >{`Table: ${f.table_number}`}</Typography.Title>
                }
                cover={
                  <Typography.Title
                    level={2}
                    className=" text-center text-dark font-weight-lighter text-uppercase mt-5"
                  >
                    {f.customer_name}
                  </Typography.Title>
                }
              >
                <Divider />
                <Card.Meta
                  title={
                    <Typography.Title
                      level={4}
                      className="border border-info rounded bg-light"
                    >{`Seats: ${f.seats}`}</Typography.Title>
                  }
                  description={
                    <Typography.Text level={4}>{`Date:${moment(f.date).format(
                      "llll"
                    )}`}</Typography.Text>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Layout.Content>
  );
};

export default SearchReservation;
