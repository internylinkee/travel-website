import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout,
  Icon,
  Menu
} from 'antd';
import { Link } from 'react-router-dom';
import { get } from 'lodash';

const { Sider } = Layout;

class SiderbarLeft extends React.Component {
  state = {
    collapsed: true
  };

  /**
   * Define data menu
   * @returns {array}
   * @memberof SiderbarLeft
   */
  dataMenu = () => ([
    {
      key: 'toggle',
      name: 'Toggle Menu',
      type: 'icon',
      render: () => (
        <React.Fragment>
          <Icon
            className="trigger"
            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
          />
          <span>Toggle Menu</span>
        </React.Fragment>
      ),
      path: '',
      subPaths: []
    },
    {
      key: 'home',
      name: 'Trang chủ',
      render: () => (
        <Link to="/">
          <Icon type="home" />
          <span>Trang chủ</span>
        </Link>
      ),
      path: '/',
      subPaths: []
    },
    {
      key: 'post',
      name: 'Danh sách bài viết',
      render: () => (
        <Link to="/posts">
          <Icon type="read" />
          <span>Danh sách bài viết</span>
        </Link>
      ),
      path: '/posts',
      subPaths: [
        '/posts/:id/detail',
        '/posts/:id/edit'
      ]
    },
    {
      key: 'tourguide',
      name: 'Hướng dẫn viên',
      render: () => (
        <Link to="/tourguides">
          <Icon type="idcard" />
          <span>Hướng dẫn viên</span>
        </Link>
      ),
      path: '/tourguides',
      subPaths: []
    }
  ])

  /**
   * Lấy key của các menu được chọn
   * @returns {array} selectedKeys
   * @memberof SiderbarLeft
   */
  getSelectedKeys = () => {
    const path = get(this.props.match, 'path');
    const selectedKeys = [];
    this.dataMenu().forEach((menuItem = {}) => {
      if (menuItem.path === path) {
        selectedKeys.push(menuItem.key);
      } else {
        const subPaths = menuItem.subPaths || [];
        const indexSubPath = subPaths.findIndex(subPath => subPath === path);
        if (indexSubPath > -1) {
          selectedKeys.push(menuItem.key);
        }
      }
    });
    return selectedKeys;
  }

  /**
   * Toggle menu
   * @returns {void} update state.collapsed
   * @memberof SiderbarLeft
   */
  toggle = () => {
    this.setState(prevState => ({
      collapsed: !prevState.collapsed
    }));
  };

  render() {
    return (
      <Sider className="fixed-sidebar-left" collapsed={this.state.collapsed} collapsible trigger={null}>
        <Menu
          defaultSelectedKeys={this.getSelectedKeys()}
          mode="inline"
          theme="light"
        >
          {this.dataMenu().map(menuItem => (
            <Menu.Item key={menuItem.key} onClick={this.toggle}>
              {menuItem.render()}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
    );
  }
}

SiderbarLeft.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired
};

export default SiderbarLeft;
