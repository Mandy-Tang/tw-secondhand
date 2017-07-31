import * as React from 'react';
import { Route } from 'react-router';

import HomePage from '../containers/pages/Home/HomePage';
import AboutUsPage from '../containers/pages/AboutUs/AboutUsPage';
import LoginPage from '../containers/pages/Login/LoginPage';

const router = (
  <div>
    <Route exact={true} path="/" component={HomePage}/>
    <Route path="/about-us" component={AboutUsPage}/>
    <Route path="/login" component={LoginPage}/>
  </div>
);

export default router;
