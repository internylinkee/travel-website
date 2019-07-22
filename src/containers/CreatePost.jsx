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
  getDetailPost
} from 'actions';
import Helpers from 'helpers';
import {
  FormPost
} from 'components/post';
import { LoadingWrapper } from 'components/common';
import messages from 'constants/messages';

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

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      isError: false,
      postId: null,
      detailPost: null
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
   * @memberof CreatePost
   */
  setStateData = (state, callback) => {
    if (!getIsMounted()) {
      return;
    }
    this.setState(state, callback);
  }

  /**
   * Get params: postId
   * @returns {object}
   * @memberof CreatePost
   */
  getParams = () => {
    const postId = get(this.props.match, 'params.id');
    return { postId };
  }

  /**
   * Get thông tin chi tiết bài viết từ API
   * @param {string} postId Id của bài viết
   * @returns {object} Thông tin chi tiết
   * @memberof CreatePost
   */
  getDetailPost = async (postId) => {
    if (!postId) {
      return null;
    }
    const response = await this.props.actions.getDetailPost(postId) || {};
    if (!isEmpty(response.error) || isEmpty(response.payload)) {
      Helpers.throwError(response.error || messages.ERROR_SYSTEM);
    }
    return get(response, 'payload.post', null);
  }

  /**
   * Load data
   * @returns {void} update state
   * @memberof CreatePost
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
      await this.setStateData({ detailPost, postId });
    } catch (error) {
      isError = true;
    } finally {
      // set loading
      await this.setStateData({ isError, loading: false });
    }
  }

  /**
   * Reload page
   * @returns {void}
   * @memberof CreatePost
   */
  reloadPage = () => {
    Helpers.reloadPage(this.props.history);
  }

  /**
   * Điều kiện show editor
   * @returns {boolean}
   * @memberof CreatePost
   */
  isShowEditor = () => !!get(this.props.auth, 'isAuthenticated')

  render() {
    return (
      <LoadingWrapper
        isError={this.state.isError}
        loading={this.state.loading}
      >
        <Row>
          <Col className="p-col" span={24}>
            {/* Form Edittor */}
            {this.isShowEditor() && (
              <FormPost
                detailPost={this.state.detailPost}
                onAfterSubmit={this.reloadPage}
                postId={this.state.postId}
              />
            )}
          </Col>
        </Row>
      </LoadingWrapper>
    );
  }
}

CreatePost.propTypes = {
  auth: PropTypes.objectOf(PropTypes.any).isRequired,
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getDetailPost
  }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePost);
