import { routerReducer as router } from 'react-router-redux';

import app from '../modules/app/reducer';
import boughts from '../modules/bought/reducer';
import owned from '../modules/owned/reducer';
import user from '../modules/user/reducer';
import products from '../modules/product/reducer';
import loader from '../modules/loader/reducer';
import uploadImg from '../modules/uploadImage/reducer';

export default {
  app,
  user,
  router,
  products,
  loader,
  uploadImg,
  boughts,
  owned
};
