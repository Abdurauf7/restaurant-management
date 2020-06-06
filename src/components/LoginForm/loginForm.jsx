// React
import React, { Fragment } from "react";

// Third pard
import { Row, Col } from "antd";

// custom
import Image from "./image";
import Form from "./form";
import { openNotification } from "../custom/";

// services
import { login } from "../../services/auth";

const SignIn = ({ history }) => {
  const onlogin = async (values) => {
    try {
      await login(values, history);
    } catch (error) {
      console.log("Error");
    }
  };

  const onFinishFailed = (errorInfo) => {
    return openNotification(
      "error",
      "Email or Password is InCorrect",
      "Please retype Email or Password "
    );
  };

  return (
    <Fragment>
      <Row>
        <Col xs={12}>
          <Image />
        </Col>
        <Col xs={{ span: 12 }} xl={{ span: 10 }}>
          <Form onlogin={onlogin} onhandleFail={onFinishFailed} />
        </Col>
      </Row>
    </Fragment>
  );
};

export default SignIn;
