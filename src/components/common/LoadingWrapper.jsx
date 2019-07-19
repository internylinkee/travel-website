import React from 'react';
import PropTypes from 'prop-types';
import { Loading, ErrorSystem, NoData } from 'components/common';

export default function loadingWrapper(props) {
  if (props.isError) {
    return (<ErrorSystem {...props.params} />);
  }
  if (props.loading) {
    return (<Loading {...props.params} />);
  }
  if (props.isEmpty) {
    return (<NoData {...props.params} />);
  }
  return props.children;
}

loadingWrapper.propTypes = {
  loading: PropTypes.bool,
  isError: PropTypes.bool,
  isEmpty: PropTypes.bool,
  children: PropTypes.node.isRequired,
  params: PropTypes.objectOf(PropTypes.any)
};

loadingWrapper.defaultProps = {
  loading: false,
  isError: false,
  isEmpty: false,
  params: {}
};

loadingWrapper.displayName = 'LoadingWrapper';
