import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Content>
        <p>About me</p>
      </Content>
    );
  }
}

export default AboutMe;
