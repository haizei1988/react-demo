import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import NormalLoginForm from "../views/login";
import Index from "../views/index/index";
import history from "../utils/history";
import App from "../App";

export default class RouterIndex extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={App}></Route>
          <Route path="/app" component={App} />
          <Route path="/login" component={NormalLoginForm}></Route>
          <Route path="/index" component={Index}></Route>
        </Switch>
      </Router>
    );
  }
}
