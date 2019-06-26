import React from 'react';
import {
  Layout,
  Row,
  Col
} from 'antd';
import { HeaderProfile, ListAlbums } from 'components/users';
import {
  ListFeaturedPosts,
  ListHorizontalPosts,
  ListAuthor
} from 'components/post';

const { Content } = Layout;

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Content>
        <HeaderProfile />
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

export default Profile;
