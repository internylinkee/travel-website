import React from 'react';
import { Layout } from 'antd';
import { HeaderProfile } from 'components/users';

const { Content } = Layout;

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Content>
        <HeaderProfile />
      </Content>
    );
  }
}

export default AboutMe;
