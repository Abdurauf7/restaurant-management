// React
import React, { Fragment } from "react";

// Third part
import { Layout, Menu } from "antd";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Link } from "react-router-dom";

// Custom Components
import {
  Order,
  Reservation,
  Information,
  SearchOrder,
  SearchReservation,
} from "./components/";
import PrintBill from "./components/Information/components/printBill";
import Profile from "./components/Profile/profile";

// Configurations
import { name, user } from "../../config.json";
import { Footer } from "../custom/";

// Functional Component
const EmployeeBoard = ({ history }) => {
  // Logout Method
  const Logout = () => {
    localStorage.removeItem(name);
    localStorage.removeItem(user);
    history.replace("/");
  };
  return (
    <Fragment>
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Layout.Header
            style={{
              position: "fixed",
              zIndex: 1,
              width: "100%",
              background: "#0000000",
            }}
          >
            <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
              <Menu.Item key="1" disabled>
                <span className="text-warning border border-warning rounded p-3">
                  {localStorage.getItem(name)}
                </span>
              </Menu.Item>

              <Menu.SubMenu
                key="sub2"
                title={<span className="text-warning">Order</span>}
              >
                <Menu.Item key="2">
                  <span>Take Order</span>
                  <Link to="/order" />
                </Menu.Item>

                <Menu.Item key="3">
                  <span> Search Order</span>
                  <Link to="/searchOrder" />
                </Menu.Item>
              </Menu.SubMenu>

              <Menu.SubMenu
                key="sub3"
                title={<span className="text-warning">Reservation</span>}
              >
                <Menu.Item key="4">
                  <span> Take Reservation</span>
                  <Link to="/reservation" />
                </Menu.Item>
                <Menu.Item key="5">
                  <span> Search Reservation</span>
                  <Link to="/SearchReservation" />
                </Menu.Item>
              </Menu.SubMenu>

              <Menu.Item key="6">
                <span className="text-warning"> Info</span>
                <Link to="/info" />
              </Menu.Item>
              <Menu.Item key="7">
                <span className="text-warning">Cabinet</span>
                <Link to="/profile" />
              </Menu.Item>

              <Menu.Item key="8" onClick={() => Logout({})}>
                Logout
              </Menu.Item>
            </Menu>
          </Layout.Header>

          <Layout.Content style={{ padding: "0 50px", marginTop: 94 }}>
            <Switch>
              <Route path="/order" component={Order} />
              <Route path="/reservation" component={Reservation} />
              <Route path="/info" component={Information} />
              <Route path="/searchOrder" component={SearchOrder} />
              <Route path="/searchReservation" component={SearchReservation} />
              <Route path="/print" component={PrintBill} />
              <Route path="/profile" component={Profile} />
              <Redirect from="/" to="/order" />
            </Switch>
          </Layout.Content>
          <Footer />
        </Layout>
      </Router>
    </Fragment>
  );
};
export default EmployeeBoard;
