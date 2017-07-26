import { routerReducer as router } from 'react-router-redux';

import app from '../modules/app/reducer';
import user from '../modules/user/reducer';

export default {
    app,
    user,
    router,
};
