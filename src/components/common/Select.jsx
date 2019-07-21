import React, { PureComponent } from 'react';
import { Select as SelectAntd, Spin } from 'antd';
import {
  indexOf,
  debounce,
  isEmpty,
  get
} from 'lodash';
import PropTypes from 'prop-types';

const { Option } = SelectAntd;

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

export default class Select extends PureComponent {
  constructor(props) {
    super(props);
    this.lastFetchId = 0;
    this.loadData = debounce(this.loadData, 800);
    this.state = {
      value: undefined,
      loading: false
    };
    setIsMounted(true);
  }

  componentDidMount = () => {
    if (!isEmpty(this.props.value)) {
      this.setStateData({ value: this.props.value });
    }
  }

  componentWillUnmount() {
    setIsMounted(false);
  }

  /**
   * Set state properties
   * @param {object} data the data input
   * @param {function} callback the function which will be called after setState
   * @returns {void} call this.setState to update state
   * @memberof Select
   */
  setStateData = (state, callback) => {
    if (!getIsMounted()) {
      return;
    }
    this.setState(state, callback);
  }

  /**
   * Load data
   * @param {string} value Giá trị dùng để tìm kiếm
   * @returns {void} Gọi props.onLoadData
   * @memberof Select
   */
  loadData = async (value) => {
    if (this.props.onLoadData) {
      await this.setStateData({ loading: true });
      await this.props.onLoadData(value);
      await this.setStateData({ loading: false });
    }
  };

  /**
   * Thay đổi giá trị
   * @param {string} value Giá trị được thay đổi
   * @returns {void} Gọi props.onChange
   * @memberof Select
   */
  handleChange = (value) => {
    this.setStateData({
      value,
      loading: false
    });
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  };

  render() {
    const {
      loading,
      value
    } = this.state;
    return (
      <SelectAntd
        className={this.props.className}
        dropdownClassName={`dropdown-${this.props.name}`}
        filterOption={this.props.filterOption}
        labelInValue={this.props.labelInValue}
        mode={this.props.mode}
        notFoundContent={loading ? <Spin size="small" /> : null}
        onChange={this.handleChange}
        onSearch={this.loadData}
        placeholder={this.props.placeholder}
        showSearch={this.props.showSearch}
        style={this.props.style}
        value={value}
      >
        {this.props.dataSelect.map(item => (
          <Option
            key={item[get(this.props.fieldsName, 'value')]}
            disabled={indexOf(this.props.dataDisable, item[get(this.props.fieldsName, 'value')]) !== -1}
            name={item[get(this.props.fieldsName, 'name')]}
            value={item[get(this.props.fieldsName, 'value')]}
          >
            {item[get(this.props.fieldsName, 'name')]}
          </Option>
        ))}
      </SelectAntd>
    );
  }
}

Select.propTypes = {
  dataSelect: PropTypes.arrayOf(PropTypes.any),
  dataDisable: PropTypes.arrayOf(PropTypes.any),
  className: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  fieldsName: PropTypes.shape({
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }),
  // eslint-disable-next-line react/require-default-props
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array
  ]),
  placeholder: PropTypes.string,
  mode: PropTypes.string,
  filterOption: PropTypes.bool,
  showSearch: PropTypes.bool,
  labelInValue: PropTypes.bool,
  style: PropTypes.objectOf(PropTypes.any),
  onLoadData: PropTypes.func
};

Select.defaultProps = {
  dataSelect: [],
  dataDisable: [],
  className: '',
  name: '',
  onChange: null,
  fieldsName: {
    value: 'value',
    name: 'name'
  },
  placeholder: '',
  mode: 'default',
  filterOption: false,
  showSearch: false,
  labelInValue: false,
  style: { width: '100%' },
  onLoadData: null
};
