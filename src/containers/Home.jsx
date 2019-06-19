import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

class content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Content>
        Content page Home
      </Content>
    );
  }
}

export default content;

content.displayName = 'Content';
