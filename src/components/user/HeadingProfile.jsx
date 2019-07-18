import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Row,
  Card,
  Avatar,
  Col
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
    return {
      lastName,
      firstName,
      name,
      avatar
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
              // TODO: cần sử dụng ảnh bìa của user
              src="http://newsmobile.in/wp-content/uploads/2017/06/5104226627001_5297440765001_5280261645001-vs.jpg"
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
