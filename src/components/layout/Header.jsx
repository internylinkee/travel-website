import React from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

class header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Header>
        Header
      </Header>
    );
  }
}

export default header;

header.displayName = 'Header';
