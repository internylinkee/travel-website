import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { get, isEmpty } from 'lodash';
import {
  HeadingProfile,
  Timeline,
  Reviews,
  Tours,
  AboutMe
} from 'components/user';
import { LoadingWrapper } from 'components/common';
import variables from 'constants/variables';
import { getUserDetail } from 'actions';
import Helpers from 'helpers';

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

class ProfileUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      isError: false,
      userId: null,
      tab: variables.PROFILE_TAB.TIMELINE,
      prefix: variables.USER_PREFIX.PROFILE,
      user: {}
    };
    setIsMounted(true);
  }

  async componentDidMount() {
    // load data lần đầu
    await this.loadData();
  }

  async componentDidUpdate(nextProps) {
    // nếu url thay đổi, load lại data
    if (nextProps.match.url !== this.props.match.url) {
      await this.loadData();
    }
  }

  componentWillUnmount() {
    setIsMounted(false);
  }

  /**
   * Set state properties
   * @param {object} data the data which will be merged to this.state
   * @param {function} callback the function which will be called after setState
   * @returns {void} call this.setState to update state
   * @memberof ProfileUser
   */
  setStateData = (state, callback) => {
    if (!getIsMounted()) {
      return;
    }
    this.setState(state, callback);
  }

  /**
   * Load data profile
   * @returns {void} update state
   * @memberof ProfileUser
   */
  loadData = async () => {
    let isError = false;
    try {
      // set loading
      await this.setStateData({ loading: true });
      const data = await this.getParams();
      await this.setStateData({ ...data });
    } catch (error) {
      isError = true;
    } finally {
      // set loading
      await this.setStateData({ isError, loading: false });
    }
  }

  /**
   * Get params: userId, tab, user
   * @returns {object}
   * @memberof ProfileUser
   */
  getParams = async () => {
    const userId = get(this.props.match, 'params.id');
    const tab = get(this.props.match, 'params.tab') || variables.PROFILE_TAB.TIMELINE;
    const user = await this.getUserData(userId);
    const prefix = userId ? `${variables.USER_PREFIX.USER}/${userId}` : variables.USER_PREFIX.PROFILE;
    return {
      prefix,
      userId,
      tab,
      user
    };
  }

  /**
   * Lấy thông tin user
   * @param {string} userId
   * @return {object}
   * @memberof ProfileUser
   */
  getUserData = async (userId) => {
    if (!userId) {
      return { ...get(this.props.auth, 'user') };
    }
    const oldUserId = get(this.state.user, 'id');
    if (oldUserId === userId) {
      return this.state.user;
    }
    const response = await this.props.actions.getUserDetail(userId) || {};
    // if error
    if (!isEmpty(response.error)) {
      Helpers.throwError(response.error);
    }
    return get(response, 'payload.user');
  }

  /**
   * Render nội dung profile theo tab
   * @returns {node} Switch component tương ứng
   * @memberof ProfileUser
   */
  renderProfileContent = () => {
    const userId = this.state.userId || get(this.state.user, 'id', null);
    switch (this.state.tab) {
      // Bài viết
      case variables.PROFILE_TAB.REVIEW:
        return (<Reviews />);
      // Chuyến đi
      case variables.PROFILE_TAB.TOUR:
        return (<Tours />);
      // Về tôi
      case variables.PROFILE_TAB.ABOUT_ME:
        return (<AboutMe />);
      // Mặc định: dòng thời gian
      default:
        return (<Timeline userId={userId} />);
    }
  }

  render() {
    return (
      <LoadingWrapper
        isError={this.state.isError}
        loading={this.state.loading}
      >
        {/* Heading Profile */}
        <HeadingProfile
          match={this.props.match}
          prefix={this.state.prefix}
          tab={this.state.tab}
          user={this.state.user}
        />
        {/* Content Profile */}
        {this.renderProfileContent()}
      </LoadingWrapper>
    );
  }
}

ProfileUser.propTypes = {
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  auth: PropTypes.objectOf(PropTypes.any).isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getUserDetail
  }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileUser);
