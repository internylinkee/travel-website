import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Row,
  Col,
  Divider,
  Icon,
  Tag,
  Avatar,
  Card,
  Typography,
  Input
} from 'antd';
import { get, isEmpty } from 'lodash';
import {
  getDetailPost,
  getListFeaturedPost
} from 'actions';
import Helpers from 'helpers';
import {
  DetailPostInfo,
  ListAuthor,
  ListCategories,
  ListLocations,
  ListFeaturedPosts
} from 'components/post';
import { LoadingWrapper, IconText } from 'components/common';

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
      Helpers.throwError(response.error);
    }
    return get(response, 'payload.post', null);
  }

  /**
   * Lấy danh sách bài viết nổi bật có type "review"
   * @return {object}
   * @memberof Posts
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
              postId={this.state.postId}
            />

            {/* Phần Comment */}
            <Card className="b-comment">
              <Title level={4} style={{ marginBottom: '20px' }}>Bình luận</Title>
              <Row style={{ marginBottom: '20px' }}>
                <Col span={2}>
                  <Avatar size={40} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
                </Col>
                <Col span={22} style={{ paddingTop: '5px' }}>
                  <Text className="name-users">Maria Monoban</Text>
                  <Text className="text-comment">1 phút trước</Text>
                </Col>
                <Col span={22} style={{ marginTop: '10px' }}>
                  Sibi minantia in onerosior iners. Mentes inmensa porrexerat regat inter coeperunt galeae inposuit.
                  Mixta dispositam chaos: igni unda nulli posset: densior haec.
                  Contraria septemque unda fuit plagae orba nubes valles terrarum.
                </Col>
              </Row>
              <Row style={{ marginBottom: '20px' }}>
                <Col span={2}>
                  <Avatar size={40} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                </Col>
                <Col span={22} style={{ paddingTop: '5px' }}>
                  <Text className="name-users">Han Solo</Text>
                  <Text className="text-comment">12 phút trước</Text>
                </Col>
                <Col span={22} style={{ marginTop: '10px' }}>
                  Sibi minantia in onerosior iners. Mentes inmensa porrexerat regat inter coeperunt galeae inposuit.
                  Mixta dispositam chaos: igni unda nulli posset: densior haec.
                  Contraria septemque unda fuit plagae orba nubes valles terrarum.
                </Col>
              </Row>
              <Row>
                <Col span={2}>
                  <Avatar size={40} src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
                </Col>
                <Col span={22}>
                  <Input
                    placeholder="Viết bình luận"
                    style={{ marginTop: '5px' }}
                    suffix={<Icon style={{ color: 'rgba(0,0,0,.25)' }} type="enter" />}
                  />
                </Col>
              </Row>
            </Card>
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

            {/* Danh sách bài viết liên quan */}
            <Card className="title-related-posts" title="Các bài viết liên quan" />
            <Card
              className="p-card related-posts"
              cover={(
                <img
                  alt="example"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwfMzZWidbLDPeiep0Gtn2B1pi_1GGtgBQrKcxpJSnuCDSQ3KidQ"
                />
              )}
            >
              <Text className="text-related-posts">
                Bởi <span className="author">JACK SCORPIO</span> - 5 tháng trước
              </Text>
              <Title level={4}>Những nơi nên đến khi bạn đi du lịch ở Phú Quốc</Title>
              <Divider />
              <Row>
                <Col span={12}>
                  <IconText text="156" type="heart" />
                  <IconText text="2" type="message" />
                  <IconText text="156" type="share-alt" />
                </Col>
                <Col span={12}>
                  <span className="tag-post">
                    <Tag color="volcano">Ăn uống</Tag>
                    <Tag color="geekblue">Vui chơi</Tag>
                  </span>
                </Col>
              </Row>
            </Card>
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
