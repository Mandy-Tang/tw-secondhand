import * as D from '../definitions';
import { fetchJson } from './utils';
import { USER_LOGIN_API } from './urls';

export const login = (user: D.UserForLogin): Promise<D.User> => fetchJson(USER_LOGIN_API, user);
