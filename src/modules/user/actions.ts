import { fromPromise } from 'most';
import { select, Epic } from 'redux-most';

import * as D from '../../definitions';
import { login, signUp, logout } from '../../apis/user';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_SUC = 'USER_LOGIN_SUC';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';
export const USER_SIGN_UP = 'USER_SIGN_UP';
export const USER_SIGN_UP_SUC = 'USER_SIGN_UP_SUC';
export const USER_SIGN_UP_FAIL = 'USER_SIGN_UP_FAIL';
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGOUT_SUC = 'USER_LOGOUT_SUC';

export const userLogin = (user: D.UserForLogin): D.UserAction => ({ type: USER_LOGIN, payload: user });
export const userSignUp = (user: D.UserForLogin): D.UserAction => ({ type: USER_SIGN_UP, payload: user});
export const userLogout = (): D.UserAction => ({ type: USER_LOGOUT});

const loginEpic: Epic<D.GeneralAction> = (action$) => action$.thru(select(USER_LOGIN))
    .chain((action: D.UserAction) => fromPromise(login(action.payload)))
    .map((loginResponse: null | D.UserForLoginResponse) => {
      window.localStorage.setItem('username', loginResponse.username);
      window.localStorage.setItem('sessionToken', loginResponse.sessionToken);
      return (
        loginResponse
          ? {type: USER_LOGIN_SUC, payload: loginResponse}
          : {type: USER_LOGIN_FAIL}
      );
    });
const signUpEpic: Epic<D.GeneralAction> = (action$) => action$.thru(select(USER_SIGN_UP))
  .chain((action: D.UserAction) => fromPromise(signUp(action.payload)))
  .map((signUpResponse: null | D.User) => (
    signUpResponse
      ? {type: USER_SIGN_UP_SUC, payload: signUpResponse}
      : {type: USER_SIGN_UP_FAIL}
  ));

const logoutEpic: Epic<D.GeneralAction> = (action$) => action$.thru(select(USER_LOGOUT))
  .chain((action: D.UserAction) => fromPromise(logout()))
  .map(() => {
    window.localStorage.setItem('username', '');
    window.localStorage.setItem('sessionToken', '');
    return {type: USER_LOGOUT_SUC};
  });

export const epics: Array<Epic<D.GeneralAction>> = [
  loginEpic,
  signUpEpic,
  logoutEpic
];
