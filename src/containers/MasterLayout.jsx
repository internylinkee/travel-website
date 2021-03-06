import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Layout } from 'antd';
import {
  Header,
  SidebarLeft,
  SidebarRight
} from 'components/layout';
import {
  logout
} from 'actions';

class MasterLayout extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout>
        <Header actions={this.props.actions} auth={this.props.auth} history={this.props.history} />
        <Layout>
          <SidebarLeft match={this.props.match} />
          <div className="b-container">
            {this.props.children}
          </div>
          <SidebarRight />
        </Layout>
      </Layout>
    );
  }
}

MasterLayout.propTypes = {
  children: PropTypes.node.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
  auth: PropTypes.objectOf(PropTypes.any).isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    logout
  }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MasterLayout);
