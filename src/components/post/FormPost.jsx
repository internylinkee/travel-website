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
  uploadFiles
} from 'actions';
import {
  FormPostQuestion,
  FormPostReviews,
  FormPostTour
} from 'components/post';
import Helpers from 'helpers';
import messages from 'constants/messages';

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
      // defaultData: {},
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
      const imagesInput = get(data, 'imageUrls.data');
      const imageUrls = await Helpers.uploadFiles(imagesInput, this.props.actions.uploadFiles);
      // parse data request
      const dataRequest = {
        ...data,
        imageUrls
      };
      // call API
      const response = await this.props.actions.postPost(dataRequest) || {};
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
      key: 'question',
      icon: 'question-circle',
      name: 'Câu hỏi',
      render: () => (
        <FormPostQuestion
          categories={this.props.categories}
          isSubmitting={this.state.isSubmitting}
          locations={this.props.locations}
          onSubmit={this.callCreatePostAPI}
        />
      )
    },
    // Tab bài viết reviews
    {
      key: 'reviews',
      icon: 'form',
      name: 'Bài viết',
      render: () => (
        <FormPostReviews
          categories={this.props.categories}
          isSubmitting={this.state.isSubmitting}
          locations={this.props.locations}
          onSubmit={this.callCreatePostAPI}
        />
      )
    },
    // Tab tour du lịch, chỉ các tài khoản được duyệt là HDV mới hiển thị
    {
      key: 'book',
      icon: 'form',
      name: 'Tour du lịch',
      render: () => (
        <FormPostTour
          categories={this.props.categories}
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
        <Tabs type="card">
          {this.dataTab().map(tab => (
            <TabPane
              key={tab.key}
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
  onAfterSubmit: PropTypes.func
};

FormPost.defaultProps = {
  categories: [],
  locations: [],
  onAfterSubmit: null
};

const mapStateToProps = state => ({
  auth: state.auth,
  categories: state.common.categories,
  locations: state.common.locations
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    postPost,
    uploadFiles
  }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormPost);
