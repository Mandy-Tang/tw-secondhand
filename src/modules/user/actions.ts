import { fromPromise } from 'most';
import { select, Epic } from 'redux-most';

import * as D from '../../definitions';
import { login } from '../../apis/user';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_SUC = 'USER_LOGIN_SUC';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';

export const userLogin = (user: D.UserForLogin): D.UserAction => ({ type: USER_LOGIN, payload: user });

const loginEpic: Epic<D.GeneralAction> = (action$) => action$.thru(select(USER_LOGIN))
    .chain((action: D.UserAction) => fromPromise(login(action.payload)))
    .map((loginResponse: null | D.User) => (
        loginResponse
        ? {type: USER_LOGIN_SUC, payload: loginResponse}
        : {type: USER_LOGIN_FAIL}
    ));

export const epics: Array<Epic<D.GeneralAction>> = [
  loginEpic,
];