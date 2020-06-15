// React
import React, { useState, Fragment } from "react";

// Third Part
import { Layout, Typography, Row, Col, Divider } from "antd";
import { PrinterOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Pdf from "react-to-pdf";

// Custom initializations for pdf
const ref = React.createRef();
const option = {
  unit: "mm",
  format: "dl",
};

// Functional Component
const PrintBill = ({ location }) => {
  // state
  const [data] = useState(location.state);
  return (
    <Fragment>
      <Layout.Content style={{ margin: "2em 16px" }}>
        <div
          style={{ background: "#fff", padding: 24, minHeight: 280 }}
          className="border border-dark rounded"
        >
          <div
            style={{ width: 400, height: 500 }}
            className="container mt-4"
            ref={ref}
          >
            <div className="bg-light border border-dark rounded p-2 mt-3">
              <Row>
                <Col span={10}>
                  <div className="mt-2">
                    <Typography.Title>{`Table: ${data.table}`}</Typography.Title>
                  </div>
                </Col>
                <Col span={2}>
                  <Divider
                    type="vertical"
                    className="bg-dark"
                    style={{ height: "100px" }}
                  />
                </Col>
                <Col span={10}>
                  <div className="mt-2">
                    <Typography.Title
                      level={3}
                    >{`Customer: ${data.customer}`}</Typography.Title>
                  </div>
                </Col>
              </Row>
            </div>
            <Divider type="horizontal" />
            <ul className="bg-light p-3 border border-dark rounded">
              <Row>
                <Col span={10}>
                  {data.orders.map((order) => (
                    <li key={order} style={{ listStyleType: "none" }}>
                      {order}
                    </li>
                  ))}
                </Col>

                <Col span={10}>
                  {data.price.map((price) => (
                    <li key={price} style={{ listStyleType: "none" }}>
                      ................................{price}¥
                    </li>
                  ))}
                </Col>
              </Row>
            </ul>
            <Divider />
            <div className="text-left">
              <ul className="border rounded bg-light">
                <li style={{ listStyle: "none" }}>{`More Info: ${
                  data.quantity !== null ? data.quantity : "none"
                }`}</li>
              </ul>
            </div>
            <div className="text-left" style={{ marginTop: "2em" }}>
              <Typography.Text className="border rounded bg-light p-3 ">
                {`Price:_________`}
              </Typography.Text>
            </div>
          </div>
          <div className="text-center mt-5">
            <Pdf
              targetRef={ref}
              filename={`Table-${data.table}.pdf`}
              options={option}
              x={0.6}
              y={0.5}
            >
              {({ toPdf }) => (
                <PrinterOutlined style={{ fontSize: "30px" }} onClick={toPdf}>
                  Print
                </PrinterOutlined>
              )}
            </Pdf>
            <Link className="btn btn-danger m-5" to="/info">
              Back
            </Link>
          </div>
        </div>
      </Layout.Content>
    </Fragment>
  );
};
export default PrintBill;
