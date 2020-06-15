// React
import React, { Fragment } from "react";

import { Row, Col, Card, Divider, Typography } from "antd";
import { EditTwoTone, DeleteTwoTone } from "@ant-design/icons";
import moment from "moment";

const { Meta } = Card;

const OrderedList = ({ data, handleDelete, handleEdit }) => {
  return (
    <Fragment>
      <Row>
        {data.map((data) => (
          <Col key={data.id} xs={24} sm={12} md={12} lg={8} xl={6}>
            <Card
              key={data.id}
              className="border border-warning rounded m-2"
              title={
                <p className="bg-light text-dark border border-dark rounded text-center ">{`Table: ${data.table}`}</p>
              }
              cover={
                <div key={data.id} className="container">
                  <Typography.Title
                    level={2}
                    className="text-center text-uppercase font-weight-light mt-4 text-secondary"
                  >
                    {data.customer}
                    <Divider className="mt-4" />
                  </Typography.Title>
                </div>
              }
              actions={[
                <EditTwoTone onClick={() => handleEdit(data)} />,
                <DeleteTwoTone
                  twoToneColor="#ff4500"
                  onClick={() => handleDelete(data.id)}
                />,
              ]}
            >
              <Meta
                title={
                  <Fragment>
                    <ol className="font-weight-bold text-uppercase text-dark overflow-auto">
                      {data.ordered_items.map((or) => (
                        <li key={or}>{or}</li>
                      ))}
                    </ol>
                  </Fragment>
                }
                description={
                  <div>
                    <Divider />
                    <h6>{`Time: ${moment(data.time).format("LT")}`}</h6>
                  </div>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </Fragment>
  );
};

export default OrderedList;
