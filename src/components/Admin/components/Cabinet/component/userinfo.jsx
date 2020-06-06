import React from "react";
import { Layout } from "antd";

const UserInfo = ({ data }) => {
  return (
    <Layout.Content style={{ margin: "2em 16px" }}>
      <div
        style={{ background: "#fff", padding: 24, minHeight: 280 }}
        className="border border-dark rounded"
      >
        <div>
          <h2>
            {`Name: ${data.first_name}
                ${data.last_name}`}
          </h2>
          <p className="font-weight-light">{`Age: ${data.age}`}</p>
          <p className="font-weight-light">{`Position: ${data.work_position}`}</p>
          <p className="font-weight-light">{`Address: ${data.address}`}</p>
          <p className="font-weight-light">{`Phone: ${data.phone_number}`}</p>
        </div>
      </div>
    </Layout.Content>
  );
};

export default UserInfo;
