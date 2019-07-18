import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

class Albums extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Content>
        <p>Albums</p>
      </Content>
    );
  }
}

export default Albums;
