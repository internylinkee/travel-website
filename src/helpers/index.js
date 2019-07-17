import {
  isString
} from 'lodash';
import {
  Notification
} from 'components/common';
import messages from 'constants/messages';

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
}
