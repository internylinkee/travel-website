import React from 'react';
import {
  Layout,
  Row,
  Col
} from 'antd';
import {
  ListFeaturedPosts,
  ListAuthor,
  ListTags,
  ListHorizontalPosts
} from 'components/post';
import { HeaderPages } from 'common';

const { Content } = Layout;

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Content>
        {/* Header Page */}
        <HeaderPages />

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

            {/* Địa điểm */}
            <ListTags />
          </Col>
        </Row>
      </Content>
    );
  }
}

export default Posts;
