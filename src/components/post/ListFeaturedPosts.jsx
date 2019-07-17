import React from 'react';
import {
  Card,
  List,
  Avatar,
  Typography
} from 'antd';

const { Paragraph } = Typography;

const listData = [];
for (let i = 1; i < 6; i += 1) {
  listData.push({
    href: `/posts/${i}/detail`,
    title: `Bài viết ${i}`,
    img: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    description: `Sibi minantia in onerosior iners. Mentes inmensa porrexerat regat inter coeperunt galeae inp.
    Mixta dispositam chaos:igni unda nulli posset: densior haec. Contraria septemque unda`
  });
}

class ListFeaturedPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card className="p-card" title="Bài viết nổi bật">
        <List
          dataSource={listData}
          renderItem={item => (
            <List.Item key={item.title}>
              <List.Item.Meta
                avatar={<Avatar alt="Ảnh bìa" shape="square" size={64} src={item.img} />}
                description={(
                  <Paragraph ellipsis={{ rows: 2 }} style={{ marginBottom: 0 }}>
                    {item.description}
                  </Paragraph>
                )}
                title={<a href={item.href}>{item.title}</a>}
              >
              </List.Item.Meta>
            </List.Item>
          )}
        />
      </Card>
    );
  }
}

export default ListFeaturedPosts;
