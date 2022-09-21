import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './pages/login/login';
import { LOGIN_ROUTE } from './common/constant';
import ProtectedRoute from './components/router/ProtectedRoute';
import MainLayout from './components/layout/layout';

function App() {
  return (
    <Switch>
      <Route path={LOGIN_ROUTE} component={LoginPage} />
      <Route path="/" component={MainLayout} />
    </Switch>
  );
}

export default App;
