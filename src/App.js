import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LocaleProvider } from 'antd';
import viVN from 'antd/lib/locale-provider/vi_VN';
import { RenderRoutes } from 'routes';
import 'app.less';
import 'assets/style/main.css';
import {
  getListLocation,
  getListCategory,
  cancelCommonAPI
} from 'actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    // Gọi API lấy danh sách địa điểm
    this.props.actions.getListLocation();
    // Gọi API lấy danh sách thẻ
    this.props.actions.getListCategory();
  }

  render() {
    return (
      <LocaleProvider locale={viVN}>
        <RenderRoutes history={this.props.history} routes={this.props.routes} />
      </LocaleProvider>
    );
  }
}

App.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  actions: PropTypes.objectOf(PropTypes.any).isRequired
  // auth: PropTypes.objectOf(PropTypes.any).isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getListLocation,
    getListCategory,
    cancelCommonAPI
  }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
