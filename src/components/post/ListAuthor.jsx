import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  List,
  Avatar
} from 'antd';
import { get } from 'lodash';
import { IconText } from 'components/common';

class ListAuthor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card className="p-card" title="Tác giả được yêu thích">
        <List
          dataSource={this.props.data}
          renderItem={author => (
            <List.Item
              key={get(author, 'fullName')}
              extra={<Avatar icon="heart" style={{ backgroundColor: '#2699fb' }} />}
            >
              <List.Item.Meta
                avatar={<Avatar alt="Avatar" size={40} src={get(author, 'avatar')} />}
                description={[
                  <IconText key="1" text={`${get(author, 'followerCount', 0)}`} type="heart" />,
                  <IconText key="2" text={`${get(author, 'postCount', 0)}`} type="form" />
                ]}
                title={get(author, 'fullName')}
              />
            </List.Item>
          )}
          rowKey={row => get(row, 'id')}
        />
      </Card>
    );
  }
}

ListAuthor.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

ListAuthor.defaultProps = {
  data: []
};

export default ListAuthor;
