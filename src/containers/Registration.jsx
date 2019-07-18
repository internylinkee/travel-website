import React from 'react';
import {
  Form,
  Input,
  Button,
  Typography
} from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  isEmpty,
  isFunction,
  get
} from 'lodash';
import Helpers from 'helpers';
import messages from 'constants/messages';
import {
  register
} from 'actions';

const { Title } = Typography;

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

class Register extends React.Component {
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
   * Gọi register API
   * @param {object} data data cho register
   * @returns {void} gọi API and điều hướng đến trang home hoặc thông báo error message
   * @memberof Register
   */
  callRegsiterAPI = async (data) => {
    try {
      // set isSubmitting
      await this.setStateData({ isSubmitting: true });
      // call API
      const response = await this.props.actions.register(data) || {};
      // if error
      if (!isEmpty(response.error)) {
        Helpers.throwError(response.error);
      }
      // điều hướng tới trang home
      return this.redirectTo('/');
    } catch (error) {
      return Helpers.alertError(messages.REGISTER_FAILED);
    } finally {
      // set isSubmitting
      this.setStateData({ isSubmitting: false });
    }
  }

  /**
   * Điều hướng đến một đường dẫn
   * @param {string} path đường dẫn
   * @returns {void} gọi props.history.push()
   * @memberof Register
   */
  redirectTo = (path = '/') => {
    if (isFunction(get(this.props.history, 'push'))) {
      this.props.history.push(path);
    }
  }

  /**
   * Xử lý khi submit login form
   * @param {object} e event object
   * @returns {void} validate, gọi register API
   * @memberof Register
   */
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) {
        return false;
      }
      return this.callRegsiterAPI(values);
    });
  };

  validateConfirmPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback(messages.IN_VALID_CONFIRM_PASSWORD);
    } else {
      callback();
    }
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-container">
        <div className="login-background">
          <div>
            <a href="/" style={{ display: 'block' }}>
              <img alt="" src="/images/logo.png" style={{ margin: '75px auto', height: '120px', display: 'inherit' }} />
            </a>
          </div>
          <div className="b-login-form">
            <Title className="login-text" level={2}>Đăng ký</Title>
            <Form className="login-form" onSubmit={this.handleSubmit}>
              <FormItem>
                <FormItem style={{ display: 'inline-block', width: 'calc(50% - 12px)', margin: 0 }}>
                  {getFieldDecorator('firstName', {
                    rules: [{ whitespace: true, required: true, message: messages.REQUIRED_FIELD }]
                  })(
                    <Input placeholder="Tên" />,
                  )}
                </FormItem>
                <span style={{ display: 'inline-block', width: '24px', textAlign: 'center' }} />
                <FormItem style={{ display: 'inline-block', width: 'calc(50% - 12px)', margin: 0 }}>
                  {getFieldDecorator('lastName', {
                    rules: [{ whitespace: true, required: true, message: messages.REQUIRED_FIELD }]
                  })(
                    <Input placeholder="Họ" />,
                  )}
                </FormItem>
              </FormItem>
              <FormItem>
                {getFieldDecorator('email', {
                  rules: [
                    {
                      whitespace: true,
                      required: true,
                      message: messages.REQUIRED_FIELD
                    },
                    {
                      type: 'email',
                      message: messages.IN_VALID_EMAIL
                    }
                  ]
                })(
                  <Input
                    placeholder="Email"
                  />,
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ whitespace: true, required: true, message: messages.REQUIRED_FIELD }]
                })(
                  <Input
                    placeholder="Mật khẩu"
                    type="password"
                  />,
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('confirmPassword', {
                  rules: [
                    { whitespace: true, required: true, message: messages.REQUIRED_FIELD },
                    { validator: this.validateConfirmPassword }
                  ]
                })(
                  <Input
                    placeholder="Nhập lại mật khẩu"
                    type="password"
                  />,
                )}
              </FormItem>
              <FormItem>
                <Button
                  className="login-form-button"
                  htmlType="submit"
                  loading={this.state.isSubmitting}
                  size="large"
                  type="primary"
                >
                  Đăng ký
                </Button>
              </FormItem>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  form: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  actions: PropTypes.objectOf(PropTypes.any).isRequired
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    register
  }, dispatch)
});

export default Form.create({ name: 'RegisterForm' })(connect(
  null,
  mapDispatchToProps
)(Register));
