// React
import React, { Fragment } from "react";

// Third Part
import { Card, Row, Col, Divider, Typography, Input } from "antd";
import { PrinterOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

// Functional
const InformationList = ({ data }) => {
  return (
    <Fragment>
      <Row>
        {data.map((info) => (
          <Col key={info.id} xs={24} sm={12} md={12} lg={8} xl={6}>
            <Card
              key={info.id}
              className="m-2 border border-warning rounded"
              title={
                <p className="text-center bg-light border border-info rounded">{`Table:${info.table}`}</p>
              }
              cover={
                <Typography.Title className="text-secondary text-center mt-4 font-weight-light text-uppercase">
                  {info.customer}
                </Typography.Title>
              }
              actions={[
                <Link
                  to={{
                    pathname: "/print",
                    state: {
                      table: info.table,
                      customer: info.customer,
                      orders: info.ordered_items,
                      quantity: info.quantity,
                      price: info.price,
                    },
                  }}
                >
                  <PrinterOutlined style={{ fontSize: "25px" }} />
                </Link>,
              ]}
            >
              <Divider />

              <Card.Meta
                title={
                  <Fragment>
                    <ul className="bg-light p-3 border border-dark rounded">
                      <Row>
                        <Col span={10}>
                          <Typography.Paragraph ellipsis className="mr-1">
                            {info.ordered_items.map((order) => (
                              <li key={order} style={{ listStyleType: "none" }}>
                                {order}
                              </li>
                            ))}
                          </Typography.Paragraph>
                        </Col>

                        <Col span={10}>
                          {info.price.map((price) => (
                            <li
                              key={price}
                              style={{
                                listStyleType: "none",
                                marginLeft: "1.5em",
                              }}
                            >
                              ....................{price}¥
                            </li>
                          ))}
                        </Col>
                      </Row>
                    </ul>

                    <Input.TextArea
                      className="font-weight-bold border border-dark rounded"
                      value={`More Info: ${info.quantity}`}
                    />
                  </Fragment>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </Fragment>
  );
};

export default InformationList;
