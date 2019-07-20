import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Card,
  Tag
} from 'antd';
import { get } from 'lodash';

class ListLocations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {/* Địa điểm */}
        <Card className="p-card" title="Địa điểm">
          {this.props.locations.map((location, index) => (
            <Tag
              key={get(location, 'id', index)}
            >
              {get(location, 'name')}
            </Tag>
          ))}
        </Card>
      </div>

    );
  }
}

ListLocations.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.object)
};

ListLocations.defaultProps = {
  locations: []
};

const mapStateToProps = state => ({
  locations: state.common.locations
});

export default connect(
  mapStateToProps,
  null
)(ListLocations);
