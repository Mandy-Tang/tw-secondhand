import { combineEpics } from 'redux-most';

import { epics as userEpic } from '../modules/user/actions';
import { epics as productEpic } from '../modules/product/actions';
import { epics as boughtEpic } from '../modules/bought/actions';

export default combineEpics([
    ...userEpic,
    ...productEpic,
    ...boughtEpic,
]);
