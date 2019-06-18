import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Layout } from 'antd';
import {
  Header as HeaderComponent,
  SidebarLeft as SidebarLeftComponent,
  SidebarRight as SidebarRightComponent
} from 'components/layout';

class MasterLayout extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout>
        <HeaderComponent />
        <Layout>
          <SidebarLeftComponent />
          <div className="b-container">
            {this.props.children}
          </div>
          <SidebarRightComponent />
        </Layout>
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
