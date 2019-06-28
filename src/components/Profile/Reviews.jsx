import React from 'react';
import {
  Layout,
  Row,
  Col
} from 'antd';
import {
  ListHorizontalPosts,
  ListFeaturedPosts,
  ListAuthor
} from 'components/post';

const { Content } = Layout;

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Content>
        <Row>
          <Col className="p-col" span={16}>
            <ListHorizontalPosts />
          </Col>
          {/* Thanh thông tin hiển thị các nội dung khác */}
          <Col className="p-col" span={8}>
            {/* Danh sách bài viết được yêu thích */}
            <ListFeaturedPosts />

            {/* Phần Tác giả được Yêu thích */}
            <ListAuthor />

            {/* Album ảnh */}
          </Col>
        </Row>
      </Content>
    );
  }
}

export default Reviews;
