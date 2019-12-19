import React, { Component } from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";

import AllComponents from "../views";
import { GetRouteList } from "../utils/common";

const { Content } = Layout;

export default class Routers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routeList: []
    };
  }
  componentDidMount() {
    this.setState({
      routeList: GetRouteList()
    });
  }

  render() {
    return (
      <Layout style={{ padding: "20px" }}>
        <Content
          style={{
            margin: 0,
            padding: 20,
            background: "#fff",
            minHeight: 280
          }}
        >
          <Switch>
            {this.state.routeList.map((el, index) => {
              return (
                el.component && (
                  <Route
                    exact
                    path={el.path}
                    key={index}
                    component={AllComponents[el.component]}
                  />
                )
              );
            })}
          </Switch>
        </Content>
      </Layout>
    );
  }
}
