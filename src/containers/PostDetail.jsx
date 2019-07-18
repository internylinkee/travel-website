import React from 'react';
import {
  Layout,
  Row,
  Col,
  Divider,
  Icon,
  Tag,
  List,
  Avatar,
  Card,
  Typography,
  Input
} from 'antd';
import { IconText } from 'components/common';

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;

class PostDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Content>
        {/* Content Page */}
        <Row>
          <Col className="p-col" span={16}>
            {/* Hien thi chi tiết bai viet: review, tour */}
            <Card className="p-card first">
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
                <div style={{ height: '350px', margin: '0 -25px 20px' }}>
                  <img alt="Ảnh bìa" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" style={{ width: '100%', height: '100%' }} />
                </div>
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
                {/* Hiển thị 1 phần nội dung */}
                <Paragraph>
                  Sibi minantia in onerosior iners. Mentes inmensa porrexerat regat inter coeperunt galeae inposuit.
                  Mixta dispositam chaos: igni unda nulli posset: densior haec.
                  Contraria septemque unda fuit plagae orba nubes valles terrarum.
                  Peragebant vos neu divino viseret tenent terras sectamque onerosior.
                  Sibi minantia in onerosior iners. Mentes inmensa porrexerat regat inter coeperunt galeae inposuit.
                  Mixta dispositam chaos: igni unda nulli posset: densior haec.
                  Contraria septemque unda fuit plagae orba nubes valles terrarum.
                  Peragebant vos neu divino viseret tenent terras sectamque onerosior.Sibi minantia in onerosior iners.
                  Mentes inmensa porrexerat regat inter coeperunt galeae inposuit.
                  Mixta dispositam chaos: igni unda nulli posset: densior haec.
                  Contraria septemque unda fuit plagae orba nubes valles terrarum.
                  Peragebant vos neu divino viseret tenent terras sectamque onerosior.
                  Sibi minantia in onerosior iners. Mentes inmensa porrexerat regat inter coeperunt galeae inposuit.
                  Mixta dispositam chaos: igni unda nulli posset: densior haec.
                  <br />
                  <br />
                  <img alt="example" src="https://www.caintravel.com/wp-content/themes/taco-theme/_/src/img/home-hero-001-v2.jpg" style={{ width: '100%' }} />
                  <br />
                  <br />
                  Contraria septemque unda fuit plagae orba nubes valles terrarum.
                  Peragebant vos neu divino viseret tenent terras sectamque onerosior.Sibi minantia in onerosior iners.
                  Mentes inmensa porrexerat regat inter coeperunt galeae inposuit.
                  Mixta dispositam chaos: igni unda nulli posset: densior haec.
                  Contraria septemque unda fuit plagae orba nubes valles terrarum.
                  Peragebant vos neu divino viseret tenent terras sectamque onerosior.
                  Sibi minantia in onerosior iners. Mentes inmensa porrexerat regat inter coeperunt galeae inposuit.
                  Mixta dispositam chaos: igni unda nulli posset: densior haec.
                  Contraria septemque unda fuit plagae orba nubes valles terrarum.
                  Peragebant vos neu divino viseret tenent terras sectamque onerosior.
                  Contraria septemque unda fuit plagae orba nubes valles terrarum.
                  Peragebant vos neu divino viseret tenent terras sectamque onerosior.Sibi minantia in onerosior iners.
                  Mentes inmensa porrexerat regat inter coeperunt galeae inposuit.
                  Mixta dispositam chaos: igni unda nulli posset: densior haec.
                  <br />
                  <br />
                  Contraria septemque unda fuit plagae orba nubes valles terrarum.
                  Peragebant vos neu divino viseret tenent terras sectamque onerosior.
                  Sibi minantia in onerosior iners. Mentes inmensa porrexerat regat inter coeperunt galeae inposuit.
                  Mixta dispositam chaos: igni unda nulli posset: densior haec.
                  Contraria septemque unda fuit plagae orba nubes valles terrarum.
                  Peragebant vos neu divino viseret tenent terras sectamque onerosior.
                  Contraria septemque unda fuit plagae orba nubes valles terrarum.
                  Peragebant vos neu divino viseret tenent terras sectamque onerosior.Sibi minantia in onerosior iners.
                  Mentes inmensa porrexerat regat inter coeperunt galeae inposuit.
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
          {/* Thanh thông tin hiển thị các nội dung khác */}
          <Col className="p-col" span={8}>
            {/* Danh sách bài viết liên quan */}
            <Card className="title-related-posts" title="Các bài viết liên quan" />
            <Card
              className="p-card related-posts"
              cover={(
                <img
                  alt="example"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwfMzZWidbLDPeiep0Gtn2B1pi_1GGtgBQrKcxpJSnuCDSQ3KidQ"
                />
              )}
            >
              <Text className="text-related-posts">
                Bởi <span className="author">JACK SCORPIO</span> - 5 tháng trước
              </Text>
              <Title level={4}>Những nơi nên đến khi bạn đi du lịch ở Phú Quốc</Title>
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
            </Card>
          </Col>
        </Row>
      </Content>
    );
  }
}

export default PostDetail;
