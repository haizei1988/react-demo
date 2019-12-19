import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

import { GetRouteList } from "../../utils/common";

class BreadcrumbCustom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routerList: GetRouteList()
    };
  }
  static propTypes = {
    location: PropTypes.object.isRequired
  };

  getBreadList(pathname) {
    let pathSnippets = pathname.split("/").filter(i => i);
    let list = [];
    pathSnippets.forEach((el, index) => {
      let url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
      let item = this.state.routerList.find(i => i.path === url);
      item && list.push(item);
    });
    return list;
  }

  render() {
    const { location } = this.props;
    return (
      <span style={{ display: "inline-block" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          {this.getBreadList(location.pathname).map((el, index) =>
            index + 1 === this.getBreadList(location.pathname).length ||
            index === 0 ? (
              <Breadcrumb.Item key={el.id}>{el.title}</Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item key={el.id}>
                <Link to={el.path}>{el.title}</Link>
              </Breadcrumb.Item>
            )
          )}
        </Breadcrumb>
      </span>
    );
  }
}

export default withRouter(BreadcrumbCustom);
