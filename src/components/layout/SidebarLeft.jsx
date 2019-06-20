import React from 'react';
import { Layout, Icon, Menu } from 'antd';
import { Link } from 'react-router-dom';

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
        <Menu defaultSelectedKeys={['2']} mode="inline" theme="light">
          <Menu.Item key="1" onClick={this.toggle}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
            />
            <span>Toggle Menu</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/">
              <Icon type="home" />
              <span>Trang chủ</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/posts">
              <Icon type="read" />
              <span>Danh sách bài viết</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/tourguide">
              <Icon type="idcard" />
              <span>Hướng dẫn viên</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default siderbarLeft;

siderbarLeft.displayName = 'SiderbarLeft';
