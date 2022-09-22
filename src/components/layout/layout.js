// @ts-nocheck
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from 'react';
import { BackTop, Breadcrumb, Layout, Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import FooterCommon from '../footer/footer';
import ActionHeader from '../header/header';
import './layout.scss';
import { Link, useHistory, useLocation } from 'react-router-dom';
import PageContent from './content';

const MainLayout = ({ children }) => {
  const items = [
    { label: 'Home', key: 'home', path: '/home' },
    { label: 'About', key: 'about', path: '/about' },
    { label: 'Service', key: 'service', path: '/service' },
    { label: 'Project', key: 'project', path: '/project' },
    { label: 'Contact', key: 'contact', path: '/contact' },
  ];
  const { Header, Content, Footer } = Layout;
  const [currentRoute, setCurrentRoute] = useState('');
  const history = useHistory();
  const { pathname } = useLocation();
  // const [selectedKey, setSelectedKey] = useState(
  //   // @ts-ignore
  //   items.find((_item) => pathname.startsWith(_item.path))
  // );

  useEffect(() => {
    setCurrentRoute(pathname);
  }, [pathname]);

  const clickBreadCum = (item) => {
    const clicked = items.find((_item) => _item.key === item.key);
    // @ts-ignore
    history.push(clicked?.path);
  };

  const onClickMenu = (item) => {
    const clicked = items.find((_item) => _item.key === item.key);
    // @ts-ignore
    history.push(clicked?.path);
    setCurrentRoute(clicked?.path);
  };
  console.log(currentRoute);
  // useEffect(() => {
  //   setSelectedKey(
  //     // @ts-ignore
  //     items.find((_item) => pathname.startsWith(_item.path))
  //   );
  // }, [pathname]);
  return (
    <Layout>
      <Header className="main-header">
        <div className="main-header-leftside">
          <span className="logo">Logo</span>
          <Menu
            // selectedKeys={selectedKey}
            theme="dark"
            mode="horizontal"
            onClick={onClickMenu}
          >
            {items.map((item) => (
              <Menu.Item key={item.key}>{item.label}</Menu.Item>
            ))}
          </Menu>
        </div>
        <ActionHeader />
      </Header>
      <Content
        className="site-layout"
        style={{ padding: '0 50px', marginTop: 64 }}
      >
        <Breadcrumb onClick={clickBreadCum} style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>
            {currentRoute === '/home' ? (
              <Link to="/home">
                <HomeOutlined />
              </Link>
            ) : (
              <>
                <Link to={currentRoute}>
                  <HomeOutlined />
                  {currentRoute}
                </Link>
              </>
            )}
          </Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          {children}
        </div>
      </Content>
      <FooterCommon />
      <BackTop />
    </Layout>
  );
};

export default MainLayout;
