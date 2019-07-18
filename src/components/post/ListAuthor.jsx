import React from 'react';
import {
  Card,
  List,
  Avatar
} from 'antd';
import { get } from 'lodash';
import { IconText } from 'components/common';

const listData = [
  {
    id: 1,
    name: 'Sarah Hetfield',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3fBhLeTmBqCYHzDZIaK_-U-IWQ0VkI7O0CJ5YD4MRV4Hz7Foz'
  },
  {
    id: 2,
    name: 'Michael Maximoff',
    avatar: 'https://29a2c9fde86ba3b26cc5-b46d48c1c3e7071759cdbb9a4a64ab30.ssl.cf2.rackcdn.com/s/1/1444411493/author-photos-160W/101054.jpg'
  },
  {
    id: 3,
    name: 'Chris Greyson',
    avatar: 'https://www.cg-cooper.com/uploads/7/6/9/1/7691405/published/0c4a1744.jpg?1506475705'
  }

];


class ListAuthor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card className="p-card" title="Tác giả được yêu thích">
        <List
          dataSource={listData}
          renderItem={item => (
            <List.Item
              key={item.title}
              extra={<Avatar icon="heart" style={{ backgroundColor: '#2699fb' }} />}
            >
              <List.Item.Meta
                avatar={<Avatar alt="Avatar" size={40} src={item.avatar} />}
                description={[
                  <IconText key="1" text="13" type="heart" />,
                  <IconText key="2" text="3" type="form" />,
                  <IconText key="3" text="30" type="book" />
                ]}
                title={item.name}
              />
            </List.Item>
          )}
          rowKey={row => get(row, 'id')}
        />
      </Card>
    );
  }
}

export default ListAuthor;
