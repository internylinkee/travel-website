import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  Icon,
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

const { Title, Text, Paragraph } = Typography;

const IconText = ({ type, text }) => (
  <span className="count-post">
    <Icon style={{ marginRight: 6 }} type={type} />
    {text}
  </span>
);

IconText.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

const listData = [
  {
    id: '1',
    username: 'Sarah Hetfield',
    location: ['Đà Nẵng', 'Nha Trang'],
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
    title: 'Du lịch Phú Quốc nên ăn gì?',
    content: `Sibi minantia in onerosior iners. Mentes inmensa porrexerat regat inter coeperunt galeae inposuit.
    Mixta dispositam chaos: igni unda nulli posset: densior haec.
    Contraria septemque unda fuit plagae orba nubes valles terrarum.
    Peragebant vos neu divino viseret tenent terras sectamque onerosior.
    Sibi minantia in onerosior iners. Mentes inmensa porrexerat regat inter coeperunt galeae inposuit.
    Mixta dispositam chaos: igni unda nulli posset: densior h.
    Contraria septemque unda fuit plagae orba nubes valles terrarum.
    Peragebant vos neu divino viseret tenent terras sectamque onerosior.`,
    tags: ['Ăn uống', 'Vui chơi', 'Tham quan'],
    type: 'question'
  },
  {
    id: '2',
    username: 'Sarah Hetfield',
    location: ['Đà Nẵng'],
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
    title: 'Du lịch Phú Quốc nên ăn gì?',
    content: `Sibi minantia in onerosior iners. Mentes inmensa porrexerat regat inter coeperunt galeae inposuit.
    Mixta dispositam chaos: igni unda nulli posset: densior haec.
    Contraria septemque unda fuit plagae orba nubes valles terrarum.
    Peragebant vos neu divino viseret tenent terras sectamque onerosior.
    Sibi minantia in onerosior iners. Mentes inmensa porrexerat regat inter coeperunt galeae inposuit.
    Mixta dispositam chaos: igni unda nulli posset: densior h.
    Contraria septemque unda fuit plagae orba nubes valles terrarum.
    Peragebant vos neu divino viseret tenent terras sectamque onerosior.`,
    tags: ['Ăn uống', 'Tham quan'],
    type: 'review'
  }
];
class HorizontalPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderContent = (post) => {
    if (get(post, 'type') === 'question') {
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
          <img alt="Ảnh bìa" src={get(post, 'img')} style={{ width: '100%', height: '100%' }} />
        </div>
        <Title level={3}>{get(post, 'title')}</Title>
        <Paragraph ellipsis={{ rows: 6, expandable: true }}>
          {get(post, 'content')}
        </Paragraph>
        <Button href="/posts/:id/detail" size="large">Xem thêm</Button>
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
    const tags = get(post, 'tags');
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

  render() {
    return (
      <div>
        {listData.map((post, index) => (
          <Card
            key={index}
            className={classnames('p-card', {
              'p-card1': get(post, 'type') === 1,
              'p-card2': get(post, 'type') === 2
            })}
          >
            <Row style={{ marginBottom: '20px' }}>
              <Col span={2}>
                <Avatar size={56} src={get(post, 'avatar')} />
              </Col>
              <Col span={22} style={{ paddingTop: '5px' }}>
                <Text className="name-users">{get(post, 'username')}</Text>
                <span style={{ margin: '0 10px' }}>đã gắn địa điểm ở</span>
                <IconText text={get(post, 'location').join(', ')} type="environment" />
              </Col>
              <Col span={22}>
                <Text>March 2 at 9:06am</Text>
              </Col>
            </Row>
            <Row>{this.renderContent(post)}</Row>
            <Divider />
            <Row>
              <Col span={12}>
                <IconText text="156" type="heart" />
                <IconText text="2" type="message" />
                <IconText text="156" type="share-alt" />
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

export default HorizontalPosts;
