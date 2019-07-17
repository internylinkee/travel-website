import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RenderRoutes } from 'routes';
import { MasterLayout } from 'containers';
import 'app.less';
import 'assets/style/main.css';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log('PROPS', this.props);
    // console.log('authInfo', cookies.get('authInfo'));
    return (
      <RenderRoutes history={this.props.history} routes={this.props.routes} />
    );
  }
}

App.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired
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
)(App);
