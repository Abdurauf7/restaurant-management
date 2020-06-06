// React
import React from "react";

// Third Part
import { Button } from "antd";

// Functional Component
const CustomDrawerButton = ({ title, showDrawer }) => {
  return (
    <div className="d-flex flex-row-reverse">
      <Button type="primary" className="m-2" onClick={showDrawer}>
        {title}
      </Button>
    </div>
  );
};

export default CustomDrawerButton;
