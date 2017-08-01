import * as D from '../definitions';
import { fetchJson } from './utils';

export const fetchProduct = (): Promise<D.Product[]> => fetchJson('http://secondhand.leanapp.cn/products', {});

