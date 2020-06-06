// React
import React, { Fragment } from "react";

// Third part
import { Route, Switch, Redirect } from "react-router-dom";

// Custom Components
import {
  SignIn,
  Admin,
  Employee,
  NotFound,
  Register,
  RememberPassword,
} from "./components/";

// Cistom Private Routes
import {
  PrivateAdminRoute,
  PrivateUserRoute,
} from "./components/custom/privateRoutes";

// Functional component
const App = () => {
  return (
    <Fragment>
      <Switch>
        <PrivateAdminRoute path="/admin" component={Admin} />
        <PrivateUserRoute path="/user" component={Employee} />
        <Route path="/register" component={Register} />
        <Route path="/rememberPassword" component={RememberPassword} />
        <Route path="/signin" component={SignIn} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to="/signin" />
        <Redirect to="/not-found" />
      </Switch>
    </Fragment>
  );
};
export default App;
