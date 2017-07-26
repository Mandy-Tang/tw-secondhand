import { combineEpics } from 'redux-most';

import { epics as userEpic } from '../modules/user/actions';

export default combineEpics([
    ...userEpic,
]);