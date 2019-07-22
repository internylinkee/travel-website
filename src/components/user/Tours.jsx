import React from 'react';
import moment from 'moment';
import {
  Row,
  Empty,
  Button,
  Col,
  Card,
  Form,
  Input,
  Radio,
  DatePicker
} from 'antd';
import TextArea from 'antd/lib/input/TextArea';

const formItemLayout = {
  style: { margin: '30px auto' },
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
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

class Tours extends React.Component {
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
      <React.Fragment>
        <Row style={{ padding: '0 15px' }}>
          <Empty
            className="empty"
            description={(
              <span>
                Bạn chưa có thông tin làm Hướng dẫn viên
              </span>
            )}
            image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
            imageStyle={{
              height: 60
            }}
          >
            <Button type="primary">Tạo thông tin</Button>
          </Empty>
          {/* Form đăng kí làm HDV */}
          <Card
            title="Đăng kí Hướng dẫn viên"
          >
            <Row>
              <Col span={20}>
                <Form layout="horizontal">
                  {/* Firt Name */}
                  <Form.Item label="Tên" {...formItemLayout}>
                    <Input defaultValue="Vy" placeholder="Nhập tên" {...inputLayout} />
                  </Form.Item>
                  {/* Last Name */}
                  <Form.Item label="Họ" {...formItemLayout}>
                    <Input defaultValue="Van" placeholder="Nhập họ" {...inputLayout} />
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
                  <Form.Item label="Bằng cấp - Chứng chỉ" {...formItemLayout}>
                    <Input placeholder="Nhập bằng cấp, chứng chỉ" {...inputLayout} />
                  </Form.Item>
                  <Form.Item label="Quê quán" {...formItemLayout}>
                    <Input placeholder="Nhập quê quán" {...inputLayout} />
                  </Form.Item>
                  <Form.Item label="Ngoại ngữ" {...formItemLayout}>
                    <Input placeholder="Nhập ngôn ngữ" {...inputLayout} />
                  </Form.Item>
                  <Form.Item label="Kinh nghiệm" {...formItemLayout}>
                    <TextArea
                      autosize={{ minRows: 3 }}
                      placeholder="Nhập kinh nghiệm "
                      {...inputLayout}
                    />
                  </Form.Item>
                  <Form.Item label="Mô tả bản thân" {...formItemLayout}>
                    <TextArea
                      autosize={{ minRows: 6, maxRows: 12 }}
                      placeholder="Nhập mô tả"
                      {...inputLayout}
                    />
                  </Form.Item>
                  <Form.Item {...formTailLayout}>
                    <Button style={{ marginRight: '15px' }}>Hủy</Button>
                    <Button type="primary">Lưu</Button>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </Card>

        </Row>
      </React.Fragment>
    );
  }
}

export default Tours;
