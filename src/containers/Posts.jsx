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
  Input,
  Cascader,
  Button
} from 'antd';

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;

const IconText = ({ type, text }) => (
  <span className="count-post">
    <Icon style={{ marginRight: 6 }} type={type} />
    {text}
  </span>
);

// Thanh search
const options = [
  {
    value: 'Reviews',
    label: 'Bài đánh giá',
    children: [
      {
        value: 'love',
        label: 'Yêu thích nhất',
        children: [
          {
            value: 'eat',
            label: 'Ăn uống'
          },
          {
            value: 'Tham quan',
            label: 'Tham quan'
          },
          {
            value: 'Vui chơi',
            label: 'Vui chơi'
          }
        ]
      },
      {
        value: 'comment',
        label: 'Bình luận nhiều nhất',
        children: [
          {
            value: 'eat',
            label: 'Ăn uống'
          },
          {
            value: 'Tham quan',
            label: 'Tham quan'
          },
          {
            value: 'Vui chơi',
            label: 'Vui chơi'
          }
        ]
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men'
          }
        ]
      }
    ]
  }
];

class posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Content>
        {/* Header Page */}
        <Card style={{ margin: '20px 15px 0' }}>
          <Row gutter={24}>
            <Col span={12}>
              <Title level={4} style={{ margin: '5px 0 0' }}>Danh sách bài viết</Title>
            </Col>
            <Col span={12}>
              <Cascader options={options} placeholder="Loc bài viết theo ..." size="large" style={{ width: '100%' }} />
            </Col>
          </Row>
        </Card>
        {/* Content Page */}
        <Row>
          <Col className="p-col" span={16}>
            {/* Hiển thị nội dung bài viết k có comment */}
            <Card>
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
            {/* Hien thi bai viet: review, tour */}
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
                <Paragraph ellipsis={{ rows: 10 }}>
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
                <Button href="/posts/:id/detail" size="large">Xem thêm</Button>
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
            {/* Địa điểm */}
            <Card title="Địa điểm">
              <Tag>Nha Trang</Tag>
              <Tag>Đà Lạt</Tag>
              <Tag>Đà Nẵng</Tag>
              <Tag>Phú Quốc</Tag>
              <Tag>Vinh</Tag>
            </Card>
            {/* Danh sách bài viết nổi bật */}
            <Card className="p-card" title="Bài viết nổi bật">
              <List>
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar alt="Ảnh bìa" shape="square" size={64} src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />}
                    description={(
                      <Paragraph ellipsis={{ rows: 2 }}>
                        Sibi minantia in onerosior iners. Mentes inmensa porrexerat regat inter coeperunt galeae inp.
                        Mixta dispositam chaos:igni unda nulli posset: densior haec. Contraria septemque unda
                      </Paragraph>
                    )}
                    title="Bài viết nổi mật 1"
                  >
                  </List.Item.Meta>
                </List.Item>
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar alt="Ảnh bìa" shape="square" size={64} src="https://www.w3schools.com/howto/img_snow.jpg" />}
                    description={(
                      <Paragraph ellipsis={{ rows: 2 }}>
                        Sibi minantia in onerosior iners. Mentes inmensa porrexerat regat inter coeperunt galeae inp.
                        Mixta dispositam chaos:igni unda nulli posset: densior haec. Contraria septemque unda
                      </Paragraph>
                    )}
                    title="Bài viết nổi mật 2"
                  >
                  </List.Item.Meta>
                </List.Item>
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar alt="Ảnh bìa" shape="square" size={64} src="https://www.w3schools.com/w3images/fjords.jpg" />}
                    description={(
                      <Paragraph ellipsis={{ rows: 2 }}>
                        Sibi minantia in onerosior iners. Mentes inmensa porrexerat regat inter coeperunt galeae inp.
                        Mixta dispositam chaos:igni unda nulli posset: densior haec. Contraria septemque unda
                      </Paragraph>
                    )}
                    title="Bài viết nổi mật 3"
                  >
                  </List.Item.Meta>
                </List.Item>
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar alt="Ảnh bìa" shape="square" size={64} src="https://lh3.googleusercontent.com/KP0uUZWi2GoW49T17y4P1U1ehscle9qTSivSZc2pDripm2zbtLScw_hR81S6pIyicLSP" />}
                    description={(
                      <Paragraph ellipsis={{ rows: 2 }}>
                        Sibi minantia in onerosior iners. Mentes inmensa porrexerat regat inter coeperunt galeae inp.
                        Mixta dispositam chaos:igni unda nulli posset: densior haec. Contraria septemque unda
                      </Paragraph>
                    )}
                    title="Bài viết nổi mật 4"
                  >
                  </List.Item.Meta>
                </List.Item>
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar alt="Ảnh bìa" shape="square" size={64} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3fBhLeTmBqCYHzDZIaK_-U-IWQ0VkI7O0CJ5YD4MRV4Hz7Foz" />}
                    description={(
                      <Paragraph ellipsis={{ rows: 2 }}>
                        Sibi minantia in onerosior iners. Mentes inmensa porrexerat regat inter coeperunt galeae inp.
                        Mixta dispositam chaos:igni unda nulli posset: densior haec. Contraria septemque unda
                      </Paragraph>
                    )}
                    title="Bài viết nổi mật 5"
                  />
                </List.Item>
              </List>
            </Card>
            {/* Kết thúc phần danh sách bài viết nổi bất */}

            {/* Phần Tác giả được Yêu thích */}
            <Card className="p-card" title="Tác giả được yêu thích">
              <List>
                <List.Item
                  extra={<Avatar icon="heart" style={{ backgroundColor: '#7dbcea' }} />}
                >
                  <List.Item.Meta
                    avatar={<Avatar alt="Avatar" size={40} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3fBhLeTmBqCYHzDZIaK_-U-IWQ0VkI7O0CJ5YD4MRV4Hz7Foz" />}
                    description={[
                      <IconText text="13" type="heart" />,
                      <IconText text="3" type="form" />,
                      <IconText text="30" type="book" />
                    ]}
                    title="Sarah Hetfield"
                  />
                </List.Item>
                <List.Item
                  extra={<Avatar icon="heart" style={{ backgroundColor: '#7dbcea' }} />}
                >
                  <List.Item.Meta
                    avatar={<Avatar alt="Avatar" size={40} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3fBhLeTmBqCYHzDZIaK_-U-IWQ0VkI7O0CJ5YD4MRV4Hz7Foz" />}
                    description={[
                      <IconText text="13" type="heart" />,
                      <IconText text="3" type="form" />,
                      <IconText text="30" type="book" />
                    ]}
                    title="Sarah Hetfield"
                  />
                </List.Item>
                <List.Item
                  extra={<Avatar icon="heart" style={{ backgroundColor: '#7dbcea' }} />}
                >
                  <List.Item.Meta
                    avatar={<Avatar alt="Avatar" size={40} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3fBhLeTmBqCYHzDZIaK_-U-IWQ0VkI7O0CJ5YD4MRV4Hz7Foz" />}
                    description={[
                      <IconText text="13" type="heart" />,
                      <IconText text="3" type="form" />,
                      <IconText text="30" type="book" />
                    ]}
                    title="Sarah Hetfield"
                  />
                </List.Item>
                <List.Item
                  extra={<Avatar icon="heart" style={{ backgroundColor: '#7dbcea' }} />}
                >
                  <List.Item.Meta
                    avatar={<Avatar alt="Avatar" size={40} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3fBhLeTmBqCYHzDZIaK_-U-IWQ0VkI7O0CJ5YD4MRV4Hz7Foz" />}
                    description={[
                      <IconText text="13" type="heart" />,
                      <IconText text="3" type="form" />,
                      <IconText text="30" type="book" />
                    ]}
                    title="Sarah Hetfield"
                  />
                </List.Item>
                <List.Item
                  extra={<Avatar icon="heart" style={{ backgroundColor: '#7dbcea' }} />}
                >
                  <List.Item.Meta
                    avatar={<Avatar alt="Avatar" size={40} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3fBhLeTmBqCYHzDZIaK_-U-IWQ0VkI7O0CJ5YD4MRV4Hz7Foz" />}
                    description={[
                      <IconText text="13" type="heart" />,
                      <IconText text="3" type="form" />,
                      <IconText text="30" type="book" />
                    ]}
                    title="Sarah Hetfield"
                  />
                </List.Item>
              </List>
            </Card>
          </Col>
        </Row>
      </Content>
    );
  }
}

export default posts;

posts.displayName = 'Posts';
