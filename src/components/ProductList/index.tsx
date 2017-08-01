import * as React from 'react';
import * as D from '../../definitions';
import { default as ProductItem } from '../ProductItem/ProductItem';

interface ProductListProps {
  items?: D.Product[];
}

const ProductList = (props: ProductListProps) => {
  return (
    <div className="productList">
      {
        props.items.map((e, i) => {
          return <ProductItem {...e} key={i}/>;
        })
      }
    </div>);
};

export default ProductList;
