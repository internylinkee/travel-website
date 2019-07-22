import React from 'react';
import {
  Col,
  Card,
  Typography,
  Avatar,
  Row,
  Icon
} from 'antd';
import { get } from 'lodash';
import { Link } from 'react-router-dom';

const { Text } = Typography;
const { Meta } = Card;

const listData = [
  {
    id: '1',
    name: 'Michael Maximoff',
    avatar: 'https://www.cg-cooper.com/uploads/7/6/9/1/7691405/published/0c4a1744.jpg?1506475705',
    img: 'https://lh3.googleusercontent.com/KP0uUZWi2GoW49T17y4P1U1ehscle9qTSivSZc2pDripm2zbtLScw_hR81S6pIyicLSP',
    liked: '89',
    post: '14',
    review: '10'
  },
  {
    id: '2',
    name: 'Marina Valentine',
    avatar: 'https://douglassmith.info/wp-content/uploads/DSmithHeadShColor.jpg',
    img: 'https://cdn.pixabay.com/photo/2016/09/01/10/23/image-1635747_960_720.jpg',
    liked: '13',
    post: '4',
    review: '5'
  },
  {
    id: '3',
    name: 'Carol Summers',
    avatar: 'http://madelinemiller.com/wp-content/uploads/2017/11/madeline-miller.jpg',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDWC5q01wnGvA9eS-y5UcqellDLXPB9DFuVJJK1nITwupjqpgy',
    liked: '25',
    post: '10',
    review: '9'
  },
  {
    id: '4',
    name: 'Elaine Dreifuss',
    avatar: 'https://dispatch.barnesandnoble.com/content/dam/ccr/bnstores/Contributor/BN_Authors_LP_DavidBaldacci.jpg',
    img: 'https://p.bigstockphoto.com/jtXew2QDQh6TWr8ha8eT_hp-hero-3.jpg',
    liked: '25',
    post: '10',
    review: '9'
  }
];

class ListTourGuides extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {listData.map(tourguide => (
          <Col key={tourguide.id} lg={6} md={12} sm={24} style={{ marginBottom: '20px' }} xs={24}>
            <Card
              key={get(tourguide, 'id')}
              actions={[
                <Link to="/">
                  <Icon style={{ margin: '10px' }} type="profile" />
                  Cá nhân
                </Link>,
                <span><Icon style={{ margin: '10px' }} type="wechat" />Liên hệ</span>
              ]}
              className="card-tour-guide"
              cover={(
                <img
                  alt="example"
                  src={get(tourguide, 'img')}
                  style={{ height: '100%' }}
                />
              )}
            >
              <div className="avatar-tourguide">
                <Avatar
                  alt="Avatar"
                  size={100}
                  src={get(tourguide, 'avatar')}
                />
              </div>
              <Text className="name-tourguide">{get(tourguide, 'name')}</Text>
              <Row style={{ textAlign: 'center', marginTop: '15px' }}>
                <Col span={8}>
                  <Meta description="Yêu thích" title={get(tourguide, 'liked')} />
                </Col>
                <Col span={8}>
                  <Meta description="Bài viết" title={get(tourguide, 'post')} />
                </Col>
                <Col span={8}>
                  <Meta description="Đánh giá" title={get(tourguide, 'review')} />
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </div>
    );
  }
}

export default ListTourGuides;
