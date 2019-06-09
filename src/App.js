import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RenderRoutes } from 'routes';
import { MasterLayout } from 'containers';
import 'app.less';
import 'assets/style/main.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // check token in props.auth & call API to get '/me'
  }

  render() {
    return (
      <MasterLayout
        history={this.props.history}
      >
        <RenderRoutes history={this.props.history} routes={this.props.routes} />
      </MasterLayout>
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
