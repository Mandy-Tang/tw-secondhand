import { fetchBought } from '../../apis/productApi';
import { fromPromise } from 'most';
import { select, Epic } from 'redux-most';
import { Product } from '../../definitions';
import * as D from '../../definitions';

export const fetchBoughts = () => {
  return {
    type: 'FETCH_BOUGHT'
  };
};

export const updateBoughts = (boughts: Product[]) => {
  return {
    type: 'UPDATE_BOUGHTS',
    payload: boughts,
  };
};

const fetchBoughtEpic = (action$, store) => action$.thru(select('FETCH_BOUGHT'))
  .chain(() => {
    store.dispatch({type: 'UPDATE_LOADER', payload: true});
    return fromPromise(fetchBought());
  })
  .map((results: D.ProductState) => {
    store.dispatch({type: 'UPDATE_LOADER', payload: false});
    return updateBoughts(results);
  });

export const epics: Array<Epic<D.GeneralAction>> = [
    fetchBoughtEpic
];