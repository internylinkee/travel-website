import React from 'react';
import {
  Card,
  List,
  Icon,
  Avatar
} from 'antd';

const IconText = ({ type, text }) => (
  <span className="count-post">
    <Icon style={{ marginRight: 6}} type={type}/>
    {text}
  </span>
);

class ListAuthor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Card className="p-card" title="Tác giả được yêu thích">
        <List>
          <List.Item
            extra={<Avatar icon="heart" style={{ backgroundColor: '#7dbcea' }} />}
          >
            <List.Item.Meta
              avatar={<Avatar alt="Avatar" size={40} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3fBhLeTmBqCYHzDZIaK_-U-IWQ0VkI7O0CJ5YD4MRV4Hz7Foz" />}
              description={[
                <IconText text="13" type="heart" />,
                <IconText text="3" type="form" />,
                <IconText text="30" type="book" />
              ]}
              title="Sarah Hetfield"
            />
          </List.Item>
          <List.Item
            extra={<Avatar icon="heart" style={{ backgroundColor: '#7dbcea' }} />}
          >
            <List.Item.Meta
              avatar={<Avatar alt="Avatar" size={40} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3fBhLeTmBqCYHzDZIaK_-U-IWQ0VkI7O0CJ5YD4MRV4Hz7Foz" />}
              description={[
                <IconText text="13" type="heart" />,
                <IconText text="3" type="form" />,
                <IconText text="30" type="book" />
              ]}
              title="Sarah Hetfield"
            />
          </List.Item>
          <List.Item
            extra={<Avatar icon="heart" style={{ backgroundColor: '#7dbcea' }} />}
          >
            <List.Item.Meta
              avatar={<Avatar alt="Avatar" size={40} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3fBhLeTmBqCYHzDZIaK_-U-IWQ0VkI7O0CJ5YD4MRV4Hz7Foz" />}
              description={[
                <IconText text="13" type="heart" />,
                <IconText text="3" type="form" />,
                <IconText text="30" type="book" />
              ]}
              title="Sarah Hetfield"
            />
          </List.Item>
          <List.Item
            extra={<Avatar icon="heart" style={{ backgroundColor: '#7dbcea' }} />}
          >
            <List.Item.Meta
              avatar={<Avatar alt="Avatar" size={40} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3fBhLeTmBqCYHzDZIaK_-U-IWQ0VkI7O0CJ5YD4MRV4Hz7Foz" />}
              description={[
                <IconText text="13" type="heart" />,
                <IconText text="3" type="form" />,
                <IconText text="30" type="book" />
              ]}
              title="Sarah Hetfield"
            />
          </List.Item>
          <List.Item
            extra={<Avatar icon="heart" style={{ backgroundColor: '#7dbcea' }} />}
          >
            <List.Item.Meta
              avatar={<Avatar alt="Avatar" size={40} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3fBhLeTmBqCYHzDZIaK_-U-IWQ0VkI7O0CJ5YD4MRV4Hz7Foz" />}
              description={[
                <IconText text="13" type="heart" />,
                <IconText text="3" type="form" />,
                <IconText text="30" type="book" />
              ]}
              title="Sarah Hetfield"
            />
          </List.Item>
        </List>
      </Card>
    );
  }
}

export default ListAuthor;
