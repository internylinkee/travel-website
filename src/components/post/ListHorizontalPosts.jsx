import React from 'react';
import {
  Row,
  Col,
  Card,
  Icon,
  Typography,
  Divider,
  Tag,
  Avatar,
  List
} from 'antd';

const { Title, Text, Paragraph } = Typography;

const IconText = ({ type, text }) => (
  <span className="count-post">
    <Icon style={{ marginRight: 6 }} type={type} />
    {text}
  </span>
);

class horizontalPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card className="p-card">
        <Row style={{ marginBottom: '20px' }}>
          <Col span={2}>
            <Avatar size={56} src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
          </Col>
          <Col span={22} style={{ paddingTop: '5px' }}>
            <Text className="name-users">Sarah Hetfield</Text>
            <span style={{ margin: '0 10px' }}>đã gắn địa điểm ở</span>
            <IconText text="Đà Nẵng, Nha Trang" type="environment" />
          </Col>
          <Col span={22}>
            <Text>March 2 at 9:06am</Text>
          </Col>
        </Row>
        <Row>
          <Title level={3}>Du lịch Phú Quốc nên ăn gì?</Title>
          <Paragraph ellipsis={{ rows: 6, expandable: true }}>
            Sibi minantia in onerosior iners. Mentes inmensa porrexerat regat inter coeperunt galeae inposuit.
            Mixta dispositam chaos: igni unda nulli posset: densior haec.
            Contraria septemque unda fuit plagae orba nubes valles terrarum.
            Peragebant vos neu divino viseret tenent terras sectamque onerosior.
            Sibi minantia in onerosior iners. Mentes inmensa porrexerat regat inter coeperunt galeae inposuit.
            Mixta dispositam chaos: igni unda nulli posset: densior haec.
            Contraria septemque unda fuit plagae orba nubes valles terrarum.
            Peragebant vos neu divino viseret tenent terras sectamque onerosior.
          </Paragraph>
        </Row>
        <Divider />
        <Row>
          <Col span={12}>
            <IconText text="156" type="heart" />
            <IconText text="2" type="message" />
            <IconText text="156" type="share-alt" />
          </Col>
          <Col span={12}>
            <span className="tag-post">
              <Tag color="volcano">Ăn uống</Tag>
              <Tag color="geekblue">Vui chơi</Tag>
              <Tag color="purple">Tham quan</Tag>
            </span>
          </Col>
        </Row>
        <List className="control-post-button">
          <List.Item>
            <Avatar icon="heart" style={{ backgroundColor: '#7dbcea' }} />
          </List.Item>
          <List.Item>
            <Avatar icon="message" style={{ backgroundColor: '#7dbcea' }} />
          </List.Item>
          <List.Item>
            <Avatar icon="share-alt" style={{ backgroundColor: '#7dbcea' }} />
          </List.Item>
        </List>
      </Card>
    );
  }
}

export default horizontalPosts;

horizontalPosts.displayName = 'HorizontalPosts';
