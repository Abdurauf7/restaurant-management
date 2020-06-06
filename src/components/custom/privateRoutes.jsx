// react
import React from "react";

// Third Part
import { Redirect, Route } from "react-router-dom";

// Services
import { getAdmin, getUser } from "../../services/auth";

//PrivateAdminRoute Method
const PrivateAdminRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (!getAdmin()) return <Redirect to="/signin" />;
      return <Component {...props} />;
    }}
  />
);

// Functional PricateUserRoute Method
const PrivateUserRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (!getUser()) return <Redirect to="/signin" />;
      return <Component {...props} />;
    }}
  />
);
export { PrivateAdminRoute, PrivateUserRoute };
