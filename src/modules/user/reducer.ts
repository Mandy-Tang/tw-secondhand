import * as D from '../../definitions';
import * as Redux from 'redux';

const initialState: D.UserState = {
    name: '',
};

const userReducer: Redux.Reducer<D.UserState> = (state: D.UserState, action: D.UserAction): D.UserState => {
    state = state || initialState;
    switch (action.type) {
        case 'USER_LOGIN_SUC':
            return {
                ...state,
                ...action.payload,
            };
        default:
    }
    return state;
};

export default userReducer;
