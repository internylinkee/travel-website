import React from 'react';
import {
  Col,
  Card,
  Typography,
  Avatar,
  Row,
  Icon
} from 'antd';

const { Text } = Typography;
const { Meta } = Card;

class ListTourGuides extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Col lg={6} md={8} sm={12} style={{ marginBottom: '20px' }} xs={24}>
        <Card
          actions={[
            <a href="/profile/:id"><Icon style={{ margin: '10px' }} type="profile" />Trang cá nhân</a>,
            <span><Icon style={{ margin: '10px' }} type="wechat" />Liên hệ</span>
          ]}
          className="card-tour-guide"
          cover={(
            <img
              alt="example"
              src="https://lh3.googleusercontent.com/KP0uUZWi2GoW49T17y4P1U1ehscle9qTSivSZc2pDripm2zbtLScw_hR81S6pIyicLSP"
              style={{ height: '100%' }}
            />
          )}
        >
          <div className="avatar-tourguide">
            <Avatar
              alt="Avatar"
              size={100}
              src="https://www.cg-cooper.com/uploads/7/6/9/1/7691405/published/0c4a1744.jpg?1506475705"
            />
          </div>
          <Text className="name-tourguide">Michael Maximoff</Text>
          <Row style={{ textAlign: 'center', marginTop: '15px' }}>
            <Col span={8}>
              <Meta description="Yêu thích" title="124" />
            </Col>
            <Col span={8}>
              <Meta description="Bài viết" title="14" />
            </Col>
            <Col span={8}>
              <Meta description="Đánh giá" title="5" />
            </Col>
          </Row>
        </Card>
      </Col>
    );
  }
}

export default ListTourGuides;
