import * as Redux from 'redux';
import * as D from '../../definitions';

export const BoughtReducer: Redux.Reducer<D.ProductState> = (
  state: D.ProductState, action: D.ProductAction
): D.ProductState => {
  state = state || [];
  switch (action.type) {
    case 'UPDATE_BOUGHTS': {
      return action.payload;
    }
    default:
      return state;
  }
};

export default BoughtReducer;
