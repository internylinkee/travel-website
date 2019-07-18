import React from 'react';
import PropTypes from 'prop-types';
import {
  Icon
} from 'antd';

const IconText = ({ type, text }) => (
  <span className="count-post">
    <Icon style={{ marginRight: 6 }} type={type} />
    {text}
  </span>
);

export default IconText;

IconText.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string
};

IconText.defaultProps = {
  type: '',
  text: ''
};
