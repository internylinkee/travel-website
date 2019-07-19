import React from 'react';
import moment from 'moment';
import {
  Card,
  Row,
  Button,
  Tooltip,
  Avatar,
  Divider,
  Tag,
  Typography,
  Col,
  Form,
  Input,
  DatePicker,
  Radio
} from 'antd';

const { Meta } = Card;
const { Title } = Typography;

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

// Form infomation User
const formItemLayout = {
  style: { margin: '30px auto' },
  labelCol: { span: 6 },
  wrapperCol: { span: 18 }
};
const formResetPass = {
  style: { width: '60%', margin: '30px auto' },
  labelCol: { span: 6 },
  wrapperCol: { span: 18 }
};
const inputLayout = {
  size: 'large'
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 12, offset: 12 }
};

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  state = {
    value: 1
  };

  onChange = (e) => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    return (
      <Row style={{ padding: '15px' }}>
        <Card
          extra={(
            <Tooltip placement="top" title="Chỉnh sửa thông tin">
              <Button ghost href="/" icon="edit" shape="circle" type="primary" />
            </Tooltip>
          )}
          title="Thông tin cơ bản"
        >
          <Row>
            <Col span={8}>
              <Card
                bordered={false}
                cover={(
                  <Avatar
                    size={256}
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    style={{ margin: '25px auto', display: 'inherit' }}
                  />
                )}

                style={{ margin: '0 auto' }}
              >
                <Meta
                  description={(
                    <Divider>
                      <Tag color="#2db7f5" style={{ marginRight: 0 }}>Tour Guide</Tag>
                    </Divider>
                  )}
                  style={{ textAlign: 'center' }}
                  title={(
                    <Title
                      level={2}
                      style={{ marginBottom: 0 }}
                    >
                      Van Vy
                    </Title>
                  )}
                />
                <Row style={{ textAlign: 'center', marginTop: '15px' }}>
                  <Col span={8}>
                    <Meta description="Theo dõi" title="124" />
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
            <Col span={16}>
              <Form layout="horizontal">
                {/* Firt Name */}
                <Form.Item label="Tên" {...formItemLayout}>
                  <Input placeholder="Vy" {...inputLayout} />
                </Form.Item>
                {/* Last Name */}
                <Form.Item label="Họ" {...formItemLayout}>
                  <Input placeholder="Van" {...inputLayout} />
                </Form.Item>
                <Form.Item label="Email" {...formItemLayout}>
                  <Input placeholder="abc@gmail.com" {...inputLayout} disabled />
                </Form.Item>
                <Form.Item label="Số điện thoại" {...formItemLayout}>
                  <Input placeholder="Nhập số điện thoại" {...inputLayout} />
                </Form.Item>
                <Form.Item label="Giới tính" {...formItemLayout}>
                  <Radio.Group onChange={this.onChange} value={this.state.value}>
                    <Radio value={1}>Nam</Radio>
                    <Radio value={2}>Nữ</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item label="Ngày sinh" {...formItemLayout}>
                  <DatePicker
                    defaultValue={moment('01/01/2015', dateFormatList[0])}
                    format={dateFormatList}
                    placeholder="Chọn ngày sinh"
                    {...inputLayout}
                  />
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Card>
        <Card
          style={{ marginTop: '15px' }}
          title="Đổi mật khẩu"
        >
          <Form layout="horizontal">
            {/* Firt Name */}
            <Form.Item label="Mật khẩu cũ" {...formResetPass}>
              <Input placeholder="******" {...inputLayout} type="password" />
            </Form.Item>
            {/* Last Name */}
            <Form.Item label="Mật khẩu mới" {...formResetPass}>
              <Input placeholder="******" {...inputLayout} type="password" />
            </Form.Item>
            <Form.Item label="Nhập lại mật khẩu mới" {...formResetPass}>
              <Input placeholder="******" {...inputLayout} type="password" />
            </Form.Item>
            <Form.Item {...formResetPass} {...formTailLayout}>
              <Button type="primary">Submit</Button>
              <Button style={{ marginLeft: '15px' }}>Cancel</Button>
            </Form.Item>
          </Form>
        </Card>
      </Row>
    );
  }
}

export default AboutMe;
