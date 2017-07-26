import * as D from '../../definitions';
import * as Redux from 'redux';

const initialState: D.AppState  = {
    loading: false,
    logined: false,
};

const appReducer: Redux.Reducer<D.AppState> = (state: D.AppState, action: Redux.Action): D.AppState => {
    state = state || initialState;
    return state;
};

export default appReducer;
