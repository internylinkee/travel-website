import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Layout } from 'antd';
import {
  Header as HeaderComponent,
  Sidebar as SidebarComponent,
  Footer as FooterComponent
} from 'components/layout';

const {
  Header,
  Footer,
  Sider,
  Content
} = Layout;

class MasterLayout extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout>
        <Header>
          <HeaderComponent />
        </Header>
        <Layout>
          <Sider>
            <SidebarComponent />
          </Sider>
          <Content>
            {this.props.children}
          </Content>
        </Layout>
        <Footer>
          <FooterComponent />
        </Footer>
      </Layout>
    );
  }
}

MasterLayout.propTypes = {
  children: PropTypes.node.isRequired
  // history: PropTypes.objectOf(PropTypes.any).isRequired,
  // actions: PropTypes.objectOf(PropTypes.any).isRequired,
  // auth: PropTypes.objectOf(PropTypes.any).isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({

  }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MasterLayout);
