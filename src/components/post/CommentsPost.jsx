import React from 'react';
import {
  Card,
  Row,
  Col,
  Icon,
  Avatar,
  Typography,
  Input
} from 'antd';

const { Title, Text } = Typography;

class commentsPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card className="b-comment">
        <Title level={4} style={{ marginBottom: '20px' }}>Bình luận</Title>
        <Row style={{ marginBottom: '20px' }}>
          <Col span={2}>
            <Avatar size={40} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
          </Col>
          <Col span={22} style={{ paddingTop: '5px' }}>
            <Text className="name-users">Maria Monoban</Text>
            <Text className="text-comment">1 phút trước</Text>
          </Col>
          <Col span={22} style={{ marginTop: '10px' }}>
            Sibi minantia in onerosior iners. Mentes inmensa porrexerat regat inter coeperunt galeae inposuit.
            Mixta dispositam chaos: igni unda nulli posset: densior haec.
            Contraria septemque unda fuit plagae orba nubes valles terrarum.
          </Col>
        </Row>
        <Row style={{ marginBottom: '20px' }}>
          <Col span={2}>
            <Avatar size={40} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </Col>
          <Col span={22} style={{ paddingTop: '5px' }}>
            <Text className="name-users">Han Solo</Text>
            <Text className="text-comment">12 phút trước</Text>
          </Col>
          <Col span={22} style={{ marginTop: '10px' }}>
            Sibi minantia in onerosior iners. Mentes inmensa porrexerat regat inter coeperunt galeae inposuit.
            Mixta dispositam chaos: igni unda nulli posset: densior haec.
            Contraria septemque unda fuit plagae orba nubes valles terrarum.
          </Col>
        </Row>
        <Row>
          <Col span={2}>
            <Avatar size={40} src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
          </Col>
          <Col span={22}>
            <Input
              placeholder="Viết bình luận"
              style={{ marginTop: '5px' }}
              suffix={<Icon style={{ color: 'rgba(0,0,0,.25)' }} type="enter" />}
            />
          </Col>
        </Row>
      </Card>
    );
  }
}

export default commentsPost;

commentsPost.displayName = 'CommentsPost';
