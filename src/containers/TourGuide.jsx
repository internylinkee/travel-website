import React from 'react';
import {
  Layout,
  Row,
  Col,
  Card,
  Typography,
  Avatar,
  Icon,
  Select
} from 'antd';

const { Content } = Layout;
const { Title, Text } = Typography;
const { Meta } = Card;
const { Option } = Select;

class TourGuide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Content>
        {/* Header Page */}
        <Card style={{ margin: '20px 0' }}>
          <Row gutter={24}>
            <Col span={12}>
              <Title level={4} style={{ margin: '5px 0 0' }}>Hướng dẫn viên</Title>
            </Col>
            <Col offset={6} span={6}>
              <Select
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                optionFilterProp="children"
                placeholder="Lọc theo ..."
                showSearch
                size="large"
                style={{ width: '100%' }}
              >
                <Option value="jack">Được yêu thích nhất</Option>
                <Option value="lucy">Có nhiều bài viết nhất</Option>
                <Option value="tom">Có lượt đánh giá</Option>
              </Select>
            </Col>
          </Row>
        </Card>
        {/* Danh sách Hướng DV */}
        <Row gutter={24}>
          <Col lg={6} md={8} sm={12} xs={24}>
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
                  src="https://29a2c9fde86ba3b26cc5-b46d48c1c3e7071759cdbb9a4a64ab30.ssl.cf2.rackcdn.com/s/1/1444411493/author-photos-160W/101054.jpg"
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
          <Col lg={6} md={8} sm={12} xs={24}>
            <Card
              actions={[
                <span><Icon style={{ margin: '10px' }} type="profile" />Trang cá nhân</span>,
                <span><Icon style={{ margin: '10px' }} type="wechat" />Liên hệ</span>
              ]}
              className="card-tour-guide"
              cover={(
                <img
                  alt="example"
                  src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500"
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
              <Text className="name-tourguide">Chris Greyson</Text>
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
          <Col lg={6} md={8} sm={12} xs={24}>
            <Card
              actions={[
                <span><Icon style={{ margin: '10px' }} type="profile" />Trang cá nhân</span>,
                <span><Icon style={{ margin: '10px' }} type="wechat" />Liên hệ</span>
              ]}
              className="card-tour-guide"
              cover={(
                <img
                  alt="example"
                  src="https://www.w3schools.com/w3images/fjords.jpg"
                  style={{ height: '100%' }}
                />
              )}
            >
              <div className="avatar-tourguide">
                <Avatar
                  alt="Avatar"
                  size={100}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTunLWOn_FckuZty_fbDknIKQSMKSXoJyw9ZuwQkdMGP7BT2MJD"
                />
              </div>
              <Text className="name-tourguide">Marina Valentine</Text>
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
          <Col lg={6} md={8} sm={12} xs={24}>
            <Card
              actions={[
                <span><Icon style={{ margin: '10px' }} type="profile" />Trang cá nhân</span>,
                <span><Icon style={{ margin: '10px' }} type="wechat" />Liên hệ</span>
              ]}
              className="card-tour-guide"
              cover={(
                <img
                  alt="example"
                  src="https://www.w3schools.com/howto/img_snow.jpg"
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
              <Text className="name-tourguide">Nicholas Grissom</Text>
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
        </Row>
      </Content>
    );
  }
}

export default TourGuide;
