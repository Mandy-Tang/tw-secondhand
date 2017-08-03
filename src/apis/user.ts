import * as D from '../definitions';
import { fetchJson } from './utils';
import { USER_LOGIN_API, USER_SIGN_UP_API } from './urls';

export const login = (user: D.UserForLogin): Promise<D.User> => fetchJson(USER_LOGIN_API, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(user)
});

export const signUp = (user: D.UserForLogin): Promise<D.User> => fetchJson(USER_SIGN_UP_API, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(user)
});
