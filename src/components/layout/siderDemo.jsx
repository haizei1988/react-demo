import React from "react";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import style from "../../style/login.module.scss";

import menuList from "../../router/menuConfig";

const { Sider } = Layout;
const { SubMenu } = Menu;

export default class SiderMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
        <div className={style.logo}>
          Yang {!this.props.collapsed && "React"}
        </div>
        <Menu theme="dark" mode="inline">
          {menuList.map(el =>
            el.children ? (
              <SubMenu
                key={el.id}
                title={
                  <span>
                    <Icon type={el.icon} />
                    <span>{el.title}</span>
                  </span>
                }
              >
                {el.children.map(son => (
                  <Menu.Item key={son.id}>
                    <Link to={son.path}>{son.title}</Link>
                  </Menu.Item>
                ))}
              </SubMenu>
            ) : (
              <Menu.Item key={el.id}>
                <Link to={el.path}>
                  <Icon type={el.icon} />
                  <span>{el.title}</span>
                </Link>
              </Menu.Item>
            )
          )}
        </Menu>
      </Sider>
    );
  }
}
