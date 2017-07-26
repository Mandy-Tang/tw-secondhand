import * as React from 'react';
import { Route } from 'react-router';

import HomePage from '../containers/pages/Home/HomePage';
import AboutUsPage from '../containers/pages/AboutUs/AboutUsPage';

const router = (
    <div>
        <Route exact={true} path="/" component={HomePage}/>
        <Route path="/about-us" component={AboutUsPage}/>
    </div>
);

export default router;
