import React from 'react';
import {
  Form,
  Icon,
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
  login
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

class Login extends React.Component {
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
   * @memberof Login
   */
  setStateData = (state, callback) => {
    if (!getIsMounted()) {
      return;
    }
    this.setState(state, callback);
  }

  /**
   * Call the login API
   * @param {object} data the data to login
   * @returns {void} call API and redirect to home page or alert the error
   * @memberof Login
   */
  callLoginAPI = async (data) => {
    try {
      // set isSubmitting
      await this.setStateData({ isSubmitting: true });
      // call API
      const response = await this.props.actions.login(data) || {};
      // if error
      if (!isEmpty(response.error)) {
        Helpers.throwError(response.error);
      }
      // go to home page
      return this.redirectTo('/');
    } catch (error) {
      return Helpers.alertError(messages.LOGIN_FAILED);
    } finally {
      // set isSubmitting
      this.setStateData({ isSubmitting: false });
    }
  }

  /**
   * Redirect to a path
   * @param {string} path the path
   * @returns {void} call props.history.push() method
   * @memberof Login
   */
  redirectTo = (path = '/') => {
    if (isFunction(get(this.props.history, 'push'))) {
      this.props.history.push(path);
    }
  }

  /**
   * Handle when the users submit the login form
   * @param {object} e the event object
   * @returns {void} validate, call the login API or alert the error
   * @memberof Login
   */
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) {
        return false;
      }
      return this.callLoginAPI(values);
    });
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
            <Title className="login-text" level={2}>Đăng nhập</Title>
            <Form className="login-form" onSubmit={this.handleSubmit}>
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
                    prefix={<Icon style={{ color: 'rgba(0,0,0,.25)' }} type="user" />}
                  />,
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ whitespace: true, required: true, message: messages.REQUIRED_FIELD }]
                })(
                  <Input
                    placeholder="Mật khẩu"
                    prefix={<Icon style={{ color: 'rgba(0,0,0,.25)' }} type="lock" />}
                    type="password"
                  />,
                )}
              </FormItem>
              <FormItem>
                <Button href="/registration" style={{ padding: 0 }} type="link">Đăng ký tài khoản</Button>
                <Button
                  className="login-form-button"
                  htmlType="submit"
                  loading={this.state.isSubmitting}
                  size="large"
                  type="primary"
                >
                  Đăng nhập
                </Button>
              </FormItem>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  form: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  actions: PropTypes.objectOf(PropTypes.any).isRequired
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    login
  }, dispatch)
});

export default Form.create({ name: 'LoginForm' })(connect(
  null,
  mapDispatchToProps
)(Login));
