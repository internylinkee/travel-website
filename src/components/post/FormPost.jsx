import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  isEmpty,
  get,
  isFunction
} from 'lodash';
import {
  Card,
  Tabs,
  Icon,
  Typography
} from 'antd';
import {
  postPost,
  putPost,
  uploadFiles
} from 'actions';
import {
  FormPostQuestion,
  FormPostReviews,
  FormPostTour
} from 'components/post';
import Helpers from 'helpers';
import messages from 'constants/messages';
import variables from 'constants/variables';

const { TabPane } = Tabs;
const { Text } = Typography;

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

class FormPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitting: false
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
   * @memberof Register
   */
  setStateData = (state, callback) => {
    if (!getIsMounted()) {
      return;
    }
    this.setState(state, callback);
  }

  /**
   * Tạo bài viết
   * @param {object} data Dữ liệu form
   * @return {void} Xử lý và gọi API
   * @memberof FormPost
   */
  callCreatePostAPI = async (data, form) => {
    try {
      // set isSubmitting
      await this.setStateData({ isSubmitting: true });
      // upload file
      const imagesInput = get(data, 'imageUrls.data', []).map(image => image.originFileObj || image);
      const imageUrls = await Helpers.uploadFiles(imagesInput, this.props.actions.uploadFiles);
      // parse data request
      const dataRequest = {
        ...data,
        imageUrls
      };
      // swith API request: nếu tồn tại postId, chỉnh sửa, ngược lại tạo mới bài viết
      const requestAPI = this.props.postId ? this.props.actions.putPost : this.props.actions.postPost;
      const firstParam = this.props.postId ? this.props.postId : dataRequest;
      const secondParam = dataRequest;
      // call API
      const response = await requestAPI(firstParam, secondParam) || {};
      // if error
      if (!isEmpty(response.error)) {
        Helpers.throwError(response.error);
      }
      // reset form
      const { resetFields } = form;
      await resetFields();
      // gọi props.onAfterSubmit
      if (isFunction(this.props.onAfterSubmit)) {
        await Helpers.alertSuccess(messages.SAVE_SUCCEED);
        return this.props.onAfterSubmit();
      }
      return Helpers.alertSuccess(messages.SAVE_SUCCEED);
    } catch (error) {
      return Helpers.alertError(messages.SAVE_FAILED);
    } finally {
      // set isSubmitting
      await this.setStateData({ isSubmitting: false });
    }
  }

  dataTab = () => ([
    // Tab câu hỏi
    {
      // viết theo API
      key: variables.TYPE_POST.QUESTION,
      icon: 'question-circle',
      name: 'Câu hỏi',
      render: () => (
        <FormPostQuestion
          categories={this.props.categories}
          detailPost={this.props.detailPost}
          isSubmitting={this.state.isSubmitting}
          locations={this.props.locations}
          onSubmit={this.callCreatePostAPI}
        />
      )
    },
    // Tab bài viết reviews
    {
      key: variables.TYPE_POST.REVIEWS,
      icon: 'form',
      name: 'Bài viết',
      render: () => (
        <FormPostReviews
          categories={this.props.categories}
          detailPost={this.props.detailPost}
          isSubmitting={this.state.isSubmitting}
          locations={this.props.locations}
          onSubmit={this.callCreatePostAPI}
        />
      )
    },
    // Tab tour du lịch, chỉ các tài khoản được duyệt là HDV mới hiển thị
    {
      key: variables.TYPE_POST.TOUR,
      icon: 'form',
      name: 'Tour du lịch',
      render: () => (
        <FormPostTour
          categories={this.props.categories}
          detailPost={this.props.detailPost}
          isSubmitting={this.state.isSubmitting}
          locations={this.props.locations}
          onSubmit={this.callCreatePostAPI}
        />
      )
    }
  ])

  render() {
    return (
      <Card style={{ marginBottom: '20px' }}>
        <Tabs defaultActiveKey={get(this.props.detailPost, 'type', variables.TYPE_POST.QUESTION)} type="card">
          {this.dataTab().map(tab => (
            <TabPane
              key={tab.key}
              disabled={get(this.props.detailPost, 'type') && get(this.props.detailPost, 'type') !== tab.key}
              tab={(
                <Text>
                  <Icon type={tab.icon} />
                  {tab.name}
                </Text>
              )}
            >
              {tab.render()}
            </TabPane>
          ))}
        </Tabs>
      </Card>
    );
  }
}

FormPost.propTypes = {
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
  categories: PropTypes.arrayOf(PropTypes.object),
  locations: PropTypes.arrayOf(PropTypes.object),
  onAfterSubmit: PropTypes.func,
  detailPost: PropTypes.objectOf(PropTypes.any),
  postId: PropTypes.string
};

FormPost.defaultProps = {
  categories: [],
  locations: [],
  onAfterSubmit: null,
  detailPost: null,
  postId: null
};

const mapStateToProps = state => ({
  auth: state.auth,
  categories: state.common.categories,
  locations: state.common.locations
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    postPost,
    putPost,
    uploadFiles
  }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormPost);
