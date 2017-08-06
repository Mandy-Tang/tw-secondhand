import { fetchProduct, postProduct, uploadImage } from '../../apis/productApi'
import { fromPromise } from 'most';
import { select, Epic } from 'redux-most';
import { Product } from "../../definitions";
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

export const uploadImageActionCreator = (file) => {
  return {
    type: 'UPLOAD_IMAGE',
    payload: file,
  }
};

export const createProductActionCreator = (product) => {
  return {
    type: 'POST_PRODUCT',
    payload: product,
  }
};


const fetchProductEpic = (action$, store) => action$.thru(select('FETCH_PRODUCTS'))
  .chain(() => {
    store.dispatch({type: 'UPDATE_LOADER', payload: true})
    return fromPromise(fetchProduct())
  })
  .map((results: D.ProductState) => {
    store.dispatch({type: 'UPDATE_LOADER', payload: false})
    return updateProducts(results);
  });

const uploadImageEpic = (action$, store) => action$.thru(select('UPLOAD_IMAGE'))
  .chain((action$) => {
    store.dispatch({type: 'UPDATE_LOADER', payload: true})
    return fromPromise(uploadImage(action$.payload));
  })
  .map((results) => {
    store.dispatch({type: 'UPDATE_LOADER', payload: false});
    return {type: 'UPDATE_UPLOAD_IMAGE', payload: results};
  });

const postProductEpic = (action$, store) => action$.thru(select('POST_PRODUCT'))
  .chain((action$) => {
    store.dispatch({type: 'UPDATE_LOADER', payload: true})
    return fromPromise(postProduct(action$.payload));
  }).map(() => {
    store.dispatch({type: 'UPDATE_LOADER', payload: false});
    store.dispatch({type: 'UPDATE_UPLOAD_IMAGE', payload: ''})
    return {type: 'FETCH_PRODUCTS'};
  });

export const epics: Array<Epic<D.GeneralAction>> = [
  fetchProductEpic,
  uploadImageEpic,
  postProductEpic,
];
