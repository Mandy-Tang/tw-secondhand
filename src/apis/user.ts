import * as D from '../definitions';
import { fetchJson } from './utils';
import { USER_LOGIN_API, USER_SIGN_UP_API, USER_LOGOUT_API } from './urls';

export const login = (user: D.UserForLogin): Promise<D.UserForLoginResponse> => fetchJson(USER_LOGIN_API, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(user)
});

export const logout = (): Promise<null> => fetchJson(USER_LOGOUT_API, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'sessionToken': localStorage.getItem('sessionToken')
  },
});

export const signUp = (user: D.UserForLogin): Promise<D.User> => fetchJson(USER_SIGN_UP_API, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(user)
});
