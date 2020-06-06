// React
import React from "react";

// Third part
import { Layout, Menu } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";

// Icons
import { Breakfast, PersonalIcon, TableInfo } from "../../assets/";
// custom components
import { Dish, Personal, Table, Charts } from "./components/";
import Cabinet from "../Admin/components/Cabinet/profile";
import { Footer } from "../custom/";
// Configuration
import { admin, name } from "../../config.json";

// Functional Component
const AdminBoard = ({ history }) => {
  const Logout = () => {
    localStorage.removeItem(name);
    localStorage.removeItem(admin);
    history.replace("/");
  };
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Layout.Header
          className="header"
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
            background: "#ffffff",
          }}
        >
          {/* Menu  */}
          <Menu
            mode="horizontal"
            style={{ height: "100%", textAlign: "center" }}
          >
            <Menu.Item>
              <div className="text-uppercase font-weight-bold">
                {localStorage.getItem(name)}
              </div>
              <Link to="/info" />
            </Menu.Item>
            <Menu.Item key="1">
              <Breakfast />
              <span className=" menu-title ml-2">Dish Information</span>
              <Link to="/dish" />
            </Menu.Item>
            <Menu.Item key="2">
              <PersonalIcon />
              <span className="menu-title ml-2">Personal</span>
              <Link to="/personal" />
            </Menu.Item>
            <Menu.Item key="3">
              <TableInfo />
              <span className=" menu-title ml-2">Table</span>
              <Link to="/table" />
            </Menu.Item>
            <Menu.Item key="4">
              <UserOutlined style={{ fontSize: "20px" }} />
              <span className=" menu-title ml-2">Cabinet</span>
              <Link to="/cabinet" />
            </Menu.Item>
            <Menu.Item key="5" onClick={() => Logout()}>
              <LogoutOutlined style={{ fontSize: "20px" }} />
              <span className="menu-title ml-2">Logout</span>
            </Menu.Item>
          </Menu>
        </Layout.Header>

        <Layout.Content
          className="site-layout-background"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            {/* AdminBoard Routes */}
            <Switch>
              <Route path="/info" component={Charts} />
              <Route path="/dish" component={Dish} />
              <Route path="/personal" component={Personal} />
              <Route path="/table" component={Table} />
              <Route path="/cabinet" component={Cabinet} />
              <Redirect from="/" to="/info" />
            </Switch>
          </div>
        </Layout.Content>
        <Footer />
      </Layout>
    </Router>
  );
};

export default AdminBoard;
