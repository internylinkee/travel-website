import React from 'react';
import {
  Layout,
  Row,
  Col
} from 'antd';
import {
  FormPost as FormPostComponent,
  ListHorizontalPosts as ListHorizontalPostsComponent,
  ListFeaturedPosts as ListFeaturedPostsComponent,
  ListAuthor as ListAuthorComponent,
  ListTags as ListTagsComponent
} from 'components/post';

const { Content } = Layout;

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
            {/* 1. Form Edittor */}
            <FormPostComponent />

            {/* 2. Hiển thị nội dung bài viết có comment */}
            <ListHorizontalPostsComponent />
            <ListHorizontalPostsComponent />
            <ListHorizontalPostsComponent />
          </Col>

          {/* Thanh thông tin hiển thị các nội dung khác */}
          <Col className="p-col" span={8}>
            {/* 3. Danh sách bài viết nổi bật */}
            <ListFeaturedPostsComponent />

            {/* 4. Phần Tác giả được Yêu thích */}
            <ListAuthorComponent />

            {/* 5. Tag & Địa điểm */}
            <ListTagsComponent />
          </Col>
        </Row>
      </Content>
    );
  }
}

export default content;

content.displayName = 'Content';
