import React, { Fragment } from "react";
import { Typography, Badge } from "antd";
const { Text } = Typography;

const HeaderTitle = ({ title, legth }) => {
  return (
    <Fragment>
      <div className="text-center mb-3">
        <Badge count={legth} overflowCount={99}>
          <Text strong style={{ fontSize: "50px" }}>
            {title}
          </Text>
        </Badge>
      </div>
    </Fragment>
  );
};

export default HeaderTitle;
