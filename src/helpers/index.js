import {
  isString,
  isEmpty
} from 'lodash';
import {
  Notification
} from 'components/common';
import messages from 'constants/messages';
import moment from 'moment';
import { isArray } from 'util';

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
   * Thông báo error message
   * @param {string} message message
   * @returns {void}
   * @static
   * @memberof Helpers
   */
  static alertError = (message = '') => {
    Notification({
      type: 'error',
      className: 'notifi-error',
      message: messages.NOTIFICATION_TITLE,
      description: message
    });
  }

  /**
   * Thông báo message
   * @param {string} message message
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
   * Convert datetime theo format
   * @param {*} obj.value datetime value
   * @param {string} obj.format format
   * @param {boolean} obj.isUTC mặc định trả về giờ local, nếu isUTC = true, trả về giờ UTC
   * @param {boolean} obj.isString nếu isString = true, trả về datetime dạng string
   * @returns {moment} moment instance
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

  /**
   * Lấy độ dài của một mảng hoặc một chuỗi
   * @param {string|array} value giá trị cần lấy độ dài
   * @returns {number} độ dài của giá trị
   * @static
   * @memberof Helpers
   */
  static getLength = (value) => {
    if (isString(value) || isArray(value)) {
      return value.length;
    }
    return 0;
  }
}
