import React from 'react';
import {
  Card,
  List,
  Avatar,
  Typography
} from 'antd';

const { Paragraph } = Typography;

class ListFeaturedPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card title="Bài viết nổi bật">
        <List>
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar alt="Ảnh bìa" shape="square" size={64} src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />}
              description={(
                <Paragraph ellipsis={{ rows: 2 }}>
                  Sibi minantia in onerosior iners. Mentes inmensa porrexerat regat inter coeperunt galeae inp.
                  Mixta dispositam chaos:igni unda nulli posset: densior haec. Contraria septemque unda
                </Paragraph>
              )}
              title="Bài viết nổi mật 1"
            >
            </List.Item.Meta>
          </List.Item>
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar alt="Ảnh bìa" shape="square" size={64} src="https://www.w3schools.com/howto/img_snow.jpg" />}
              description={(
                <Paragraph ellipsis={{ rows: 2 }}>
                  Sibi minantia in onerosior iners. Mentes inmensa porrexerat regat inter coeperunt galeae inp.
                  Mixta dispositam chaos:igni unda nulli posset: densior haec. Contraria septemque unda
                </Paragraph>
              )}
              title="Bài viết nổi mật 2"
            >
            </List.Item.Meta>
          </List.Item>
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar alt="Ảnh bìa" shape="square" size={64} src="https://www.w3schools.com/w3images/fjords.jpg" />}
              description={(
                <Paragraph ellipsis={{ rows: 2 }}>
                  Sibi minantia in onerosior iners. Mentes inmensa porrexerat regat inter coeperunt galeae inp.
                  Mixta dispositam chaos:igni unda nulli posset: densior haec. Contraria septemque unda
                </Paragraph>
              )}
              title="Bài viết nổi mật 3"
            >
            </List.Item.Meta>
          </List.Item>
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar alt="Ảnh bìa" shape="square" size={64} src="https://lh3.googleusercontent.com/KP0uUZWi2GoW49T17y4P1U1ehscle9qTSivSZc2pDripm2zbtLScw_hR81S6pIyicLSP" />}
              description={(
                <Paragraph ellipsis={{ rows: 2 }}>
                  Sibi minantia in onerosior iners. Mentes inmensa porrexerat regat inter coeperunt galeae inp.
                  Mixta dispositam chaos:igni unda nulli posset: densior haec. Contraria septemque unda
                </Paragraph>
              )}
              title="Bài viết nổi mật 4"
            >
            </List.Item.Meta>
          </List.Item>
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar alt="Ảnh bìa" shape="square" size={64} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3fBhLeTmBqCYHzDZIaK_-U-IWQ0VkI7O0CJ5YD4MRV4Hz7Foz" />}
              description={(
                <Paragraph ellipsis={{ rows: 2 }}>
                  Sibi minantia in onerosior iners. Mentes inmensa porrexerat regat inter coeperunt galeae inp.
                  Mixta dispositam chaos:igni unda nulli posset: densior haec. Contraria septemque unda
                </Paragraph>
              )}
              title="Bài viết nổi mật 5"
            />
          </List.Item>
        </List>
      </Card>
    );
  }
}

export default ListFeaturedPosts;
