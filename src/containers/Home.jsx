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
import {
  FormPost,
  ListHorizontalPosts,
  ListFeaturedPosts,
  ListLocations,
  ListCategories
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

const FAKE_AUTHORS = [
  {
    fullName: 'David Joe',
    followerCount: 10,
    postCount: 15
  },
  {
    fullName: 'Henry William',
    followerCount: 2,
    postCount: 3
  },
  {
    fullName: 'Sara Morgan',
    followerCount: 0,
    postCount: 10
  }
];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      isError: false,
      mainPosts: [],
      featuredPosts: [],
      authors: []
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
   * @memberof Home
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
   * @memberof Home
   */
  loadData = async () => {
    let isError = false;
    try {
      // set loading
      await this.setStateData({ loading: true });
      const mainPosts = await this.getMainPosts();
      const featuredPosts = await this.getFeaturedPosts();
      const authors = await this.getAuthors();
      await this.setStateData({ mainPosts, featuredPosts, authors });
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
   * @memberof Home
   */
  getMainPosts = async () => {
    const response = await this.props.actions.getListPost() || {};
    // if error
    if (!isEmpty(response.error)) {
      Helpers.throwError(response.error);
    }
    return get(response, 'payload');
  }

  /**
   * Lấy danh sách bài viết nổi bật
   * @return {object}
   * @memberof Home
   */
  getFeaturedPosts = async () => {
    const response = await this.props.actions.getListFeaturedPost() || {};
    // if error
    if (!isEmpty(response.error)) {
      Helpers.throwError(response.error);
    }
    return get(response, 'payload');
  }

  /**
   * TODO: ráp API Lấy danh sách tác giả được yêu thích
   * @return {object}
   * @memberof Home
   */
  getAuthors = async () => {
    const response = { payload: FAKE_AUTHORS };
    // if error
    if (!isEmpty(response.error)) {
      Helpers.throwError(response.error);
    }
    return get(response, 'payload');
  }

  /**
   * Reload page
   * @returns {void}
   * @memberof Home
   */
  reloadPage = () => {
    this.componentDidMount();
  }

  /**
   * Điều kiện show editor
   * @returns {boolean}
   * @memberof Home
   */
  isShowEditor = () => !!get(this.props.auth, 'isAuthenticated')

  render() {
    return (
      <LoadingWrapper
        isEmpty={isEmpty(this.state.mainPosts) && isEmpty(this.state.featuredPosts)}
        isError={this.state.isError}
        loading={this.state.loading}
      >
        <Row>
          <Col className="p-col" span={16}>
            {/* Form Edittor */}
            {this.isShowEditor() && (
              <FormPost onAfterSubmit={this.reloadPage} />
            )}
            {/* Hiển thị nội dung bài viết có comment */}
            <ListHorizontalPosts
              data={this.state.mainPosts}
              history={this.props.history}
            />
          </Col>
          {/* Thanh thông tin hiển thị các nội dung khác */}
          <Col className="p-col" span={8}>
            {/* Danh sách bài viết nổi bật */}
            <ListFeaturedPosts data={this.state.featuredPosts} />
            {/* Phần Tác giả được Yêu thích */}
            {/* Thẻ */}
            <ListCategories />
            {/* Địa điểm */}
            <ListLocations />
          </Col>
        </Row>
      </LoadingWrapper>
    );
  }
}

Home.propTypes = {
  auth: PropTypes.objectOf(PropTypes.any).isRequired,
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired
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
)(Home);
