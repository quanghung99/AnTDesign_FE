import React, { Component } from 'react';
import HomePage from '../../pages/home/home';
import AboutPage from '../../pages/about/about';
import ContactPage from '../../pages/contact/contact';
import ServicePage from '../../pages/service/service';
import ProjectPage from '../../pages/project/project';
import { Route } from 'react-router-dom';
const RouteCommon = ({ component: Component, ...rest }) => {
  return (
    <Route
      render={(props) => {
        return <Component {...props} />;
      }}
    />
  );
};

export default RouteCommon;
