import React, { Fragment } from "react";
import { Card, Row, Col, Divider, Typography } from "antd";
import { EditTwoTone, DeleteTwoTone } from "@ant-design/icons";
import moment from "moment";
const ReservationList = ({ data, deleteReservation, handleEdit }) => {
  return (
    <Fragment>
      <Row>
        {data.map((reserv) => (
          <Col key={reserv.id} xs={24} sm={12} md={12} lg={8} xl={6}>
            <Card
              key={reserv.id}
              style={{ overflow: "scroll" }}
              className="border border-warning rounded m-2"
              title={
                <h4 className="text-center bg-light text-dark border border-dark rounded">{`Table: ${reserv.table_number}`}</h4>
              }
              cover={
                <Typography.Title
                  level={2}
                  className="text-center text-uppercase font-weight-light mt-4 text-secondary"
                >
                  {reserv.customer_name}
                  <Divider className="mt-4" />
                </Typography.Title>
              }
              actions={[
                <EditTwoTone key="edit" onClick={() => handleEdit(reserv)} />,
                <DeleteTwoTone
                  twoToneColor="#ff4500"
                  onClick={() => deleteReservation(reserv.id)}
                />,
              ]}
            >
              <Card.Meta
                title={<h4 className="text-dark">{`Seats:${reserv.seats}`}</h4>}
                description={
                  <p className="text-secondary">{`Date: ${moment(
                    reserv.date
                  ).format("llll")}`}</p>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </Fragment>
  );
};

export default ReservationList;
