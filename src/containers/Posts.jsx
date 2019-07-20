import React from 'react';
import {
  Layout,
  Row,
  Col,
  Cascader
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

const options = [
  {
    value: 'Reviews',
    label: 'Bài đánh giá',
    children: [
      {
        value: 'love',
        label: 'Yêu thích nhất',
        children: [
          {
            value: 'eat',
            label: 'Ăn uống'
          },
          {
            value: 'Tham quan',
            label: 'Tham quan'
          },
          {
            value: 'Vui chơi',
            label: 'Vui chơi'
          }
        ]
      },
      {
        value: 'comment',
        label: 'Bình luận nhiều nhất',
        children: [
          {
            value: 'eat',
            label: 'Ăn uống'
          },
          {
            value: 'Tham quan',
            label: 'Tham quan'
          },
          {
            value: 'Vui chơi',
            label: 'Vui chơi'
          }
        ]
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men'
          }
        ]
      }
    ]
  }
];

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
          <Cascader
            options={options}
            placeholder="Loc bài viết theo ..."
            size="large"
            style={{ width: '100%' }}
          />
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
