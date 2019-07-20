import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout,
  Col,
  Row,
  Input,
  Button,
  Avatar,
  Menu,
  Dropdown,
  Card,
  Icon
} from 'antd';
import { get, isFunction } from 'lodash';
import { Link } from 'react-router-dom';

const { Header: HeaderAntd } = Layout;
const { Search } = Input;
const { Meta } = Card;


class Header extends React.Component {
  /**
   * Logout
   * @returns {function} gọi action logout và redirect đến trang login
   * @memberof Header
   */
  logout = () => {
    const requestAPI = get(this.props.actions, 'logout');
    const pushFunc = get(this.props.history, 'push');
    if (!isFunction(requestAPI) || !isFunction(pushFunc)) {
      return false;
    }
    requestAPI();
    return pushFunc('/login');
  }

  /**
   * Render menu
   * @returns {node}
   * @memberof Header
   */
  renderMenu = () => (
    <Menu>
      <Menu.Item key="0">
        <Card
          actions={[
            <Button.Group>
              <Button href="/profile/timeline" style={{ display: 'inline' }} type="link">
                <Icon type="folder" />
                Cá nhân
              </Button>
              <Button onClick={this.logout} type="link">
                <Icon type="logout" />
                Đăng xuất
              </Button>
            </Button.Group>
          ]}
          bordered={false}
          cover={(
            <Avatar
              size={128}
              src={this.getUserInfo().avatar}
              style={{ margin: '25px auto', display: 'inherit' }}
            />
          )}
          hoverable
          style={{ width: 240 }}
        >
          <Meta style={{ textAlign: 'center', fontWeight: 'bold' }} title={this.getUserInfo().name} />
        </Card>
      </Menu.Item>
    </Menu>
  )

  /**
   * Lấy thông tin của user đang đăng nhập
   * @returns {object}
   * @memberof Header
   */
  getUserInfo = () => {
    const lastName = get(this.props.auth, 'user.fullName.lastName');
    const firstName = get(this.props.auth, 'user.fullName.firstName');
    const name = `${lastName} ${firstName}` || '';
    const avatar = get(this.props.auth, 'user.avatar') || '';
    return {
      lastName,
      firstName,
      name,
      avatar
    };
  }

  /**
   * Điều hướng đến một đường dẫn
   * @param {string} path đường dẫn
   * @returns {function} gọi props.history.push()
   * @memberof Header
   */
  redirectTo = (path = '/') => () => {
    const pushFunc = get(this.props.history, 'push');
    if (!isFunction(pushFunc)) {
      return false;
    }
    return pushFunc(path);
  }

  render() {
    return (
      <HeaderAntd>
        <Row>
          <Col span={5}>
            <Link to="/">
              <img alt="Logo" src="/images/logo.png" style={{ height: '45px', marginLeft: '20px' }} />
            </Link>
          </Col>
          <Col span={6}>
            <Search
              placeholder="Nhập từ khóa"
            />
          </Col>
          {!get(this.props.auth, 'isAuthenticated') ? (
            <Col lg={{ span: 4, offset: 9 }}>
              <Button onClick={this.redirectTo('/login')} style={{ marginRight: 8 }}>Đăng nhập</Button>
              <Button onClick={this.redirectTo('/registration')}>Đăng ký</Button>
            </Col>
          ) : (
            <Col lg={{ span: 4, offset: 9 }}>
              <Dropdown overlay={this.renderMenu()} trigger={['click']}>
                <a className="ant-dropdown-link" href="true">
                  <Avatar size="large" src={this.getUserInfo().avatar} />
                  <span className="welcome-name">{`Xin chào, ${this.getUserInfo().name}`}</span>
                  <Icon style={{ color: '#fff' }} type="down" />
                </a>
              </Dropdown>
            </Col>
          )}
        </Row>
      </HeaderAntd>
    );
  }
}

Header.propTypes = {
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  auth: PropTypes.objectOf(PropTypes.any).isRequired
};

export default Header;
