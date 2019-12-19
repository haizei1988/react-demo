import React from "react";
import { Layout, Menu, Icon } from "antd";
import BreadcrumbCustom from "./BreadcrumbCustom";
import { GetTimeSlot, GetWeek, Storage } from "../../utils/common";
import history from "../../utils/history";
import style from "../../style/login.module.scss";

const { Header } = Layout;

export default class HeaderCustom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        userName: "yang"
      }
    };
  }

  logout = () => {
    Storage.removeItem("user");
    history.go("/login");
  };

  render() {
    return (
      <Header style={{ background: "#fff", padding: 0 }}>
        <Icon
          className={style.trigger}
          type={this.props.collapsed ? "menu-unfold" : "menu-fold"}
          onClick={this.props.toggle}
        />
        <BreadcrumbCustom />
        <Menu mode="horizontal" style={{ lineHeight: "64px", float: "right" }}>
          <Menu.Item>
            <Icon type="user" style={{ fontSize: 16 }} />
            {this.state.user.userName}
          </Menu.Item>
          <Menu.Item key="schedule">
            <span onClick={this.logout}>退出</span>
          </Menu.Item>
        </Menu>
        <div style={{ float: "right" }}>
          {GetWeek()}
          <span style={{ margin: "0 10px" }}>{GetTimeSlot()}</span>
        </div>
      </Header>
    );
  }
}
