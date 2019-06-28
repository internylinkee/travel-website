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
} from 'components/user';
import { HeadingPage } from 'components/common';

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
        <HeadingPage title="Hướng dẫn viên">
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
        </HeadingPage>
        {/* Danh sách Hướng DV */}
        <Row gutter={24} style={{ margin: '20px' }}>
          <ListTourGuides />
        </Row>
      </Content>
    );
  }
}

export default TourGuide;
