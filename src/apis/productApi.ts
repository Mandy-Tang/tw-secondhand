import * as D from '../definitions';
import { FETCH_PRODUCTS_API, UPLOAD_IMAGE_API } from './urls'
import { fetchJson } from './utils';

let myHeaders = new Headers();
myHeaders.append('sessionToken', '0shwjuon5x5bitvhy7wa27nt8');

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

