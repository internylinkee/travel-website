import React from 'react';
import { Layout } from 'antd';

const { Header: HeaderAntd } = Layout;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <HeaderAntd>
        Header
      </HeaderAntd>
    );
  }
}

export default Header;
