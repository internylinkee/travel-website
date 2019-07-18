import {
  isString,
  isEmpty
} from 'lodash';
import {
  Notification
} from 'components/common';
import messages from 'constants/messages';
import moment from 'moment';

const canceledList = [];

export default class Helpers {
  static generateKeyAPI() {
    const key = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    if (canceledList.filter(item => item.key === key).length > 0) {
      return Helpers.generateKeyAPI();
    }
    canceledList.push(key);
    return key;
  }

  /**
   * Throw error
   * @returns {void}
   * @static
   * @memberof Helpers
   */
  static throwError = (error, isJson = false) => {
    if (isJson) {
      throw new Error(JSON.stringify(error));
    }
    if (isString(error)) {
      throw new Error(error);
    }
    throw (error);
  }

  /**
   * Alert an error message
   * @param {string} error the error message
   * @returns {void}
   * @static
   * @memberof Helpers
   */
  static alertError = (error = '') => {
    Notification({
      type: 'error',
      className: 'notifi-error',
      message: messages.NOTIFICATION_TITLE,
      description: error
    });
  }

  /**
   * Alert an success message
   * @param {string} message the success message
   * @returns {void}
   * @static
   * @memberof Helpers
   */
  static alertSuccess = (message = '') => {
    Notification({
      type: 'success',
      className: 'notifi-success',
      message: messages.NOTIFICATION_TITLE,
      description: message
    });
  }

  /**
   *Get the datetime by format
   * @param {*} obj.value the datetime value
   * @param {string} obj.format the format which will be used to convert the value
   * @param {boolean} obj.isUTC if true, the value will be converted to UTC time (default use local time)
   * @param {boolean} obj.isString if true, the value will be returned as a string
   * @returns {moment} the moment instance
   * @static
   * @memberof Helpers
   */
  static getDateTime = ({
    value = undefined,
    format = null,
    isUTC = false,
    isString = true
  }) => {
    if (!value || !moment(value).isValid()) {
      return undefined;
    }
    const newValue = isUTC ? moment.utc(value) : moment.utc(value).local();
    let result = newValue;
    if (isString && isEmpty(format)) {
      result = moment(newValue).format();
    }
    if (isString && !isEmpty(format)) {
      result = moment(newValue).format(format);
    }
    if (!isString && isEmpty(format)) {
      result = moment(moment(newValue).format());
    }
    if (!isString && !isEmpty(format)) {
      result = moment(moment(newValue).format(format), format);
    }
    return result;
  }
}
