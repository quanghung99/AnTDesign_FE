// @ts-nocheck
import React from 'react';
import './App.css';
import { Router, Switch } from 'react-router-dom';
import LoginPage from './pages/login/login';
import { LOGIN_ROUTE } from './common/constant';
import MainLayout from './components/layout/layout';
import AboutPage from './pages/about/about';
import ProjectPage from './pages/project/project';
import ContactPage from './pages/contact/contact';
import ServicePage from './pages/service/service';
import HomePage from './pages/home/home';
import RouteCommon from './components/layout/content';
import { history } from './utils/utils';
function App() {
  return (
    <Router history={history}>
      <MainLayout>
        <Switch>
          <RouteCommon exact path="/home" component={HomePage} />
          <RouteCommon exact path="/contact" component={ContactPage} />
          <RouteCommon exact path="/service" component={ServicePage} />
          <RouteCommon exact path="/project" component={ProjectPage} />
          <RouteCommon exact path="/about" component={AboutPage} />
          <RouteCommon exact path={LOGIN_ROUTE} component={LoginPage} />
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default App;
