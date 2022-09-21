import React from 'react';
import { BackTop, Breadcrumb, Layout, Menu } from 'antd';
import Carouse from '../carouse/carouse';
import Map from '../map/maps';
import ActionHeader from '../header/header';
import './layout.scss';

const MainLayout = () => {
  const { Header, Content, Footer } = Layout;
  const items = [
    { label: 'Home', key: 'home' },
    { label: 'About', key: 'about' },
    { label: 'Service', key: 'service' },
    { label: 'Project', key: 'project' },
    { label: 'Contact', key: 'contact' },
  ];
  return (
    <Layout>
      <Header className="main-header">
        <div className="main-header-leftside">
          <span className="logo">Logo</span>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['home']}
            items={items}
          />
        </div>
        <ActionHeader />
      </Header>
      <Content
        className="site-layout"
        style={{ padding: '0 50px', marginTop: 64 }}
      >
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          <Carouse />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        <div
          className="fb-page"
          data-href="https://www.facebook.com/facebook"
          data-tabs="timeline"
          data-width=""
          data-height=""
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote
            cite="https://www.facebook.com/facebook"
            className="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/facebook">Facebook</a>
          </blockquote>
        </div>
        <Map />
      </Footer>
      <BackTop />
    </Layout>
  );
};

export default MainLayout;
