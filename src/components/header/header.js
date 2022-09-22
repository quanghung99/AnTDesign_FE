// @ts-nocheck
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './header.scss';

const ActionHeader = () => {
  return (
    <div className="header-rightside">
      <Link to="/login">Login</Link>
    </div>
  );
};

export default ActionHeader;
