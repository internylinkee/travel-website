import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Row,
  Col
} from 'antd';
import { get, isEmpty } from 'lodash';
import {
  getListPost,
  getListFeaturedPost
} from 'actions';
import Helpers from 'helpers';
import messages from 'constants/messages';
import {
  ListHorizontalPosts,
  ListFeaturedPosts
} from 'components/post';
import { LoadingWrapper } from 'components/common';

let isMounted = true;

/**
 * Set isMounted
 * @param {boolean} value
 */
const setIsMounted = (value = true) => {
  isMounted = value;
  return isMounted;
};

/**
 * Get isMounted
 */
const getIsMounted = () => isMounted;

class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      isError: false,
      mainPosts: [],
      featuredPosts: []
    };
    setIsMounted(true);
  }

  async componentDidMount() {
    // load data lần đầu
    await this.loadData();
  }

  componentWillUnmount() {
    setIsMounted(false);
  }

  /**
   * Set state properties
   * @param {object} data the data which will be merged to this.state
   * @param {function} callback the function which will be called after setState
   * @returns {void} call this.setState to update state
   * @memberof Timeline
   */
  setStateData = (state, callback) => {
    if (!getIsMounted()) {
      return;
    }
    this.setState(state, callback);
  }

  /**
   * Load data
   * @returns {void} update state
   * @memberof Timeline
   */
  loadData = async () => {
    let isError = false;
    try {
      // set loading
      await this.setStateData({ loading: true });
      const mainPosts = await this.getMainPosts();
      const featuredPosts = await this.getFeaturedPosts();
      await this.setStateData({ mainPosts, featuredPosts });
    } catch (error) {
      isError = true;
    } finally {
      // set loading
      await this.setStateData({ isError, loading: false });
    }
  }

  /**
   * Lấy danh sách bài viết
   * @return {object}
   * @memberof Timeline
   */
  getMainPosts = async () => {
    if (!this.props.userId) {
      Helpers.throwError(messages.ERROR_SYSTEM);
    }
    const params = { user: this.props.userId };
    const response = await this.props.actions.getListPost(params) || {};
    // if error
    if (!isEmpty(response.error)) {
      Helpers.throwError(response.error);
    }
    return get(response, 'payload');
  }

  /**
   * Lấy danh sách bài viết nổi bật
   * @return {object}
   * @memberof Timeline
   */
  getFeaturedPosts = async () => {
    if (!this.props.userId) {
      Helpers.throwError(messages.ERROR_SYSTEM);
    }
    const params = { user: this.props.userId };
    const response = await this.props.actions.getListFeaturedPost(params) || {};
    // if error
    if (!isEmpty(response.error)) {
      Helpers.throwError(response.error);
    }
    return get(response, 'payload');
  }

  render() {
    return (
      <LoadingWrapper
        isEmpty={isEmpty(this.state.mainPosts) && isEmpty(this.state.featuredPosts)}
        isError={this.state.isError}
        loading={this.state.loading}
      >
        <Row>
          {/* Danh sach tat ca cac bai viet */}
          <Col className="p-col" span={16}>
            <ListHorizontalPosts data={this.state.mainPosts} />
          </Col>

          {/* Thanh thông tin hiển thị các nội dung khác */}
          <Col className="p-col" span={8}>
            {/* Danh sách bài viết nổi bật */}
            <ListFeaturedPosts data={this.state.featuredPosts} />
          </Col>
        </Row>
      </LoadingWrapper>
    );
  }
}

Timeline.propTypes = {
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
  userId: PropTypes.string
};

Timeline.defaultProps = {
  userId: ''
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getListPost,
    getListFeaturedPost
  }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timeline);
