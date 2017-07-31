import * as React from 'react';
import { default as ProductItem, ProductItemProps } from '../ProductItem/ProductItem';

interface ProductListProps {
  items?: ProductItemProps[];
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
