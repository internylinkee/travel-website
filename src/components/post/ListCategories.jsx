import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Card,
  Tag
} from 'antd';
import { get } from 'lodash';
import variables from 'constants/variables';

class ListCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {/* Thẻ */}
        <Card className="p-card" title="Thẻ">
          {this.props.categories.map((location, index) => (
            <Tag
              key={get(location, 'id', index)}
              color={variables.COLOR[Math.floor(Math.random() * variables.COLOR.length)]}
            >
              {get(location, 'name')}
            </Tag>
          ))}
        </Card>
      </div>
    );
  }
}

ListCategories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object)
};

ListCategories.defaultProps = {
  categories: []
};

const mapStateToProps = state => ({
  categories: state.common.categories.slice(0, 9)
});

export default connect(
  mapStateToProps,
  null
)(ListCategories);
