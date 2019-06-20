import React from 'react';
import {
  Layout,
  Row,
  Col,
  Radio,
  Divider,
  Icon,
  Tag,
  List,
  Avatar,
  Card,
  Typography,
  Input
} from 'antd';

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;

const IconText = ({ type, text }) => (
  <span className="count-post">
    <Icon style={{ marginRight: 6 }} type={type} />
    {text}
  </span>
);

class posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Content>
        <Row justify="center" type="flex">
          <Col className="topic-posts p-col">
            <Radio.Group buttonStyle="solid" defaultValue="a" size="large">
              <Radio.Button value="a">Tất cả</Radio.Button>
              <Radio.Button value="b">Câu hỏi</Radio.Button>
              <Radio.Button value="c">Bài đánh giá</Radio.Button>
              <Radio.Button value="d">Chuyến đi</Radio.Button>
            </Radio.Group>
          </Col>
        </Row>
        <Row className="sorting-col">
          {/* Hiển thị bài 1 */}
          <Col className="p-col" span="12">
            <Card className="p-card">
              <Row style={{ marginBottom: '20px' }}>
                <Col span={3}>
                  <Avatar size={56} src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
                </Col>
                <Col span={21} style={{ paddingTop: '5px' }}>
                  <Text className="name-users">Sarah Hetfield</Text>
                  <span style={{ margin: '0 10px' }}>đã gắn địa điểm ở</span>
                  <IconText text="Đà Nẵng, Nha Trang" type="environment" />
                </Col>
                <Col span={21}>
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
          </Col>
          {/* Hiển thị bài 2 */}
          <Col className="p-col" span="12">
            <Card className="p-card">
              <Row style={{ marginBottom: '20px' }}>
                <Col span={2}>
                  <Avatar size={56} src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
                </Col>
                <Col span={22} style={{ paddingTop: '5px' }}>
                  <Text className="name-users">Sarah Hetfield</Text>
                </Col>
                <Col span={22}>
                  <Text>March 2 at 9:06am</Text>
                </Col>
              </Row>
              <Row>
                <Title level={3}>Những nơi nên đến khi bạn đi du lịch ở Đà Nẵng</Title>
                {/* Hiển thị Mô tả. Bấm chi tiết sẽ qua trang chi tiết bài viết */}
                <Paragraph>
                  Sibi minantia in onerosior iners. Mentes inmensa porrexerat regat inter coeperunt galeae inposuit.
                  Mixta dispositam chaos: igni unda nulli posset: densior haec.
                  Contraria septemque unda fuit plagae orba nubes valles terrarum.
                  Peragebant vos neu divino viseret tenent terras sectamque onerosior.
                  Sibi minantia in onerosior iners. Mentes inmensa porrexerat regat inter coeperunt galeae inposuit.
                  Mixta dispositam chaos: igni unda nulli posset: densior haec.
                  Contraria septemque unda fuit plagae orba nubes valles terrarum.
                  Peragebant vos neu divino viseret tenent terras sectamque onerosior.
                </Paragraph>
                <img alt="Ảnh bìa" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" style={{ width: '100%' }} />
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
            {/* Phần Comment */}
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
          </Col>
          {/* Hết hiển thị bài 2 */}
          <Col className="p-col" span="12">
            <Card className="p-card">
              <Row style={{ marginBottom: '20px' }}>
                <Col span={2}>
                  <Avatar size={56} src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
                </Col>
                <Col span={22} style={{ paddingTop: '5px' }}>
                  <Text className="name-users">Sarah Hetfield</Text>
                </Col>
                <Col span={22}>
                  <Text>March 2 at 9:06am</Text>
                </Col>
              </Row>
              <Row>
                <Title level={3}>Những nơi nên đến khi bạn đi du lịch ở Đà Nẵng</Title>
                {/* Hiển thị Mô tả. Bấm chi tiết sẽ qua trang chi tiết bài viết */}
                <Paragraph>
                  Sibi minantia in onerosior iners. Mentes inmensa porrexerat regat inter coeperunt galeae inposuit.
                  Mixta dispositam chaos: igni unda nulli posset: densior haec.
                  Contraria septemque unda fuit plagae orba nubes valles terrarum.
                  Peragebant vos neu divino viseret tenent terras sectamque onerosior.
                  Sibi minantia in onerosior iners. Mentes inmensa porrexerat regat inter coeperunt galeae inposuit.
                  Mixta dispositam chaos: igni unda nulli posset: densior haec.
                  Contraria septemque unda fuit plagae orba nubes valles terrarum.
                  Peragebant vos neu divino viseret tenent terras sectamque onerosior.
                </Paragraph>
                <img alt="Ảnh bìa" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" style={{ width: '100%' }} />
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
            {/* Phần Comment */}
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
          </Col>
          <Col className="p-col" span="12">1</Col>
          <Col className="p-col" span="12">1</Col>
        </Row>
      </Content>
    );
  }
}

export default posts;

posts.displayName = 'Posts';
