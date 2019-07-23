import React from 'react';
import { connect } from 'react-redux';
import {
  Card,
  Tag,
  Typography,
  Divider,
  Row,
  Col
} from 'antd';
import { IconText } from 'components/common';

const { Text, Title } = Typography;

class ListRelatedPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Card className="title-related-posts" title="Các bài viết liên quan" />
        <Card
          className="p-card related-posts"
          cover={(
            <img
              alt="example"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwfMzZWidbLDPeiep0Gtn2B1pi_1GGtgBQrKcxpJSnuCDSQ3KidQ"
            />
          )}
        >
          <Text className="text-related-posts">
            Bởi <span className="author">JACK SCORPIO</span> - 5 tháng trước
          </Text>
          <Title level={4}>Những nơi nên đến khi bạn đi du lịch ở Phú Quốc</Title>
          <Divider />
          <Row>
            <Col span={12}>
              <IconText text="156" type="heart" />
              <IconText text="2" type="message" />
              <IconText text="156" type="share-alt" />
            </Col>
            <Col span={12}>
              <span className="tag-post">
                <Tag color="volcano">Ăn uống</Tag>
                <Tag color="geekblue">Vui chơi</Tag>
              </span>
            </Col>
          </Row>
        </Card>
      </React.Fragment>
    );
  }
}

ListRelatedPost.defaultProps = {
  locations: []
};

const mapStateToProps = state => ({
  locations: state.common.locations
});

export default connect(
  mapStateToProps,
  null
)(ListRelatedPost);
