import React, { FC } from 'react';
import './App.css';
import './App.less';

import { Layout, Menu, Input, Row, Col, Slider } from 'antd';
import {
  PieChartOutlined,
  UserOutlined,
  BarsOutlined,
  PauseOutlined,
  SoundOutlined,
  StepBackwardOutlined,
  StepForwardOutlined
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;

class MainHeader extends React.Component {
  onSearch = (value: String) => console.log(value);

  render() {
    return (
      <Header className="site-layout-header site-layout-background" >
        <Search
          placeholder="输入歌曲名"
          allowClear
          enterButton="搜索"
          onSearch={this.onSearch}
          style={{ width: '350px' }}
        />
      </Header>
    )
  }
}

class MainContent extends React.Component {
  render() {
    return (
      <Content style={{ margin: '16px' }}>
        <div className="site-layout-background" style={{ padding: 24, height: '100%' }}>
          Bill is a cat.
            </div>
      </Content>
    )
  }
}

class MainFooter extends React.Component {
  render() {
    return (
      <Footer className="site-layout-footer site-layout-background" style={{ textAlign: 'center' }}>
        <Row style={{ height: '100%' }}>
          <Col span={4} className="footer-toolbar comm-flex-center">
            <Row style={{ width: '100%' }}>
              <Col span={8} className="comm-flex-center" ><StepBackwardOutlined className="comm-icon" /></Col>
              <Col span={8} className="comm-flex-center" ><PauseOutlined className="comm-icon" /></Col>
              <Col span={8} className="comm-flex-center" ><StepForwardOutlined className="comm-icon" /></Col>
            </Row>
          </Col>
          <Col span={16} className="footer-toolbar-main">
            <div className="title">
              <span>开始时间</span>
              <span>我是歌曲标题</span>
              <span>结束时间</span>
            </div>
            <Slider />
          </Col>
          <Col span={4} className="footer-toolbar comm-flex-center">
            <Row style={{ width: '100%' }}>
              <Col span={4} className="comm-flex-center" ><BarsOutlined className="comm-icon" /></Col>
              <Col span={3} className="comm-flex-center" ><SoundOutlined className="comm-icon" /></Col>
              <Col span={16}><Slider /></Col>
            </Row>
          </Col>
        </Row>
      </Footer>
    )
  }
}

class MainSider extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed: Boolean) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;

    return (
      <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
        <div className="logo" >
          All-Listen
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            精选歌单
            </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="我的歌单">
            <Menu.Item key="3">进击的巨人</Menu.Item>
            <Menu.Item key="4">进击的巨人</Menu.Item>
            <Menu.Item key="5">进击的巨人</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    )
  }
}


class Main extends React.Component {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <MainSider />
        <Layout className="site-layout">
          <MainHeader />
          <MainContent />
          <MainFooter />
        </Layout>
      </Layout>
    );
  }
}

const App: FC = () => (
  <div className="App">
    <Main />
  </div>
);

export default App;