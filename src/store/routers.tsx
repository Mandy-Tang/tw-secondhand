import * as React from 'react';
import { Route } from 'react-router';

import HomePage from '../containers/pages/Home/HomePage';
import AboutUsPage from '../containers/pages/AboutUs/AboutUsPage';
import LoginPage from '../containers/pages/Login/LoginPage';
import ProductDetailPage from '../containers/pages/ProductDetail/ProductDetailPage';
import ProfilePage from '../containers/pages/Profile/ProfilePage';
import SignUpPage from '../containers/pages/SignUp/SignUpPage';
import BoughtPage from '../containers/pages/Bought/BoughtPage';
import OwnedPage from '../containers/pages/Owned/OwnedPage';
import ReleasePage from '../containers/pages/Release/index';

const router = (
  <div>
    <Route exact={true} path="/" component={HomePage}/>
    <Route path="/about-us" component={AboutUsPage}/>
    <Route path="/login" component={LoginPage}/>
    <Route path="/sign-up" component={SignUpPage}/>
    <Route path="/productDetail" component={ProductDetailPage}/>
    <Route path="/profile" component={ProfilePage}/>
    <Route path="/bought" component={BoughtPage}/>
    <Route path="/owned" component={OwnedPage}/>
    <Route path="/release" component={ReleasePage}/>
  </div>
);

export default router;
