import React from 'react';
import {
  Row,
  Col,
  Card,
  Tabs,
  Input,
  Icon,
  Typography,
  Form,
  Select,
  Button
} from 'antd';

const { TabPane } = Tabs;
const { TextArea } = Input;
const { Text } = Typography;
const { Option } = Select;

class FormPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
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
    );
  }
}

export default FormPost;
