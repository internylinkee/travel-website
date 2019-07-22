import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Row,
  Col,
  Select
} from 'antd';
import { get, isEmpty } from 'lodash';
import {
  getListPost,
  getListFeaturedPost
} from 'actions';
import Helpers from 'helpers';
import {
  ListHorizontalPosts,
  ListAuthor,
  ListCategories,
  ListLocations,
  ListFeaturedPosts
} from 'components/post';
import { LoadingWrapper, HeadingPage } from 'components/common';
import variables from 'constants/variables';

const { Option } = Select;

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

class Posts extends React.Component {
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
   * @memberof Posts
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
   * Lấy danh sách bài viết có type "review"
   * @return {object}
   * @memberof Posts
   */
  getMainPosts = async () => {
    const params = { type: variables.TYPE_POST.REVIEWS };
    const response = await this.props.actions.getListPost(params) || {};
    // if error
    if (!isEmpty(response.error)) {
      Helpers.throwError(response.error);
    }
    return get(response, 'payload');
  }

  /**
   * Lấy danh sách bài viết nổi bật có type "review"
   * @return {object}
   * @memberof Posts
   */
  getFeaturedPosts = async () => {
    const params = { type: variables.TYPE_POST.REVIEWS };
    const response = await this.props.actions.getListFeaturedPost(params) || {};
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
    this.props.history.replace('/reload');
    setTimeout(() => {
      this.props.history.replace('/');
    });
  }

  render() {
    return (
      <LoadingWrapper
        isEmpty={isEmpty(this.state.mainPosts) && isEmpty(this.state.featuredPosts)}
        isError={this.state.isError}
        loading={this.state.loading}
      >
        {/* Header Page */}
        <HeadingPage title="Danh sách bài viết">
          <Select
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            optionFilterProp="children"
            placeholder="Lọc theo ..."
            showSearch
            size="large"
            style={{ width: '100%' }}
          >
            <Option value="love">Được yêu thích nhất</Option>
            <Option value="commnet">Có nhiều bình luận nhất</Option>
          </Select>
        </HeadingPage>
        {/* Content Page */}
        <Row>
          {/* Danh sach bai viet */}
          <Col className="p-col" span={16}>
            <ListHorizontalPosts data={this.state.mainPosts} />
          </Col>
          {/* Thanh thông tin hiển thị các nội dung khác */}
          <Col className="p-col" span={8}>
            {/* Danh sách bài viết nổi bật */}
            <ListFeaturedPosts data={this.state.featuredPosts} />
            {/* Phần Tác giả được Yêu thích */}
            <ListAuthor />
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

Posts.propTypes = {
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
)(Posts);
