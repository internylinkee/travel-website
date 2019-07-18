import React from 'react';
import { Layout, Icon, Menu } from 'antd';

const { Sider } = Layout;

class SiderbarRight extends React.Component {
  state = {
    collapsed: true
  };

  toggle = () => {
    this.setState(prevState => ({
      collapsed: !prevState.collapsed
    }));
  };

  render() {
    return (
      <Sider className="fixed-sidebar-right" collapsed={this.state.collapsed} collapsible trigger={null}>
        <Menu defaultSelectedKeys={['1']} mode="inline" theme="light">
          <Menu.Item key="1">
            <Icon type="user" />
            <span>nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span>nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span>nav 3</span>
          </Menu.Item>
          <Menu.Item onClick={this.toggle}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
            />
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default SiderbarRight;
