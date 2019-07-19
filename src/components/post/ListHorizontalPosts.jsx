import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  Typography,
  Divider,
  Tag,
  Avatar,
  List,
  Button
} from 'antd';
import { get, isArray } from 'lodash';
import classnames from 'classnames';
import variables from 'constants/variables';
import Helpers from 'helpers';
import { IconText } from 'components/common';

const { Title, Text, Paragraph } = Typography;

class HorizontalPosts extends React.Component {
  renderContent = (post) => {
    if (get(post, 'type') === variables.TYPE_POST.QUESTION) {
      return (
        <React.Fragment>
          <Title level={3}>{get(post, 'title')}</Title>
          <Paragraph ellipsis={{ rows: 6, expandable: true }}>
            {get(post, 'content')}
          </Paragraph>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <div style={{ height: '350px', margin: '0 -25px 20px' }}>
          <img alt="Ảnh bìa" src={get(post, 'featureImage')} style={{ width: '100%', height: '100%' }} />
        </div>
        <Title level={3}>{get(post, 'title')}</Title>
        <Paragraph ellipsis={{ rows: 6, expandable: true }}>
          {get(post, 'content')}
        </Paragraph>
        <Button href={`/posts/${get(post, 'id')}/detail`} size="large">Xem thêm</Button>
      </React.Fragment>
    );
  }

  /**
   * Render Tags
   * @param {object} post data of a post
   * @returns {node} the list of tags
   * @memberof HorizontalPosts
   */
  renderTags = (post) => {
    const colors = variables.COLOR;
    const tags = (get(post, 'categories', []) || []).map(catg => catg.name);
    if (!isArray(tags)) {
      return null;
    }
    return (
      <span className="tag-post">
        {tags.map((tag, index) => (
          <Tag key={index} color={colors[Math.floor(Math.random() * colors.length)]}>{tag}</Tag>
        ))}
      </span>
    );
  }

  /**
   * Lấy thông tin của một user trong bài viết
   * @param {object} post
   * @returns {object}
   * @memberof HorizontalPosts
   */
  getUserInfo = (post) => {
    const lastName = get(post, 'user.fullName.lastName');
    const firstName = get(post, 'user.fullName.firstName');
    const name = `${lastName} ${firstName}` || '';
    const avatar = get(post, 'user.avatar') || '';
    const location = (get(post, 'locations', []) || []).map(item => item.name).join(', ');
    return {
      lastName,
      firstName,
      name,
      avatar,
      location
    };
  }

  render() {
    return (
      <div>
        {this.props.data.map((post, index) => (
          <Card
            key={index}
            className={classnames('p-card', {
              'p-card1': get(post, 'type') === 1,
              'p-card2': get(post, 'type') === 2
            })}
          >
            <Row style={{ marginBottom: '20px' }}>
              <Col span={2}>
                <Avatar size={56} src={this.getUserInfo(post).avatar} />
              </Col>
              <Col span={22} style={{ paddingTop: '5px' }}>
                <Text className="name-users">{this.getUserInfo(post).name}</Text>
                <span style={{ margin: '0 10px' }}>đã gắn địa điểm ở</span>
                <IconText text={this.getUserInfo(post).location} type="environment" />
              </Col>
              <Col span={22}>
                <Text>
                  {Helpers.getDateTime({
                    value: get(post, 'updatedAt'),
                    format: variables.DATE_FORMAT.DATETIME
                  })}
                </Text>
              </Col>
            </Row>
            <Row>{this.renderContent(post)}</Row>
            <Divider />
            <Row>
              <Col span={12}>
                <IconText text={`${Helpers.getLength(get(post, 'likes'))}`} type="heart" />
                <IconText text={`${get(post, 'commentCount', 0)}`} type="message" />
                <IconText text={`${Helpers.getLength(get(post, 'sharea'))}`} type="share-alt" />
              </Col>
              <Col span={12}>
                {this.renderTags(post)}
              </Col>
            </Row>
            <List className="control-post-button">
              <List.Item>
                <Avatar icon="heart" style={{ backgroundColor: '#2699fb' }} />
              </List.Item>
              <List.Item>
                <Avatar icon="message" style={{ backgroundColor: '#2699fb' }} />
              </List.Item>
              <List.Item>
                <Avatar icon="share-alt" style={{ backgroundColor: '#2699fb' }} />
              </List.Item>
            </List>
          </Card>
        ))}
      </div>
    );
  }
}

HorizontalPosts.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

HorizontalPosts.defaultProps = {
  data: []
};

export default HorizontalPosts;
