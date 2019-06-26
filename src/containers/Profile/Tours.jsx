import React from 'react';
import {
  Layout,
  Row,
  Empty,
  Button
} from 'antd';
import { HeaderProfile } from 'components/users';

const { Content } = Layout;

class Tours extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Content>
        <HeaderProfile />
        <Row style={{ padding: '0 15px' }}>
          <Empty
            className="empty"
            description={(
              <span>
                Bạn chưa có thông tin làm Hướng dẫn viên
              </span>
            )}
            image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
            imageStyle={{
              height: 60
            }}
          >
            <Button type="primary">Tạo thông tin</Button>
          </Empty>
        </Row>
      </Content>
    );
  }
}

export default Tours;
