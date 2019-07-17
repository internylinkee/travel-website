import React from 'react';
import {
  Card,
  Tag
} from 'antd';

class ListTags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Card className="p-card" title="Thẻ">
          <Tag color="volcano">Ăn uống</Tag>
          <Tag color="geekblue">Vui chơi</Tag>
          <Tag color="purple">Tham quan</Tag>
        </Card>
        {/* Địa điểm */}
        <Card className="p-card" title="Địa điểm">
          <Tag>Nha Trang</Tag>
          <Tag>Đà Lạt</Tag>
          <Tag>Đà Nẵng</Tag>
          <Tag>Phú Quốc</Tag>
          <Tag>Vinh</Tag>
        </Card>
      </div>

    );
  }
}

export default ListTags;
