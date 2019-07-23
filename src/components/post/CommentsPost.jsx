import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Card,
  Row,
  Col,
  Icon,
  Avatar,
  Typography,
  Input,
  Form
} from 'antd';
import { get, isEmpty } from 'lodash';
import { Link } from 'react-router-dom';
import {
  getListComment,
  postComment,
  cancelPostAPI
} from 'actions';
import { LoadingWrapper } from 'components/common';
import variables from 'constants/variables';
import Helpers from 'helpers';
import messages from 'constants/messages';

const { Title, Text } = Typography;

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

const FormItem = Form.Item;

class CommentsPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      isError: false,
      data: []
    };
    setIsMounted(true);
  }

  async componentDidMount() {
    // load data lần đầu
    await this.loadData();
  }

  componentWillUnmount() {
    setIsMounted(false);
    this.props.actions.cancelPostAPI();
  }

  /**
   * Set state properties
   * @param {object} data the data which will be merged to this.state
   * @param {function} callback the function which will be called after setState
   * @returns {void} call this.setState to update state
   * @memberof CommentsPost
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
   * @memberof CommentsPost
   */
  loadData = async () => {
    let isError = false;
    try {
      // set loading
      await this.setStateData({ loading: true });
      if (!this.props.postId) {
        Helpers.throwError(messages.ERROR_SYSTEM);
      }
      // get danh sách bình luận của bài viết nếu tồn tại postId
      const data = await this.getListComment(this.props.postId);
      await this.setStateData({ data });
    } catch (error) {
      isError = true;
    } finally {
      // set loading
      await this.setStateData({ isError, loading: false });
    }
  }

  /**
   * Lấy thông tin của một user trong bình luận
   * @param {object} comment
   * @returns {object}
   * @memberof CommentsPost
   */
  getUserInfo = (comment) => {
    const id = get(comment, 'user.id');
    const lastName = get(comment, 'user.fullName.lastName');
    const firstName = get(comment, 'user.fullName.firstName');
    const name = `${lastName} ${firstName}` || '';
    const avatar = get(comment, 'user.avatar') || '';
    let link = `/users/${get(comment, 'user.id')}/${variables.PROFILE_TAB.TIMELINE}`;
    if (get(this.props.auth, 'user.id') === id) {
      link = `/profile/${variables.PROFILE_TAB.TIMELINE}`;
    }
    return {
      id,
      lastName,
      firstName,
      name,
      avatar,
      link
    };
  }

  /**
   * Get danh sách bình luận của bài viết từ API
   * @param {string} postId Id của bài viết
   * @returns {array} Danh sách bình luận
   * @memberof CommentsPost
   */
  getListComment = async (postId) => {
    if (!postId) {
      return null;
    }
    const response = await this.props.actions.getListComment(postId) || {};
    if (!isEmpty(response.error)) {
      Helpers.throwError(response.error);
    }
    return get(response, 'payload', []);
  }

  createNewComment = async (e) => {
    try {
      if (e.key !== 'Enter') {
        return false;
      }
      const data = this.props.form.getFieldsValue();
      if (isEmpty(data)) {
        return false;
      }
      const response = await this.props.actions.postComment(this.props.postId, data) || {};
      if (!isEmpty(get(response, 'error'))) {
        Helpers.throwError(response.error);
      }
      this.props.form.resetFields();
      return this.loadData();
    } catch (error) {
      return Helpers.alertError(messages.SAVE_FAILED);
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Card className="b-comment">
        <Title level={4} style={{ marginBottom: '20px' }}>Bình luận</Title>
        <LoadingWrapper isError={this.state.isError} loading={this.state.loading}>
          {/* Danh sách bình luận */}
          {this.state.data.map((comment, index) => (
            <Row key={get(comment, 'id', index)} style={{ marginBottom: '20px' }}>
              <Col span={2}>
                <Link to={this.getUserInfo(comment).link}>
                  <Avatar size={40} src={this.getUserInfo(comment).avatar} />
                </Link>
              </Col>
              <Col span={22} style={{ paddingTop: '5px' }}>
                <Link to={this.getUserInfo(comment).link}>
                  <Text className="name-users">{this.getUserInfo(comment).name}</Text>
                </Link>
                <Text className="text-comment">
                  {Helpers.getDateTime({ value: get(comment, 'updatedAt'), format: variables.DATE_FORMAT.DATETIME })}
                </Text>
              </Col>
              <Col className="pre-line" span={22} style={{ marginTop: '10px' }}>
                {get(comment, 'text')}
              </Col>
            </Row>
          ))}
        </LoadingWrapper>
        {/* Nhập bình luận */}
        <Row>
          <Col span={2}>
            <Avatar size={40} src={get(this.props.auth, 'user.avatar')} />
          </Col>
          <Col span={22}>
            <Form>
              <FormItem>
                {getFieldDecorator('text')(
                  <Input
                    onKeyDown={this.createNewComment}
                    placeholder="Viết bình luận"
                    style={{ marginTop: '5px' }}
                    suffix={<Icon style={{ color: 'rgba(0,0,0,.25)' }} type="enter" />}
                  />
                )}
              </FormItem>
            </Form>
          </Col>
        </Row>
      </Card>
    );
  }
}

CommentsPost.propTypes = {
  form: PropTypes.objectOf(PropTypes.any).isRequired,
  auth: PropTypes.objectOf(PropTypes.any).isRequired,
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
  postId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getListComment,
    postComment,
    cancelPostAPI
  }, dispatch)
});

export default Form.create({ name: 'CommentPost' })(connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsPost));
