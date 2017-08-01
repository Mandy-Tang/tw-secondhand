import {fetchProduct} from '../../apis/productApi'
import {fromPromise} from 'most';
import {select, Epic} from 'redux-most';
import {Product} from "../../definitions";
import * as D from '../../definitions';

export const fetchProducts = () => {
  return {
    type: 'FETCH_PRODUCTS'
  }
};

export const updateProducts = (products: Product[]) => {
  return {
    type: 'UPDATE_PRODUCTS',
    payload: products,
  }
};

const fetchProductEpic = action$ => action$.thru(select('FETCH_PRODUCTS'))
  .chain(() => fromPromise(fetchProduct()))
  .map((results: D.ProductState) => {
    return updateProducts(results);
  });

export const epics: Array<Epic<D.GeneralAction>> = [
  fetchProductEpic,
];
