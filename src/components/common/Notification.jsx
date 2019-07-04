import { notification as notificationAntd } from 'antd';
import PropTypes from 'prop-types';

export default function notification(props) {
  return notificationAntd.open({ duration: 2, ...props });
}

notification.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

notification.displayName = 'Notification';
