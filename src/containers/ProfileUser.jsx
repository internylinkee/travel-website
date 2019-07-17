import React from 'react';
import {
  Layout,
  Row,
  Col
} from 'antd';
import { HeadingProfile, ListAlbums } from 'components/user';
import {
  ListFeaturedPosts,
  ListHorizontalPosts,
  ListAuthor
} from 'components/post';

const { Content } = Layout;

class ProfileUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Content>
        <HeadingProfile />
        <Row>
          {/* Danh sach tat ca cac bai viet */}
          <Col className="p-col" span={16}>
            <ListHorizontalPosts />
          </Col>

          {/* Thanh thông tin hiển thị các nội dung khác */}
          <Col className="p-col" span={8}>
            {/* Danh sách bài viết nổi bật */}
            <ListFeaturedPosts />

            {/* Phần Tác giả được Yêu thích */}
            <ListAuthor />

            {/* Album ảnh */}
            <ListAlbums />
          </Col>
        </Row>
      </Content>
    );
  }
}

export default ProfileUser;
