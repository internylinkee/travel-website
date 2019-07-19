import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Content>
        <p>Tạo bài viết</p>
      </Content>
    );
  }
}

export default CreatePost;
