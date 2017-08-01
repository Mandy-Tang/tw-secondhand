import { combineEpics } from 'redux-most';

import { epics as userEpic } from '../modules/user/actions';
import { epics as productEpic } from '../modules/product/actions';

export default combineEpics([
    ...userEpic,
    ...productEpic,
]);
