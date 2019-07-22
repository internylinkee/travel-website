import React from 'react';
import PropTypes from 'prop-types';
import {
  isEmpty,
  isFunction,
  get
} from 'lodash';
import {
  Row,
  Col,
  Input,
  Form,
  Button
} from 'antd';
import {
  Select,
  UploadImages
} from 'components/common';
import messages from 'constants/messages';
import variables from 'constants/variables';

const { TextArea } = Input;

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

class FormPostTour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: {
        data: [],
        errors: []
      }
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
   * @memberof FormPostTour
   */
  setStateData = (state, callback) => {
    if (!getIsMounted()) {
      return;
    }
    this.setState(state, callback);
  }

  /**
   * Xử lý khi submit form
   * @param {object} e event object
   * @returns {void} validate, gọi props.onSubmit
   * @memberof FormPostTour
   */
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err || !isFunction(this.props.onSubmit)) {
        return false;
      }
      return this.props.onSubmit({ ...values, type: variables.TYPE_POST.TOUR }, this.props.form);
    });
  };

  /**
   * Xử lý khi images thay đổi
   * @param {object} result Kết quả hiện tại
   * @param {array} result.data Danh sách files
   * @param {array} result.errors Danh sách error messages
   * @returns {void} update state
   * @memberof FormPostTour
   */
  handleChangeFiles = async (result) => {
    const { errors = [] } = result;
    const { form: { setFields } } = this.props;
    await this.setStateData({ ...result });
    if (!isEmpty(errors)) {
      await setFields({
        images: {
          value: result.data,
          errors
        }
      });
    }
  }

  /**
   * Validate field images
   * @param {object} rule
   * @param {array} value
   * @param {function} callback
   * @returns {function} callback
   * @memberof FormPostTour
   */
  validateImage = (rule, value, callback) => {
    if (isEmpty(value)) {
      return callback(rule.message);
    }
    return callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="vertical">
        <FormItem label="Tiêu đề">
          {getFieldDecorator('title', {
            rules: [{ whitespace: true, required: true, message: messages.REQUIRED_FIELD }]
          })(
            <Input placeholder="Nhập tiêu đề" size="large" />
          )}
        </FormItem>
        <FormItem label="Mô tả">
          {getFieldDecorator('description', {
            rules: [{ whitespace: true, required: true, message: messages.REQUIRED_FIELD }]
          })(
            <Input placeholder="Nhập mô tả" size="large" />
          )}
        </FormItem>
        <Row>
          <Col span={12} style={{ paddingRight: '20px' }}>
            <FormItem label="Gắn thẻ">
              {getFieldDecorator('categories', {
                rules: [{ required: true, message: messages.REQUIRED_FIELD }]
              })(
                <Select
                  dataSelect={this.props.categories}
                  fieldsName={{ value: 'id', name: 'name' }}
                  mode="multiple"
                  optionLabelProp="label"
                  placeholder="Chọn thẻ bài viết"
                  style={{ width: '100%' }}
                />
              )}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label="Địa điểm">
              {getFieldDecorator('locations', {
                rules: [{ required: true, message: messages.REQUIRED_FIELD }]
              })(
                <Select
                  dataSelect={this.props.locations}
                  fieldsName={{ value: 'id', name: 'name' }}
                  mode="multiple"
                  optionLabelProp="label"
                  placeholder="Chọn địa điểm"
                  style={{ width: '100%' }}
                />
              )}
            </FormItem>
          </Col>
        </Row>
        <FormItem label="Nội dung">
          {getFieldDecorator('content', {
            rules: [{ whitespace: true, required: true, message: messages.REQUIRED_FIELD }]
          })(
            <TextArea
              autosize={{ minRows: 6, maxRows: 12 }}
              placeholder="Nhập nội dung"
            />
          )}
        </FormItem>
        {/* Upload file */}
        <FormItem label="Hình ảnh">
          {getFieldDecorator('imageUrls', {
            rules: [{
              required: true,
              transform: value => value.data,
              validator: this.validateImage,
              message: messages.REQUIRED_FIELD
            }],
            initialValue: get(this.state.image, 'data')
          })(
            <UploadImages onChange={this.handleChangeFiles} />
          )}
        </FormItem>
        <FormItem>
          <div style={{ float: 'right', marginTop: '20px' }}>
            <Button loading={this.props.isSubmitting} onClick={this.handleSubmit} type="primary">Đăng bài</Button>
          </div>
        </FormItem>
      </Form>
    );
  }
}

FormPostTour.propTypes = {
  form: PropTypes.objectOf(PropTypes.any).isRequired,
  categories: PropTypes.arrayOf(PropTypes.object),
  isSubmitting: PropTypes.bool,
  locations: PropTypes.arrayOf(PropTypes.object),
  onSubmit: PropTypes.func
};

FormPostTour.defaultProps = {
  categories: [],
  isSubmitting: false,
  locations: [],
  onSubmit: null
};

export default Form.create({ name: 'FormPostTour' })(FormPostTour);
