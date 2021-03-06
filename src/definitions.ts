import * as Redux from 'redux';
import * as ReactRouter from 'react-router';

// This file holds our app typings


// BUSINESS LOGIC
export interface App {
  loading: boolean;
}

export interface User {
  username: string;
  isLogin?: boolean;
}

export interface UserProfile {
  id?: string;
  email: string;
}

export interface UserForLogin {
  username: string;
  password: string;
}

export interface UserForLoginResponse {
  username: string;
  sessionToken: string;
}

export interface Product {
  description?: string;
  name: string;
  price?: number;
  owner?: object;
  img?: string;
  objectId?: string;
  createdAt?: string;
  updatedAt?: string;
}

export type ProductState = Product[];

// ACTION CREATORS


// ACTIONS
export interface GeneralAction extends Redux.Action {
  payload?: object,
}

export interface ProductAction extends Redux.Action{
  payload?: Product[];
}

export interface UserAction extends GeneralAction {
  payload?: UserForLogin,
}

// STATES
export type AppState = App;
export type UserState = User;

export interface RootState<S> {
  user?: UserState,
  app?: AppState,
  router?: ReactRouter.RouteComponentProps<S>,
  products?: ProductState,
}
