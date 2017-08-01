import {fetchProduct} from '../../apis/productApi'
import {Product} from "../../definitions";

export const fetchProducts = () => {
  return (dispatch, getState) => {
    fetchProduct().then((result) => {
      dispatch(updateProducts(result));
    })
  }
};

export const updateProducts = (products: Product[]) => {
  return {
    type: 'UPDATE_PRODUCTS',
    payload: products,
  }
};
