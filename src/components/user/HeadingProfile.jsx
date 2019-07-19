import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Row,
  Card,
  Avatar,
  Col,
  Button
} from 'antd';
import { get } from 'lodash';
import classnames from 'classnames';
import variables from 'constants/variables';

class HeaderProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * Define thông tin của tabs: key, link, name
   * @returns {array}
   * @memberof HeaderProfile
   */
  dataTab = () => [
    {
      key: variables.PROFILE_TAB.TIMELINE,
      path: `/${this.props.prefix}/timeline`,
      className: 'menu-profile',
      span: 3,
      name: 'Dòng thời gian'
    },
    {
      key: variables.PROFILE_TAB.REVIEW,
      path: `/${this.props.prefix}/review`,
      className: 'menu-profile',
      span: 3,
      name: 'Bài viết'
    },
    {
      key: variables.PROFILE_TAB.TOUR,
      path: `/${this.props.prefix}/tour`,
      className: 'menu-profile',
      span: 3,
      name: 'Chuyến đi'
    },
    {
      key: variables.PROFILE_TAB.TIMELINE,
      path: `/${this.props.prefix}/timeline`,
      className: 'name-profile',
      span: 6,
      name: this.getUserInfo().name
    },
    {
      key: variables.PROFILE_TAB.ABOUT_ME,
      path: `/${this.props.prefix}/about-me`,
      className: 'menu-profile',
      span: 3,
      name: 'Về Tôi'
    },
    // TODO: Hiển thị button Follow khi ở Profile của User khác, style màu vàng
    {
      key: variables.PROFILE_TAB.CREATE_POST,
      path: `/${this.props.prefix}/create-post`,
      className: 'menu-profile',
      span: 6,
      name: <Button ghost type="primary">Tạo bài viết</Button>
    }
  ]

  /**
   * Check active tab
   * @param {object} tab
   * @returns {boolean}
   * @memberof HeaderProfile
   */
  isActiveTab = (tab) => {
    const path = get(this.props.match, 'url');
    return path === get(tab, 'path') && this.props.tab === get(tab, 'key');
  }

  /**
   * Lấy thông tin của user
   * @returns {object}
   * @memberof HeaderProfile
   */
  getUserInfo = () => {
    const lastName = get(this.props.user, 'fullName.lastName');
    const firstName = get(this.props.user, 'fullName.firstName');
    const name = `${lastName} ${firstName}` || '';
    const avatar = get(this.props.user, 'avatar') || '';
    const background = get(this.props.user, 'background') || '';
    return {
      lastName,
      firstName,
      name,
      avatar,
      background
    };
  }

  render() {
    return (
      <Row style={{ padding: '0 15px' }}>
        {/* Ảnh bìa, Avatar và Menu */}
        <Card
          className="card-imgage-cover"
          cover={(
            <img
              alt="example"
              src={this.getUserInfo().background}
              style={{ height: '100%' }}
            />
          )}
        >
          <div className="card-avatar">
            <Avatar size={150} src={this.getUserInfo().avatar} />
          </div>
          <Row gutter={16} style={{ lineHeight: '50px' }}>
            {this.dataTab().map((tab, index) => (
              <Col
                key={index}
                className={classnames(tab.className, {
                  active: this.isActiveTab(tab)
                })}
                span={tab.span}
              >
                <Link to={tab.path}>{tab.name}</Link>
              </Col>
            ))}
          </Row>
        </Card>
      </Row>
    );
  }
}

export default HeaderProfile;

HeaderProfile.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  prefix: PropTypes.string.isRequired,
  tab: PropTypes.string.isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired
};
