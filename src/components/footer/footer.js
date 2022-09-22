/* eslint-disable jsx-a11y/iframe-has-title */
import { Layout } from 'antd';
import React from 'react';
import Map from '../map/maps';
const FooterCommon = () => {
  const { Header, Content, Footer } = Layout;

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
  </Footer>;
};

export default FooterCommon;
