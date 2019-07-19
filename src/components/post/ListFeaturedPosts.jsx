import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  List,
  Avatar,
  Typography
} from 'antd';
import { get } from 'lodash';

const { Paragraph } = Typography;

const ListFeaturedPosts = props => (
  <Card className="p-card" title="Bài viết nổi bật">
    <List
      dataSource={props.data}
      renderItem={post => (
        <List.Item key={get(post, 'title')}>
          <List.Item.Meta
            avatar={<Avatar alt="Ảnh bìa" shape="square" size={64} src={get(post, 'featureImage')} />}
            description={(
              <Paragraph ellipsis={{ rows: 2 }} style={{ marginBottom: 0 }}>
                {get(post, 'content')}
              </Paragraph>
            )}
            title={(
              <a href={`/posts/${get(post, 'id')}/detail`}>
                <Paragraph ellipsis={{ rows: 1 }} style={{ marginBottom: 0 }}>
                  {get(post, 'title')}
                </Paragraph>
              </a>
            )}
          >
          </List.Item.Meta>
        </List.Item>
      )}
    />
  </Card>
);

ListFeaturedPosts.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

ListFeaturedPosts.defaultProps = {
  data: []
};

export default ListFeaturedPosts;
