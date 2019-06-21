import React from 'react';
import {
  Layout,
  Row,
  Col,
  Card,
  Avatar
} from 'antd';
import { Link } from 'react-router-dom';

const { Content } = Layout;

class aboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Content>
        <Row style={{ padding: '0 15px' }}>
          {/* Ảnh bìa, Avatar và Menu */}
          <Card
            className="card-imgage-cover"
            cover={(
              <img
                alt="example"
                src="http://newsmobile.in/wp-content/uploads/2017/06/5104226627001_5297440765001_5280261645001-vs.jpg"
                style={{ height: '100%' }}
              />
            )}
          >
            <div className="card-avatar">
              <Avatar size={150} src="https://www.cg-cooper.com/uploads/7/6/9/1/7691405/published/0c4a1744.jpg?1506475705" />
            </div>
            <Row gutter={16} style={{ lineHeight: '50px' }}>
              <Col className="menu-profile active" span={3}><Link to="/profile/1">Dòng thời gian</Link></Col>
              <Col className="menu-profile" span={3}><Link to="/profile/1/reviews">Bài viết</Link></Col>
              <Col className="menu-profile" span={3}><Link to="/profile/1/tours">Chuyến đi</Link></Col>
              <Col className="name-profile" span={6}><Link to="/profile/1">James Spiegel</Link></Col>
              <Col className="menu-profile" span={3}><Link to="/profile/1/albums">Ảnh</Link></Col>
              <Col className="menu-profile" span={3}><Link to="/profile/1/aboutme">Về Tôi</Link></Col>
            </Row>
          </Card>
        </Row>
      </Content>
    );
  }
}

export default aboutMe;

aboutMe.displayName = 'AboutMe';
