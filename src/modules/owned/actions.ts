import { fetchOwned } from '../../apis/productApi';
import { fromPromise } from 'most';
import { select, Epic } from 'redux-most';
import { Product } from '../../definitions';
import * as D from '../../definitions';

export const fetchOwneds = () => {
  return {
    type: 'FETCH_OWNED'
  };
};

export const updateOwned = (owned: Product[]) => {
  return {
    type: 'UPDATE_OWNED',
    payload: owned,
  };
};
const fetchOwnedEpic = (action$, store) => action$.thru(select('FETCH_OWNED'))
.chain(() => {
  store.dispatch({type: 'UPDATE_LOADER', payload: true});
  return fromPromise(fetchOwned());
})
.map((results: D.ProductState) => {
  store.dispatch({type: 'UPDATE_LOADER', payload: false});
  return updateOwned(results);
});

export const epics: Array<Epic<D.GeneralAction>> = [
    fetchOwnedEpic
];