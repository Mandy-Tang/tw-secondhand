import * as D from '../definitions';
import {
  FETCH_PRODUCTS_API,
  POST_PRODUCT_API,
  UPLOAD_IMAGE_API,
  FETCH_BOUGHT_API,
  FETCH_OWNED_API,
  BUY_PRODUCT_API
} from './urls';
import { fetchJson } from './utils';

let myHeaders = new Headers();
myHeaders.append('sessionToken', 'ueh6vn3kev9lty83zqedwdaqr');
myHeaders.append('Content-Type', 'application/json');

export const fetchProduct = (): Promise<D.Product[]> => fetchJson(FETCH_PRODUCTS_API, {});

export const uploadImage = (file) => {
  myHeaders.delete('Content-Type');
  let formData = new FormData();
  formData.append('img', file);
  return fetchJson(UPLOAD_IMAGE_API, {
    method: 'POST',
    headers: myHeaders,
    body: formData,
  });
};

export const postProduct = (createProduct: D.Product) => {
  return fetchJson(POST_PRODUCT_API, {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(createProduct),
    }
  );
};

export const buyProduct = (productId: string) => {
  return fetchJson(BUY_PRODUCT_API + productId, {
    method: 'PUT',
    headers: myHeaders,
  })
};

export const fetchBought = (): Promise<D.Product[]> => {
  myHeaders.append('Content-Type', 'application/json');
  return fetchJson(FETCH_BOUGHT_API, {
      method: 'GET',
      headers: myHeaders,
    }
  );
};

export const fetchOwned = (): Promise<D.Product[]> => {
  myHeaders.append('Content-Type', 'application/json');
  return fetchJson(FETCH_OWNED_API, {
      method: 'GET',
      headers: myHeaders,
    }
  );
};
