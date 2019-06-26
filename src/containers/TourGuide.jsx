import React from 'react';
import {
  Layout,
  Row,
  Col,
  Card,
  Typography,
  Select
} from 'antd';
import {
  ListTourGuides
} from 'components/users';

const { Content } = Layout;
const { Title } = Typography;
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
          <ListTourGuides />
          <ListTourGuides />
          <ListTourGuides />
          <ListTourGuides />
          <ListTourGuides />
          <ListTourGuides />
        </Row>
      </Content>
    );
  }
}

export default TourGuide;
