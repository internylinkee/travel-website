import React from 'react';
import { Layout, Icon, Menu } from 'antd';

const { Sider } = Layout;

class siderbarLeft extends React.Component {
  state = {
    collapsed: true
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Sider className="fixed-sidebar-left" collapsed={this.state.collapsed} collapsible trigger={null}>
        <div className="logo" />
        <Menu defaultSelectedKeys={['1']} mode="inline" theme="light">
          <Menu.Item key="1" onClick={this.toggle}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
            />
            <span>Toggle Menu</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="user" />
            <span>nav 1</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="video-camera" />
            <span>nav 2</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="upload" />
            <span>nav 3</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default siderbarLeft;

siderbarLeft.displayName = 'SiderbarLeft';
