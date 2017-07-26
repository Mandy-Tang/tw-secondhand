import * as D from '../definitions';
import { fetchJson } from './utils';

export const login = (user: D.UserForLogin): Promise<D.User> => fetchJson('/login', user);
