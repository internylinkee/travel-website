import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout,
  Row,
  Col
} from 'antd';
import {
  FormPost,
  ListHorizontalPosts,
  ListFeaturedPosts,
  ListAuthor,
  ListTags
} from 'components/post';
import {
  getListFeaturedPosts
} from 'actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { get } from 'lodash';

const { Content } = Layout;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    // const response = await this.props.actions.getListFeaturedPosts();
  }

  /**
   * Điều kiện show editor
   * @returns {boolean}
   * @memberof Home
   */
  isShowEditor = () => !!get(this.props.auth, 'isAuthenticated')

  render() {
    return (
      <Content>
        <Row>
          <Col className="p-col" span={16}>
            {/* 1. Form Edittor */}
            {this.isShowEditor() && (<FormPost />)}
            {/* 2. Hiển thị nội dung bài viết có comment */}
            <ListHorizontalPosts />
          </Col>

          {/* Thanh thông tin hiển thị các nội dung khác */}
          <Col className="p-col" span={8}>
            {/* 3. Danh sách bài viết nổi bật */}
            <ListFeaturedPosts />

            {/* 4. Phần Tác giả được Yêu thích */}
            <ListAuthor />

            {/* 5. Tag & Địa điểm */}
            <ListTags />
          </Col>
        </Row>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getListFeaturedPosts
  }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

Home.propTypes = {
  auth: PropTypes.objectOf(PropTypes.any).isRequired
  // actions: PropTypes.objectOf(PropTypes.any).isRequired
};
