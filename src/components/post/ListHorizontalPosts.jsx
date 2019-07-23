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
import {
  deletePost
} from 'actions';
import variables from 'constants/variables';
import Helpers from 'helpers';
import { IconText, LoadingWrapper, Modal } from 'components/common';
import messages from 'constants/messages';

const { Title, Text, Paragraph } = Typography;
const ListItem = List.Item;

class HorizontalPosts extends React.Component {
  renderContent = (post) => {
    if (get(post, 'type') === variables.TYPE_POST.QUESTION) {
      return (
        <React.Fragment>
          <Title level={3}>{get(post, 'title')}</Title>
          <Paragraph ellipsis={{ rows: 6 }}>
            {get(post, 'content')}
          </Paragraph>
          {/* TODO: cần hiển thị hình ảnh của bài viết theo grid */}
          <div style={{ height: '350px', margin: '0 -25px 20px' }}>
            <img alt="Ảnh" src={get(post, 'featureImage')} style={{ width: '100%', height: '100%' }} />
          </div>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <div style={{ height: '350px', margin: '0 -25px 20px' }}>
          <img alt="Ảnh bìa" src={get(post, 'featureImage')} style={{ width: '100%', height: '100%' }} />
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
   * Kiểm tra một bài viết có thuộc user hiện tại không
   * @param {object} post bài viết
   * @returns {boolean}
   * @memberof HorizontalPosts
   */
  isBelongToCurrentUser = (post) => {
    const postUserId = get(post, 'user.id');
    const currentUserId = get(this.props.auth, 'user.id');
    return postUserId === currentUserId;
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
      return Helpers.reloadPage(this.props.history, get(this.props.history, 'location.pathname'));
    } catch (error) {
      return Helpers.alertError(messages.REMOVE_FAILED);
    }
  }

  render() {
    return (
      <LoadingWrapper isEmpty={isEmpty(this.props.data)}>
        {this.props.data.map((post, index) => (
          <Card
            key={index}
            className="p-card"
          >
            <Row style={{ marginBottom: '20px' }}>
              <Col span={2}>
                <Avatar size={56} src={this.getUserInfo(post).avatar} />
              </Col>
              <Col span={22} style={{ paddingTop: '5px' }}>
                <Text className="name-users">{this.getUserInfo(post).name}</Text>
                <span style={{ margin: '0 10px' }}>đã gắn địa điểm ở</span>
                <IconText text={this.getUserInfo(post).location} type="environment" />
              </Col>
              <Col span={22}>
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
                <Avatar icon="heart" style={{ backgroundColor: '#2699fb' }} />
              </ListItem>
              <ListItem>
                <Avatar icon="message" style={{ backgroundColor: '#2699fb' }} />
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
                    icon="delete"
                    onClick={this.confirmRemove(post)}
                    style={{ backgroundColor: '#d5313d', cursor: 'pointer' }}
                  />
                </ListItem>
              )}
            </List>
          </Card>
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
  onRemove: PropTypes.func
};

HorizontalPosts.defaultProps = {
  data: [],
  onRemove: null
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    deletePost
  }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HorizontalPosts);
