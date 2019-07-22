import React from 'react';
import {
  Layout,
  Row,
  Col,
  Select
} from 'antd';
import {
  ListFeaturedPosts,
  ListAuthor,
  ListLocations,
  ListHorizontalPosts,
  ListCategories
} from 'components/post';
import { HeadingPage } from 'components/common';

const { Content } = Layout;
const { Option } = Select;

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Content>
        {/* Header Page */}
        <HeadingPage title="Danh sách bài viết">
          <Select
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            optionFilterProp="children"
            placeholder="Lọc theo ..."
            showSearch
            size="large"
            style={{ width: '100%' }}
          >
            <Option value="love">Được yêu thích nhất</Option>
            <Option value="commnet">Có nhiều bình luận nhất</Option>
          </Select>
        </HeadingPage>
        {/* Content Page */}
        <Row>
          {/* Danh sach bai viet */}
          <Col className="p-col" span={16}>
            <ListHorizontalPosts />
          </Col>
          {/* Thanh thông tin hiển thị các nội dung khác */}
          <Col className="p-col" span={8}>
            {/* Danh sách bài viết nổi bật */}
            <ListFeaturedPosts />
            {/* Phần Tác giả được Yêu thích */}
            <ListAuthor />
            {/* Thẻ */}
            <ListCategories />
            {/* Địa điểm */}
            <ListLocations />
          </Col>
        </Row>
      </Content>
    );
  }
}

export default Posts;
