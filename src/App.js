import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Layout } from "antd";
import Main from "./router/index";

import SiderMenu from "./components/layout/siderDemo";
import HeaderCustom from "./components/layout/HeaderCustom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    return localStorage.getItem("user") ? (
      <Layout style={{ height: "100vh" }}>
        <SiderMenu collapsed={this.state.collapsed}></SiderMenu>
        <Layout>
          <HeaderCustom collapsed={this.state.collapsed} toggle={this.toggle} />
          <Main />
        </Layout>
      </Layout>
    ) : (
      <Redirect to="/login" />
    );
  }
}
