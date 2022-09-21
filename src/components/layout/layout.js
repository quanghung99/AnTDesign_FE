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
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fantdesign68&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width="340"
          height="300"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
        <Map />
      </Footer>
      <BackTop />
    </Layout>
  );
};

export default MainLayout;
