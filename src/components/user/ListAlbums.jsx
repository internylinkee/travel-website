import React from 'react';
import {
  Card,
  Col,
  Row
} from 'antd';

class ListAlbums extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card title="Ảnh của bạn">
        <Row gutter={16}>
          <Col span={8} style={{ height: '80px', margin: '10px 0' }}>
            <img alt="Ảnh 1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3fBhLeTmBqCYHzDZIaK_-U-IWQ0VkI7O0CJ5YD4MRV4Hz7Foz" style={{ width: '100%', height: '100%' }} />
          </Col>
          <Col span={8} style={{ height: '80px', margin: '10px 0' }}>
            <img alt="Ảnh 1" src="https://lh3.googleusercontent.com/KP0uUZWi2GoW49T17y4P1U1ehscle9qTSivSZc2pDripm2zbtLScw_hR81S6pIyicLSP" style={{ width: '100%', height: '100%' }} />
          </Col>
          <Col span={8} style={{ height: '80px', margin: '10px 0' }}>
            <img alt="Ảnh 1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3fBhLeTmBqCYHzDZIaK_-U-IWQ0VkI7O0CJ5YD4MRV4Hz7Foz" style={{ width: '100%', height: '100%' }} />
          </Col>
          <Col span={8} style={{ height: '80px', margin: '10px 0' }}>
            <img alt="Ảnh 1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3fBhLeTmBqCYHzDZIaK_-U-IWQ0VkI7O0CJ5YD4MRV4Hz7Foz" style={{ width: '100%', height: '100%' }} />
          </Col>
          <Col span={8} style={{ height: '80px', margin: '10px 0' }}>
            <img alt="Ảnh 1" src="https://lh3.googleusercontent.com/KP0uUZWi2GoW49T17y4P1U1ehscle9qTSivSZc2pDripm2zbtLScw_hR81S6pIyicLSP" style={{ width: '100%', height: '100%' }} />
          </Col>
          <Col span={8} style={{ height: '80px', margin: '10px 0' }}>
            <img alt="Ảnh 1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3fBhLeTmBqCYHzDZIaK_-U-IWQ0VkI7O0CJ5YD4MRV4Hz7Foz" style={{ width: '100%', height: '100%' }} />
          </Col>
        </Row>
      </Card>
    );
  }
}

export default ListAlbums;
