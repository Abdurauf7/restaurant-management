// React
import React, { useState, useEffect, Fragment } from "react";

// Third Part
import { VictoryPie } from "victory";
import { Badge, Avatar, Layout } from "antd";
import { Link } from "react-router-dom";

// Services
import { getUser } from "../../../../services/userServices";
import { getDishes } from "../../../../services/dishServices";
import { getTable } from "../../../../services/tableServices";

// Functional Component
const Charts = () => {
  // States
  const [user, setUser] = useState([]);
  const [dish, setDish] = useState([]);
  const [table, setTable] = useState([]);

  // Fetching Data
  const fetchData = async () => {
    await getUser()
      .then((res) => res.data)
      .then((data) => setUser(data));
    await getDishes()
      .then((res) => res.data)
      .then((data) => setDish(data));
    await getTable()
      .then((res) => res.data)
      .then((data) => setTable(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Fragment>
      <Layout.Content style={{ margin: "2em 16px" }}>
        <div
          className="border border-dark rounded"
          style={{ background: "#fff", padding: 24, minHeight: 280 }}
        >
          <div className="container d-flex">
            <VictoryPie //PieChart
              height={250}
              colorScale={["tomato", "orange", "#f6b965"]}
              animate={{
                duration: 2000,
              }}
              data={[
                { x: "User", y: user.length },
                { x: "Dish", y: dish.length },
                { x: "Table", y: table.length },
              ]}
            />
            <div className="d-flex flex-column">
              <Link to="/personal">
                <Badge count={user.length}>
                  <Avatar
                    shape="square"
                    style={
                      user.length === 0
                        ? { color: "#cc444b" }
                        : { background: "#ee6d52" }
                    }
                    size="large"
                  >
                    User
                  </Avatar>
                </Badge>
              </Link>
              <Link to="/dish">
                <Badge className="mt-5" count={dish.length}>
                  <Avatar
                    shape="square"
                    style={
                      dish.length === 0
                        ? { color: "#cc444b" }
                        : { background: "#f4a83c" }
                    }
                    size="large"
                  >
                    Dish
                  </Avatar>
                </Badge>
              </Link>
              <Link to="/table">
                <Badge className="mt-5" count={table.length}>
                  <Avatar
                    shape="square"
                    style={
                      dish.length === 0
                        ? { color: "#cc444b" }
                        : { background: "#f6b965" }
                    }
                    size="large"
                  >
                    Table
                  </Avatar>
                </Badge>
              </Link>
            </div>
          </div>
        </div>
      </Layout.Content>
    </Fragment>
  );
};

export default Charts;
