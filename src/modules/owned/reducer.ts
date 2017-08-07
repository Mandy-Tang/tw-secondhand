import * as Redux from 'redux';
import * as D from '../../definitions';

export const OwnedReducer: Redux.Reducer<D.ProductState> = (
  state: D.ProductState, action: D.ProductAction
): D.ProductState => {
  state = state || [];
  switch (action.type) {
    case 'UPDATE_OWNED': {
      return action.payload;
    }
    default:
      return state;
  }
};

export default OwnedReducer;
