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
  List
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
import messages from 'constants/messages';

const { Title, Text, Paragraph } = Typography;
const ListItem = List.Item;

class DetailPostInfo extends React.Component {
  renderContent = post => (
    <React.Fragment>
      <div style={{ height: '350px', margin: '0 -25px 20px' }}>
        <img
          alt="Ảnh bìa"
          src={get(post, 'featureImage')}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <Title level={3}>{get(post, 'title')}</Title>
      <Paragraph>
        {get(post, 'description')}
      </Paragraph>
      <Paragraph>
        {get(post, 'content')}
      </Paragraph>
    </React.Fragment>
  )

  /**
   * Render Tags
   * @param {object} post data of a post
   * @returns {node} the list of tags
   * @memberof DetailPostInfo
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
   * @memberof DetailPostInfo
   */
  getUserInfo = (post) => {
    const lastName = get(post, 'user.fullName.lastName');
    const firstName = get(post, 'user.fullName.firstName');
    const name = `${lastName} ${firstName}` || '';
    const avatar = get(post, 'user.avatar') || '';
    const location = (get(post, 'locations', []) || []).map(item => item.name).join(', ');
    return {
      lastName,
      firstName,
      name,
      avatar,
      location
    };
  }

  /**
   * Check user đã login chưa
   * @returns {boolean}
   * @memberof DetailPostInfo
   */
  isAuthenticated = () => !!get(this.props.auth, 'isAuthenticated')

  /**
   * Kiểm tra một bài viết có thuộc user hiện tại không
   * @param {object} post Bài viết
   * @returns {boolean}
   * @memberof DetailPostInfo
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
   * @memberof DetailPostInfo
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
   * @memberof DetailPostInfo
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
   * @memberof DetailPostInfo
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
   * @memberof DetailPostInfo
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

  render() {
    return (
      <LoadingWrapper isEmpty={isEmpty(this.props.data)}>
        <Card
          className="p-card"
        >
          <Row style={{ marginBottom: '20px' }}>
            <Col span={2}>
              <Avatar size={56} src={this.getUserInfo(this.props.data).avatar} />
            </Col>
            <Col span={22} style={{ paddingTop: '5px' }}>
              <Text className="name-users">{this.getUserInfo(this.props.data).name}</Text>
              <span style={{ margin: '0 10px' }}>đã gắn địa điểm ở</span>
              <IconText text={this.getUserInfo(this.props.data).location} type="environment" />
            </Col>
            <Col span={22}>
              <Text>
                {Helpers.getDateTime({
                  value: get(this.props.data, 'updatedAt'),
                  format: variables.DATE_FORMAT.DATETIME
                })}
              </Text>
            </Col>
          </Row>
          <Row>{this.renderContent(this.props.data)}</Row>
          <Divider />
          <Row>
            <Col span={12}>
              <IconText text={`${Helpers.getLength(get(this.props.data, 'likes'))}`} type="heart" />
              <IconText text={`${get(this.props.data, 'commentCount', 0)}`} type="message" />
              <IconText text={`${Helpers.getLength(get(this.props.data, 'sharea'))}`} type="share-alt" />
            </Col>
            <Col span={12}>
              {this.renderTags(this.props.data)}
            </Col>
          </Row>
          <List className="control-post-button">
            <ListItem>
              <Avatar
                className={classnames('hand', {
                  'b-color-pink': this.isLikedPost(this.props.data),
                  'b-color-blue': !this.isLikedPost(this.props.data)
                })}
                icon="heart"
                onClick={this.handleLike(this.props.data)}
              />
            </ListItem>
            <ListItem>
              <Avatar icon="message" style={{ backgroundColor: '#2699fb' }} />
            </ListItem>
            <ListItem>
              <Avatar icon="share-alt" style={{ backgroundColor: '#2699fb' }} />
            </ListItem>
            {this.isBelongToCurrentUser(this.props.data) && (
              <ListItem>
                <Link to={`/posts/${get(this.props.data, 'id')}/edit`}>
                  <Avatar icon="edit" style={{ backgroundColor: '#F9A204' }} />
                </Link>
              </ListItem>
            )}
            {this.isBelongToCurrentUser(this.props.data) && (
              <ListItem>
                <Avatar
                  className="hand"
                  icon="delete"
                  onClick={this.confirmRemove(this.props.data)}
                  style={{ backgroundColor: '#d5313d' }}
                />
              </ListItem>
            )}
          </List>
        </Card>
      </LoadingWrapper>
    );
  }
}

DetailPostInfo.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  auth: PropTypes.objectOf(PropTypes.any).isRequired,
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  onRemove: PropTypes.func,
  onLike: PropTypes.func,
  onReload: PropTypes.func
};

DetailPostInfo.defaultProps = {
  data: {},
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
)(DetailPostInfo);
