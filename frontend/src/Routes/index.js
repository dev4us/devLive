import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Main from "./Main";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
      <Redirect from={"*"} to={"/"} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
