import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Row,
  Col,
  Card,
  Typography,
  Divider,
  Tag,
  Avatar,
  List,
  Button
} from 'antd';
import {
  get,
  isArray,
  isEmpty,
  isFunction
} from 'lodash';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import {
  deletePost,
  putLikePost
} from 'actions';
import variables from 'constants/variables';
import Helpers from 'helpers';
import { IconText, LoadingWrapper, Modal } from 'components/common';
import { CommentsPost } from 'components/post';
import messages from 'constants/messages';

const { Title, Text, Paragraph } = Typography;
const ListItem = List.Item;

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

class HorizontalPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowedCommentBox: {}
    };
    setIsMounted(true);
  }

  componentWillUnmount() {
    setIsMounted(false);
  }

  /**
   * Set state properties
   * @param {object} data the data which will be merged to this.state
   * @param {function} callback the function which will be called after setState
   * @returns {void} call this.setState to update state
   * @memberof HorizontalPosts
   */
  setStateData = (state, callback) => {
    if (!getIsMounted()) {
      return;
    }
    this.setState(state, callback);
  }

  renderContent = (post) => {
    if (get(post, 'type') === variables.TYPE_POST.QUESTION) {
      return (
        <React.Fragment>
          <Title level={3}>{get(post, 'title')}</Title>
          <Paragraph className="pre-line" ellipsis={{ rows: 6 }}>
            {get(post, 'content')}
          </Paragraph>
          {/* TODO: cần hiển thị hình ảnh của bài viết theo grid */}
          <div style={{ height: '350px', margin: '0 -25px 20px' }}>
            <img
              alt="Ảnh"
              src={get(post, 'featureImage')}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <div style={{ height: '350px', margin: '0 -25px 20px' }}>
          <img
            alt="Ảnh bìa"
            src={get(post, 'featureImage')}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <Title level={3}>{get(post, 'title')}</Title>
        <Paragraph ellipsis={{ rows: 6 }}>
          {get(post, 'description')}
        </Paragraph>
        <Link to={`/posts/${get(post, 'id')}/detail`}>
          <Button size="large">Xem thêm</Button>
        </Link>
      </React.Fragment>
    );
  }

  /**
   * Render Tags
   * @param {object} post data of a post
   * @returns {node} the list of tags
   * @memberof HorizontalPosts
   */
  renderTags = (post) => {
    const colors = variables.COLOR;
    const tags = (get(post, 'categories', []) || []).map(catg => catg.name);
    if (!isArray(tags)) {
      return null;
    }
    return (
      <span className="tag-post">
        {tags.map((tag, index) => (
          <Tag key={index} color={colors[Math.floor(Math.random() * colors.length)]}>{tag}</Tag>
        ))}
      </span>
    );
  }

  /**
   * Lấy thông tin của một user trong bài viết
   * @param {object} post
   * @returns {object}
   * @memberof HorizontalPosts
   */
  getUserInfo = (post) => {
    const id = get(post, 'user.id');
    const lastName = get(post, 'user.fullName.lastName');
    const firstName = get(post, 'user.fullName.firstName');
    const name = `${lastName} ${firstName}` || '';
    const avatar = get(post, 'user.avatar') || '';
    const location = (get(post, 'locations', []) || []).map(item => item.name).join(', ');
    let link = `/users/${get(post, 'user.id')}/${variables.PROFILE_TAB.TIMELINE}`;
    if (get(this.props.auth, 'user.id') === id) {
      link = `/profile/${variables.PROFILE_TAB.TIMELINE}`;
    }
    return {
      id,
      lastName,
      firstName,
      name,
      avatar,
      location,
      link
    };
  }

  /**
   * Check user đã login chưa
   * @returns {boolean}
   * @memberof HorizontalPosts
   */
  isAuthenticated = () => !!get(this.props.auth, 'isAuthenticated')

  /**
   * Kiểm tra một bài viết có thuộc user hiện tại không
   * @param {object} post Bài viết
   * @returns {boolean}
   * @memberof HorizontalPosts
   */
  isBelongToCurrentUser = (post) => {
    if (!this.isAuthenticated()) {
      return false;
    }
    const postUserId = get(post, 'user.id');
    const currentUserId = get(this.props.auth, 'user.id');
    return postUserId === currentUserId;
  }

  /**
   * Kiểm tra một bài viết đã được user hiện tại like chưa
   * @param {object} post Bài viết
   * @returns {boolean}
   * @memberof HorizontalPosts
   */
  isLikedPost = (post) => {
    if (!this.isAuthenticated()) {
      return false;
    }
    const likeIds = get(post, 'likes', []);
    const currentUserId = get(this.props.auth, 'user.id');
    return likeIds.indexOf(currentUserId) > -1;
  }

  /**
   * Xác nhận xóa bài viết
   * @param {object} post Bài viết cần xóa
   * @return {void} Gọi Modal
   * @memberof HorizontalPosts
   */
  confirmRemove = post => async (e) => {
    e.preventDefault();
    Modal({
      type: 'confirm',
      title: messages.CONFIRM_REMOVE_POST,
      content: `${post.title}`,
      onOk: () => this.handleRemove(post)
    });
  }

  /**
   * Xóa bài viết
   * @param {object} post Bài viết cần xóa
   * @returns {function} Gọi props.onRemove
   * @memberof HorizontalPosts
   */
  handleRemove = async (post) => {
    try {
      if (isFunction(this.props.onRemove)) {
        return this.props.onRemove(post);
      }
      const postId = get(post, 'id');
      const response = await this.props.actions.deletePost(postId) || {};
      if (!isEmpty(response.error)) {
        Helpers.throwError(response.error);
      }
      Helpers.alertSuccess(messages.REMOVE_SUCCEED);
      // reload data
      if (isFunction(this.props.onReload)) {
        return this.props.onReload(post);
      }
      return Helpers.reloadPage(this.props.history, get(this.props.history, 'location.pathname'));
    } catch (error) {
      return Helpers.alertError(messages.REMOVE_FAILED);
    }
  }

  /**
   * Like bài viết
   * @param {object} post Bài viết được like
   * @returns {function} Gọi props.onLike
   * @memberof HorizontalPosts
   */
  handleLike = post => async (e) => {
    e.preventDefault();
    try {
      if (!this.isAuthenticated()) {
        return Helpers.alertWarning(messages.REQUIRED_LOGIN);
      }
      if (isFunction(this.props.onLike)) {
        return this.props.onLike(post);
      }
      const postId = get(post, 'id');
      const response = await this.props.actions.putLikePost(postId) || {};
      if (!isEmpty(response.error)) {
        Helpers.throwError(response.error);
      }
      // reload data
      if (isFunction(this.props.onReload)) {
        return this.props.onReload(post);
      }
      return Helpers.reloadPage(this.props.history, get(this.props.history, 'location.pathname'));
    } catch (error) {
      return Helpers.alertError(messages.SAVE_FAILED);
    }
  }

  /**
   * Hiển thị bình luận cho một bài viết
   * @param {object} post Bài viết
   * @returns {function} update state isShowedCommentBox
   * @memberof HorizontalPosts
   */
  toggleShowCommentBox = post => async (e) => {
    e.preventDefault();
    if (!this.isAuthenticated()) {
      return Helpers.alertWarning(messages.REQUIRED_LOGIN);
    }
    const postId = get(post, 'id');
    if (postId) {
      await this.setStateData(prevState => ({
        isShowedCommentBox: {
          ...prevState.isShowedCommentBox,
          [postId]: !prevState.isShowedCommentBox[postId]
        }
      }));
    }
    if (this.state.isShowedCommentBox[postId]) {
      const elmnt = document.getElementById(`post-${get(post, 'id')}`);
      if (elmnt) {
        elmnt.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
    return false;
  }

  render() {
    return (
      <LoadingWrapper isEmpty={isEmpty(this.props.data)}>
        {this.props.data.map((post, index) => (
          <React.Fragment key={index}>
            <Card className="p-card">
              <Row style={{ marginBottom: '20px' }}>
                <Col lg={{ span: 3 }}>
                  <Link to={this.getUserInfo(post).link}>
                    <Avatar size={56} src={this.getUserInfo(post).avatar} />
                  </Link>
                </Col>
                <Col lg={{ span: 21 }} style={{ paddingTop: '5px' }}>
                  <Link to={this.getUserInfo(post).link}>
                    <Text className="name-users">{this.getUserInfo(post).name}</Text>
                  </Link>
                  <span style={{ margin: '0 10px' }}>đã gắn địa điểm ở</span>
                  <IconText text={this.getUserInfo(post).location} type="environment" />
                </Col>
                <Col lg={{ span: 21 }}>
                  <Text>
                    {Helpers.getDateTime({
                      value: get(post, 'updatedAt'),
                      format: variables.DATE_FORMAT.DATETIME
                    })}
                  </Text>
                </Col>
              </Row>
              <Row>{this.renderContent(post)}</Row>
              <Divider />
              <Row>
                <Col span={12}>
                  <IconText text={`${Helpers.getLength(get(post, 'likes'))}`} type="heart" />
                  <IconText text={`${get(post, 'commentCount', 0)}`} type="message" />
                  <IconText text={`${Helpers.getLength(get(post, 'sharea'))}`} type="share-alt" />
                </Col>
                <Col span={12}>
                  {this.renderTags(post)}
                </Col>
              </Row>
              <List className="control-post-button">
                <ListItem>
                  <Avatar
                    className={classnames('hand', {
                      'b-color-pink': this.isLikedPost(post),
                      'b-color-blue': !this.isLikedPost(post)
                    })}
                    icon="heart"
                    onClick={this.handleLike(post)}
                  />
                </ListItem>
                <ListItem>
                  <Avatar
                    className="hand b-color-blue"
                    icon="message"
                    onClick={this.toggleShowCommentBox(post)}
                  />
                </ListItem>
                <ListItem>
                  <Avatar icon="share-alt" style={{ backgroundColor: '#2699fb' }} />
                </ListItem>
                {this.isBelongToCurrentUser(post) && (
                  <ListItem>
                    <Link to={`/posts/${get(post, 'id')}/edit`}>
                      <Avatar icon="edit" style={{ backgroundColor: '#F9A204' }} />
                    </Link>
                  </ListItem>
                )}
                {this.isBelongToCurrentUser(post) && (
                  <ListItem>
                    <Avatar
                      className="hand"
                      icon="delete"
                      onClick={this.confirmRemove(post)}
                      style={{ backgroundColor: '#d5313d' }}
                    />
                  </ListItem>
                )}
              </List>
            </Card>
            <div id={`post-${get(post, 'id')}`}>
              {get(this.state.isShowedCommentBox, get(post, 'id')) && (
                <CommentsPost postId={get(post, 'id')} />
              )}
            </div>
          </React.Fragment>
        ))}
      </LoadingWrapper>
    );
  }
}

HorizontalPosts.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  auth: PropTypes.objectOf(PropTypes.any).isRequired,
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  onRemove: PropTypes.func,
  onLike: PropTypes.func,
  onReload: PropTypes.func
};

HorizontalPosts.defaultProps = {
  data: [],
  onRemove: null,
  onLike: null,
  onReload: null
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    deletePost,
    putLikePost
  }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HorizontalPosts);
