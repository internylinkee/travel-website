import React from 'react';
import {
  Layout,
  Row,
  Col,
  Card,
  Tabs,
  Input,
  Icon,
  Typography,
  Divider,
  Tag,
  Form,
  Select,
  Button,
  Avatar,
  List
} from 'antd';

const { Content } = Layout;
const { TabPane } = Tabs;
const { TextArea } = Input;
const { Title, Text, Paragraph } = Typography;
const { Option } = Select;

const IconText = ({ type, text }) => (
  <span className="count-post">
    <Icon style={{ marginRight: 6 }} type={type} />
    {text}
  </span>
);

class content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Content>
        <Row>
          <Col className="p-col" span={16}>
            <Card className="card-container">
              <Tabs type="card">
                <TabPane
                  key="1"
                  tab={(
                    <Text>
                      <Icon type="question-circle" />
                      Câu hỏi
                    </Text>
                  )}
                >
                  <Form layout="vertical">
                    <Form.Item label="Tiêu đề">
                      <Input placeholder="Nhập tiêu đề" size="large" />
                    </Form.Item>
                    <Row>
                      <Col span={12} style={{ paddingRight: '20px' }}>
                        <Form.Item label="Gắn thẻ">
                          <Select
                            mode="multiple"
                            optionLabelProp="label"
                            placeholder="Chọn thẻ bài viết"
                            style={{ width: '100%' }}
                          >
                            <Option label="Ăn uống" value="Ăn uống">
                              Ăn uống
                            </Option>
                            <Option label="Vui chơi giải trí" value="Vui chơi giải trí">
                              Vui chơi giải trí
                            </Option>
                            <Option label="Tham quan" value="Tham quan">
                              Tham quan
                            </Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item label="Địa điểm">
                          <Select
                            defaultValue={['Nha Trang']}
                            mode="multiple"
                            optionLabelProp="label"
                            placeholder="Chọn địa điểm"
                            style={{ width: '100%' }}
                          >
                            <Option label="Nha Trang" value="Nha Trang">
                              Nha Trang
                            </Option>
                            <Option label="Đà Nẵng" value="Đà Nẵng">
                              Đà Nẵng
                            </Option>
                            <Option label="Phú Quốc" value="Phú Quốc">
                              Phú Quốc
                            </Option>
                            <Option label="Đà Lạt" value="Đà Lạt">
                              Đà Lạt
                            </Option>
                            <Option label="Côn Đảo" value="Côn Đảo">
                              Côn Đảo
                            </Option>
                            <Option label="Hà Nội" value="Hà Nội">
                              Hà Nội
                            </Option>
                          </Select>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Form.Item label="Nội dung">
                      <TextArea
                        autosize={{ minRows: 6, maxRows: 12 }}
                        placeholder="Nhập nội dung"
                      />
                    </Form.Item>
                    <Form.Item>
                      <div style={{ float: 'right', marginTop: '20px' }}>
                        <Button style={{ marginRight: '20px' }}>
                          <Icon type="upload" /> Đăng hình
                        </Button>
                        <Button type="primary">Đăng bài</Button>
                      </div>
                    </Form.Item>
                  </Form>
                </TabPane>
                {/* Tag bài viết reviews */}
                <TabPane
                  key="2"
                  tab={(
                    <Text>
                      <Icon type="form" />
                      Bài viết
                    </Text>
                  )}
                >
                  <Form layout="vertical">
                    <Form.Item label="Tiêu đề">
                      <Input placeholder="Nhập tiêu đề" size="large" />
                    </Form.Item>
                    <Form.Item label="Mô tả">
                      <Input placeholder="Nhập mô tả" size="large" />
                    </Form.Item>
                    <Row>
                      <Col span={12} style={{ paddingRight: '20px' }}>
                        <Form.Item label="Gắn thẻ">
                          <Select
                            mode="multiple"
                            optionLabelProp="label"
                            placeholder="Chọn thẻ bài viết"
                            style={{ width: '100%' }}
                          >
                            <Option label="Ăn uống" value="Ăn uống">
                              Ăn uống
                            </Option>
                            <Option label="Vui chơi giải trí" value="Vui chơi giải trí">
                              Vui chơi giải trí
                            </Option>
                            <Option label="Tham quan" value="Tham quan">
                              Tham quan
                            </Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item label="Địa điểm">
                          <Select
                            defaultValue={['Nha Trang']}
                            mode="multiple"
                            optionLabelProp="label"
                            placeholder="Chọn địa điểm"
                            style={{ width: '100%' }}
                          >
                            <Option label="Nha Trang" value="Nha Trang">
                              Nha Trang
                            </Option>
                            <Option label="Đà Nẵng" value="Đà Nẵng">
                              Đà Nẵng
                            </Option>
                            <Option label="Phú Quốc" value="Phú Quốc">
                              Phú Quốc
                            </Option>
                            <Option label="Đà Lạt" value="Đà Lạt">
                              Đà Lạt
                            </Option>
                            <Option label="Côn Đảo" value="Côn Đảo">
                              Côn Đảo
                            </Option>
                            <Option label="Hà Nội" value="Hà Nội">
                              Hà Nội
                            </Option>
                          </Select>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Form.Item label="Nội dung">
                      <TextArea
                        autosize={{ minRows: 6, maxRows: 12 }}
                        placeholder="Nhập nội dung"
                      />
                    </Form.Item>
                    <Form.Item>
                      <div style={{ float: 'right', marginTop: '20px' }}>
                        <Button style={{ marginRight: '20px' }}>
                          <Icon type="upload" /> Đăng hình
                        </Button>
                        <Button type="primary">Đăng bài</Button>
                      </div>
                    </Form.Item>
                  </Form>
                </TabPane>
                {/* Tag tour du lịch, chỉ các tài khoản được duyệt là HDV mới hiển thị */}
                <TabPane
                  key="3"
                  tab={(
                    <Text>
                      <Icon type="book" />
                      Tour du lịch
                    </Text>
                  )}
                >
                  <Form layout="vertical">
                    <Form.Item label="Tiêu đề">
                      <Input placeholder="Nhập tiêu đề" size="large" />
                    </Form.Item>
                    <Form.Item label="Mô tả">
                      <Input placeholder="Nhập mô tả" size="large" />
                    </Form.Item>
                    <Row>
                      <Col span={12} style={{ paddingRight: '20px' }}>
                        <Form.Item label="Gắn thẻ">
                          <Select
                            defaultValue={['Tham quan']}
                            mode="multiple"
                            optionLabelProp="label"
                            placeholder="Chọn thẻ bài viết"
                            style={{ width: '100%' }}
                          >
                            <Option label="Ăn uống" value="Ăn uống">
                              Ăn uống
                            </Option>
                            <Option label="Vui chơi giải trí" value="Vui chơi giải trí">
                              Vui chơi giải trí
                            </Option>
                            <Option label="Tham quan" value="Tham quan">
                              Tham quan
                            </Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item label="Địa điểm">
                          <Select
                            mode="multiple"
                            optionLabelProp="label"
                            placeholder="Chọn địa điểm"
                            style={{ width: '100%' }}
                          >
                            <Option label="Nha Trang" value="Nha Trang">
                              Nha Trang
                            </Option>
                            <Option label="Đà Nẵng" value="Đà Nẵng">
                              Đà Nẵng
                            </Option>
                            <Option label="Phú Quốc" value="Phú Quốc">
                              Phú Quốc
                            </Option>
                            <Option label="Đà Lạt" value="Đà Lạt">
                              Đà Lạt
                            </Option>
                            <Option label="Côn Đảo" value="Côn Đảo">
                              Côn Đảo
                            </Option>
                            <Option label="Hà Nội" value="Hà Nội">
                              Hà Nội
                            </Option>
                          </Select>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Form.Item label="Nội dung">
                      <TextArea
                        autosize={{ minRows: 6, maxRows: 12 }}
                        placeholder="Nhập nội dung"
                      />
                    </Form.Item>
                    <Form.Item>
                      <div style={{ float: 'right', marginTop: '20px' }}>
                        <Button style={{ marginRight: '20px' }}>
                          <Icon type="upload" /> Đăng hình
                        </Button>
                        <Button type="primary">Đăng bài</Button>
                      </div>
                    </Form.Item>
                  </Form>
                </TabPane>
              </Tabs>
            </Card>
            {/* Hiển thị nội dung bài viết có comment */}
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
                  <IconText text="Đà Nẵng, Nha Trang" type="environment" />
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
                  <IconText text="Đà Nẵng, Nha Trang" type="environment" />
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
            {/* Danh sách bài viết nổi bật */}
            <Card title="Bài viết nổi bật">
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
            {/* Tag */}
            <Card className="p-card" title="Thẻ">
              <Tag color="volcano">Ăn uống</Tag>
              <Tag color="geekblue">Vui chơi</Tag>
              <Tag color="purple">Tham quan</Tag>
            </Card>
            {/* Địa điểm */}
            <Card className="p-card" title="Địa điểm">
              <Tag>Nha Trang</Tag>
              <Tag>Đà Lạt</Tag>
              <Tag>Đà Nẵng</Tag>
              <Tag>Phú Quốc</Tag>
              <Tag>Vinh</Tag>
            </Card>
          </Col>
        </Row>
      </Content>
    );
  }
}

export default content;

content.displayName = 'Content';
