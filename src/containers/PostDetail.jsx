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
  getDetailPost,
  getListFeaturedPost
} from 'actions';
import Helpers from 'helpers';
import {
  DetailPostInfo,
  ListCategories,
  ListLocations,
  ListFeaturedPosts,
  CommentsPost
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

class PostDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      isError: false,
      postId: null,
      detailPost: null,
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
   * @memberof PostDetail
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
   * @memberof PostDetail
   */
  loadData = async () => {
    let isError = false;
    try {
      // set loading
      await this.setStateData({ loading: true });
      // get params
      const { postId } = this.getParams();
      // get chi tiết bài viết nếu tồn tại postId
      const detailPost = await this.getDetailPost(postId);
      const featuredPosts = await this.getFeaturedPosts();
      await this.setStateData({ detailPost, featuredPosts });
    } catch (error) {
      isError = true;
    } finally {
      // set loading
      await this.setStateData({ isError, loading: false });
    }
  }

  /**
   * Reload data
   * @returns {void} update state
   * @memberof PostDetail
   */
  reloadData = async () => {
    let isError = false;
    try {
      // get params
      const { postId } = this.getParams();
      // get chi tiết bài viết nếu tồn tại postId
      const detailPost = await this.getDetailPost(postId);
      const featuredPosts = await this.getFeaturedPosts();
      await this.setStateData({ detailPost, featuredPosts });
    } catch (error) {
      isError = true;
    } finally {
      // set loading
      if (isError) {
        await this.setStateData({ isError });
      }
    }
  }

  /**
   * Get params: postId
   * @returns {object}
   * @memberof PostDetail
   */
  getParams = () => {
    const postId = get(this.props.match, 'params.id');
    return { postId };
  }

  /**
   * Get thông tin chi tiết bài viết từ API
   * @param {string} postId Id của bài viết
   * @returns {object} Thông tin chi tiết
   * @memberof PostDetail
   */
  getDetailPost = async (postId) => {
    if (!postId) {
      return null;
    }
    const response = await this.props.actions.getDetailPost(postId) || {};
    if (!isEmpty(response.error) || isEmpty(response.payload)) {
      Helpers.throwError(response.error);
    }
    return get(response, 'payload.post', null);
  }

  /**
   * Lấy danh sách bài viết nổi bật có type "review"
   * @return {object}
   * @memberof PostDetail
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
   * Reload page
   * @returns {void}
   * @memberof PostDetail
   */
  reloadPage = () => {
    this.props.history.replace('/reload');
    setTimeout(() => {
      this.props.history.replace('/');
    });
  }

  render() {
    return (
      <LoadingWrapper
        isEmpty={isEmpty(this.state.detailPost) && isEmpty(this.state.featuredPosts)}
        isError={this.state.isError}
        loading={this.state.loading}
      >
        {/* Content Page */}
        <Row>
          <Col className="p-col" span={16}>
            <DetailPostInfo
              data={this.state.detailPost}
              history={this.props.history}
              onReload={this.reloadData}
              postId={this.state.postId}
            />

            {/* Phần Comment */}
            <CommentsPost />
          </Col>
          {/* Thanh thông tin hiển thị các nội dung khác */}
          <Col className="p-col" span={8}>
            {/* Danh sách bài viết nổi bật */}
            <ListFeaturedPosts data={this.state.featuredPosts} />
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

PostDetail.propTypes = {
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getDetailPost,
    getListFeaturedPost
  }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);
