/* eslint-disable */
import React from 'react';
import axios from 'axios';
import {
  Row,
  Col,
  Card,
  Tabs,
  Input,
  Icon,
  Typography,
  Form,
  Select,
  Button,
  Upload,
} from 'antd';

const { TabPane } = Tabs;
const { TextArea } = Input;
const { Text } = Typography;
const { Option } = Select;

class FormPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoires: [],
      locations: [],
      currentTab: 'question',
      question: {
        title: '',
        content: '',
        tags: [],
        locations: [],
        images: [],
      },
      review: {
        title: '',
        content: '',
        description: '',
        tags: [],
        locations: [],
        images: [],
      },
      tour: {
        title: '',
        content: '',
        description: '',
        tags: [],
        locations: [],
        images: [],
      },
    };
  }

  handleTabChange = tab => {
    this.setState({
      ...this.state,
      currentTab: tab,
    });
  };

  handleContentChange = ({ target }) => {
    const { currentTab } = this.state;
    if (currentTab === 'question') {
      switch (target.name) {
        case 'title':
          this.setState({
            ...this.state,
            question: {
              ...this.state.question,
              title: target.value,
            },
          });
          break;
        case 'content':
          this.setState({
            ...this.state,
            question: {
              ...this.state.question,
              content: target.value,
            },
          });
          break;
      }
    }
    if (currentTab === 'review') {
      switch (target.name) {
        case 'title':
          this.setState({
            ...this.state,
            review: {
              ...this.state.review,
              title: target.value,
            },
          });
          break;
        case 'content':
          this.setState({
            ...this.state,
            review: {
              ...this.state.review,
              content: target.value,
            },
          });
          break;
        case 'description':
          this.setState({
            ...this.state,
            review: {
              ...this.state.review,
              description: target.value,
            },
          });
          break;
      }
    }
    if (currentTab === 'tour') {
      switch (target.name) {
        case 'title':
          this.setState({
            ...this.state,
            tour: {
              ...this.state.tour,
              title: target.value,
            },
          });
          break;
        case 'content':
          this.setState({
            ...this.state,
            tour: {
              ...this.state.tour,
              content: target.value,
            },
          });
          break;
        case 'description':
          this.setState({
            ...this.state,
            tour: {
              ...this.state.tour,
              description: target.value,
            },
          });
          break;
      }
    }
  };

  handleCategoyChange = e => {
    switch (this.state.currentTab) {
      case 'question':
        this.setState({
          ...this.state,
          question: {
            ...this.state.question,
            tags: e,
          },
        });
      case 'review':
        this.setState({
          ...this.state,
          review: {
            ...this.state.review,
            tags: e,
          },
        });
      case 'tour':
        this.setState({
          ...this.state,
          tour: {
            ...this.state.tour,
            tags: e,
          },
        });
    }
  };

  handleLocationChange = e => {
    switch (this.state.currentTab) {
      case 'question':
        this.setState({
          ...this.state,
          question: {
            ...this.state.question,
            locations: e,
          },
        });
      case 'review':
        this.setState({
          ...this.state,
          review: {
            ...this.state.review,
            locations: e,
          },
        });
      case 'tour':
        this.setState({
          ...this.state,
          tour: {
            ...this.state.tour,
            locations: e,
          },
        });
    }
  };

  handleFileChange = e => {
    switch (this.state.currentTab) {
      case 'question':
        this.setState({
          ...this.state,
          question: {
            ...this.state.question,
            images: e.fileList.map(file => file.originFileObj),
          },
        });
      case 'review':
        this.setState({
          ...this.state,
          review: {
            ...this.state.review,
            images: e.fileList.map(file => file.originFileObj),
          },
        });
      case 'tour':
        this.setState({
          ...this.state,
          tour: {
            ...this.state.tour,
            images: e.fileList.map(file => file.originFileObj),
          },
        });
    }
  };

  handleSubmit = async () => {
    const { currentTab } = this.state;
    const { title, content, description, images, tags, locations } = this.state[
      currentTab
    ];

    const formData = new FormData();
    images.forEach(image => formData.append('images', image));
    formData.append('title', title);
    formData.append('content', content);
    formData.append('description', description);
    formData.append('categories', JSON.stringify(tags));
    formData.append('locations', JSON.stringify(locations));
    formData.append('type', currentTab);
    try {
      const res = await axios({
        url: 'https://travel-internship.herokuapp.com/v1/posts',
        method: 'POST',
        headers: {
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsTmFtZSI6eyJmaXJzdE5hbWUiOiJzdHJpbmciLCJsYXN0TmFtZSI6InN0cmluZyJ9LCJyb2xlIjoidXNlciIsImZvbGxvd2VycyI6W10sImlzVG91ckd1aWRlIjpmYWxzZSwiX2lkIjoiNWQxYzFmYjhkZjI4ZjAwMDE3NWRjZTI5IiwiZW1haWwiOiJuZ29taW5oMDIwM0BnbWFpbC5jb20iLCJjcmVhdGVkQXQiOiIyMDE5LTA3LTAzVDAzOjIzOjM2Ljg4MVoiLCJ1cGRhdGVkQXQiOiIyMDE5LTA3LTAzVDAzOjIzOjM2Ljg4MVoiLCJfX3YiOjAsImlhdCI6MTU2MjY0OTgwNSwiZXhwIjoxOTIyNjQ5ODA1fQ.5Aa2J9OMWxrspaWNdttiO3DYPzM3Jf0K7jtScVdklFI',
        },
        data: formData,
      });
      this.setState({
        ...this.state,
        post: {
          title: '',
          content: '',
          description: '',
          tags: [],
          locations: [],
          images: [],
        },
      });
      console.log(res);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    }
  };

  async componentDidMount() {
    const categories = (await axios.get(
      'https://travel-internship.herokuapp.com/v1/categories'
    )).data;
    const locations = (await axios.get(
      'https://travel-internship.herokuapp.com/v1/locations'
    )).data;

    this.setState({
      categoires: categories,
      locations: locations,
    });
  }

  render() {
    return (
      <Card style={{ marginBottom: '20px' }}>
        <Tabs type="card" onTabClick={this.handleTabChange}>
          <TabPane
            key="question"
            tab={
              <Text>
                <Icon type="question-circle" />
                Câu hỏi
              </Text>
            }
          >
            <Form layout="vertical">
              <Form.Item label="Tiêu đề">
                <Input
                  placeholder="Nhập tiêu đề"
                  size="large"
                  name="title"
                  onChange={this.handleContentChange}
                />
              </Form.Item>
              <Row>
                <Col span={12} style={{ paddingRight: '20px' }}>
                  <Form.Item label="Gắn thẻ">
                    <Select
                      mode="multiple"
                      optionLabelProp="label"
                      placeholder="Chọn thẻ bài viết"
                      style={{ width: '100%' }}
                      onChange={this.handleCategoyChange}
                    >
                      {this.state.categoires.map(item => (
                        <Option label={item.name} value={item._id}>
                          {item.name}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Địa điểm">
                    <Select
                      mode="multiple"
                      optionLabelProp="label"
                      placeholder="Chọn địa điểm"
                      style={{ width: '100%' }}
                      onChange={this.handleLocationChange}
                    >
                      {this.state.locations.map(item => (
                        <Option label={item.name} value={item._id}>
                          {item.name}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item label="Nội dung">
                <TextArea
                  autosize={{ minRows: 6, maxRows: 12 }}
                  placeholder="Nhập nội dung"
                  name="content"
                  onChange={this.handleContentChange}
                />
              </Form.Item>
              <Form.Item>
                <div
                  style={{
                    float: 'right',
                    marginTop: '20px',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Upload
                    style={{ marginRight: '1rem' }}
                    onChange={this.handleFileChange}
                  >
                    <Button>
                      <Icon type="upload" /> Click to Upload
                    </Button>
                  </Upload>
                  <Button type="primary" onClick={this.handleSubmit}>
                    Đăng bài
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </TabPane>
          {/* Tag bài viết reviews */}
          <TabPane
            key="review"
            tab={
              <Text>
                <Icon type="form" />
                Bài viết
              </Text>
            }
          >
            <Form layout="vertical">
              <Form.Item label="Tiêu đề">
                <Input
                  placeholder="Nhập tiêu đề"
                  size="large"
                  name="title"
                  onChange={this.handleContentChange}
                />
              </Form.Item>
              <Form.Item label="Mô tả">
                <Input
                  placeholder="Nhập mô tả"
                  size="large"
                  name="description"
                  onChange={this.handleContentChange}
                />
              </Form.Item>
              <Row>
                <Col span={12} style={{ paddingRight: '20px' }}>
                  <Form.Item label="Gắn thẻ">
                    <Select
                      mode="multiple"
                      optionLabelProp="label"
                      placeholder="Chọn thẻ bài viết"
                      style={{ width: '100%' }}
                      onChange={this.handleCategoyChange}
                    >
                      {this.state.locations.map(item => (
                        <Option label={item.name} value={item._id}>
                          {item.name}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Địa điểm">
                    <Select
                      defaultValue={['Nha Trang']}
                      mode="multiple"
                      optionLabelProp="label"
                      placeholder="Chọn địa điểm"
                      style={{ width: '100%' }}
                      onChange={this.handleLocationChange}
                    >
                      {this.state.locations.map(item => (
                        <Option label={item.name} value={item._id}>
                          {item.name}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item label="Nội dung">
                <TextArea
                  autosize={{ minRows: 6, maxRows: 12 }}
                  placeholder="Nhập nội dung"
                  name="content"
                  onChange={this.handleContentChange}
                />
              </Form.Item>
              <Form.Item>
                <div
                  style={{
                    float: 'right',
                    marginTop: '20px',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Upload
                    style={{ marginRight: '1rem' }}
                    onChange={this.handleFileChange}
                  >
                    <Button>
                      <Icon type="upload" /> Click to Upload
                    </Button>
                  </Upload>
                  <Button type="primary" onClick={this.handleSubmit}>
                    Đăng bài
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </TabPane>
          {/* Tag tour du lịch, chỉ các tài khoản được duyệt là HDV mới hiển thị */}
          <TabPane
            key="tour"
            tab={
              <Text>
                <Icon type="book" />
                Tour du lịch
              </Text>
            }
          >
            <Form layout="vertical">
              <Form.Item label="Tiêu đề">
                <Input
                  placeholder="Nhập tiêu đề"
                  size="large"
                  name="title"
                  onChange={this.handleContentChange}
                />
              </Form.Item>
              <Form.Item label="Mô tả">
                <Input
                  placeholder="Nhập mô tả"
                  size="large"
                  name="description"
                  onChange={this.handleContentChange}
                />
              </Form.Item>
              <Row>
                <Col span={12} style={{ paddingRight: '20px' }}>
                  <Form.Item label="Gắn thẻ">
                    <Select
                      mode="multiple"
                      optionLabelProp="label"
                      placeholder="Chọn thẻ bài viết"
                      style={{ width: '100%' }}
                      onChange={this.handleCategoyChange}
                    >
                      {this.state.locations.map(item => (
                        <Option label={item.name} value={item._id}>
                          {item.name}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Địa điểm">
                    <Select
                      mode="multiple"
                      optionLabelProp="label"
                      placeholder="Chọn địa điểm"
                      style={{ width: '100%' }}
                      onChange={this.handleLocationChange}
                    >
                      {this.state.locations.map(item => (
                        <Option label={item.name} value={item._id}>
                          {item.name}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item label="Nội dung">
                <TextArea
                  autosize={{ minRows: 6, maxRows: 12 }}
                  placeholder="Nhập nội dung"
                  name="content"
                  onChange={this.handleContentChange}
                />
              </Form.Item>
              <Form.Item>
                <div
                  style={{
                    float: 'right',
                    marginTop: '20px',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Upload
                    style={{ marginRight: '1rem' }}
                    onChange={this.handleFileChange}
                  >
                    <Button>
                      <Icon type="upload" /> Click to Upload
                    </Button>
                  </Upload>
                  <Button type="primary" onClick={this.handleSubmit}>
                    Đăng bài
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </TabPane>
        </Tabs>
      </Card>
    );
  }
}

export default FormPost;
