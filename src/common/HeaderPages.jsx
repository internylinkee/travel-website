import React from 'react';
import {
  Card,
  Row,
  Col,
  Typography,
  Cascader
} from 'antd';

const { Title } = Typography;

// Thanh search
const options = [
  {
    value: 'Reviews',
    label: 'Bài đánh giá',
    children: [
      {
        value: 'love',
        label: 'Yêu thích nhất',
        children: [
          {
            value: 'eat',
            label: 'Ăn uống'
          },
          {
            value: 'Tham quan',
            label: 'Tham quan'
          },
          {
            value: 'Vui chơi',
            label: 'Vui chơi'
          }
        ]
      },
      {
        value: 'comment',
        label: 'Bình luận nhiều nhất',
        children: [
          {
            value: 'eat',
            label: 'Ăn uống'
          },
          {
            value: 'Tham quan',
            label: 'Tham quan'
          },
          {
            value: 'Vui chơi',
            label: 'Vui chơi'
          }
        ]
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men'
          }
        ]
      }
    ]
  }
];

class HeaderPages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card style={{ margin: '20px 15px 0' }}>
        <Row gutter={24}>
          <Col span={12}>
            <Title level={4} style={{ margin: '5px 0 0' }}>Danh sách bài viết</Title>
          </Col>
          <Col span={12}>
            <Cascader options={options} placeholder="Loc bài viết theo ..." size="large" style={{ width: '100%' }} />
          </Col>
        </Row>
      </Card>
    );
  }
}

export default HeaderPages;
