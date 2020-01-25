import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Main from "./Main";
import Streaming from "./Streaming";
import Signin from "./Signin";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/self/:channelName" exact component={Streaming} />
      <Route path="/twitch/:channelName" exact component={Streaming} />
      <Route path="/signin/" exact component={Signin} />
      <Redirect from={"*"} to={"/"} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
