import * as React from 'react';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';

import storeConfigure from './store';
import routers from './store/routers';

const history = createHistory();
const store = storeConfigure(history);

export default () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>{routers}</ConnectedRouter>
    </Provider>
);