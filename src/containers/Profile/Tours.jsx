import React from 'react';
import {
  Layout,
  Row,
  Col,
  Card,
  Avatar,
  Empty,
  Button
} from 'antd';
import { Link } from 'react-router-dom';

const { Content } = Layout;

class Tours extends React.Component {
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
        <Row style={{ padding: '0 15px' }}>
          <Empty
            className="empty"
            description={(
              <span>
                Bạn chưa có thông tin làm Hướng dẫn viên
              </span>
            )}
            image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
            imageStyle={{
              height: 60
            }}
          >
            <Button type="primary">Tạo thông tin</Button>
          </Empty>
        </Row>
      </Content>
    );
  }
}

export default Tours;
