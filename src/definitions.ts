import * as Redux from 'redux';
import * as ReactRouter from 'react-router';

// This file holds our app typings


// BUSINESS LOGIC
export interface App {
    loading: boolean;
    logined: boolean;
}

export interface User {
    name: string;
}

export interface UserProfile {
    id?: string;
    email: string;
}

export interface UserForLogin {
    username: string;
    password: string;
}

// ACTION CREATORS


// ACTIONS
export interface GeneralAction extends Redux.Action {
    payload?: object,
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
}