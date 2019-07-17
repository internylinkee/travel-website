import React from 'react';
import {
  Layout,
  Col,
  Row,
  Input,
  Button,
  Avatar,
  Menu,
  Dropdown,
  Card,
  Icon
} from 'antd';

const { Header: HeaderAntd } = Layout;
const { Search } = Input;
const { Meta } = Card;

const menu = (
  <Menu>
    <Menu.Item key="0">
      <Card
        actions={[
          <Button.Group>
            <Button href="/profile" style={{ display: 'inline' }} type="link">
              <Icon type="folder" />
              Cá nhân
            </Button>
            <Button type="link">
              <Icon type="logout" />
              Đăng xuất
            </Button>
          </Button.Group>
        ]}
        bordered={false}
        cover={(
          <Avatar
            size={128}
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            style={{ margin: '25px auto', display: 'inherit' }}
          />
        )}
        hoverable
        style={{ width: 240 }}
      >
        <Meta style={{ textAlign: 'center', fontWeight: 'bold' }} title="Van Vy" />
      </Card>
    </Menu.Item>
  </Menu>

);

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <HeaderAntd>
        <Row>
          <Col span={5}>
            <img alt="" src="/images/Logo1.png" style={{ height: '70px' }} />
          </Col>
          <Col span={6}>
            <Search
              placeholder="Nhập từ khóa"
            />
          </Col>
          {/* <Col lg={{ span: 4, offset: 9 }}>
            <Button style={{ marginRight: 8 }}>Đăng nhập</Button>
            <Button>Đăng ký</Button>
          </Col> */}

          <Col lg={{ span: 4, offset: 9 }}>
            <Dropdown overlay={menu} trigger={['click']}>
              <a className="ant-dropdown-link" href="true">
                <Avatar src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" size="large" />
                <span className="welcome-name">Xin chào, Van Vy</span>
                <Icon style={{ color: '#fff' }} type="down" />
              </a>
            </Dropdown>
          </Col>
        </Row>
      </HeaderAntd>
    );
  }
}

export default Header;
