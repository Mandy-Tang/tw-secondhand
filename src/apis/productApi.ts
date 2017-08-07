import * as D from '../definitions';
import { FETCH_PRODUCTS_API, POST_PRODUCT_API, UPLOAD_IMAGE_API, FETCH_BOUGHT_API } from './urls';
import { fetchJson } from './utils';

let myHeaders = new Headers();
myHeaders.append('sessionToken', '93zui0ionzycxrl9jnbr8vyuf');

export const fetchProduct = (): Promise<D.Product[]> => fetchJson(FETCH_PRODUCTS_API, {});

export const uploadImage = (file) => {
  let formData = new FormData();
  formData.append('img', file);
  return fetchJson(UPLOAD_IMAGE_API, {
    method: 'POST',
    headers: myHeaders,
    body: formData,
  });
};

export const postProduct = (createProduct: D.Product) => {
  myHeaders.append('Content-Type', 'application/json');
  return fetchJson(POST_PRODUCT_API, {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(createProduct),
    }
  );
};

export const fetchBought = (): Promise<D.Product[]> => {
  myHeaders.append('Content-Type', 'application/json');
  return fetchJson(FETCH_BOUGHT_API, {
      method: 'GET',
      headers: myHeaders,
    }
  );
};