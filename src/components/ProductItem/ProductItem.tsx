import * as React from 'react';
import './ProductItem.css';

const buyerIcon = require('../../containers/resources/buyer.svg');

export interface ProductItemProps {
  name?: string;
  img?: string;
  status?: number;
  price?: number;
  buyer?: string;
}

const ProductItem = (props: ProductItemProps) => {
  return (
    <div className={props.status === 0 ? 'productItem' : 'productItem notActive'}>
      <div className="productImage">
        <img src={props.img} alt={props.name} height="150px" width="150px"/>
      </div>
      <div className="productInfo">
        <span className="productName">
          {props.name}
        </span>
        <span className="productPrice">
          ￥{props.price}
        </span>
        {
          props.buyer ?
            <div className="buyerArea">
              <div className="buyerIcon">
                <img width="20px" height="20px" src={buyerIcon} alt="buyer"/>
              </div>
              <span className="productBuyer">{props.buyer}</span>
            </div> : ''
        }
        <span className="productStatus">
          {props.status === 0 ? '出售中' : '交易关闭'}
        </span>
      </div>
    </div>);
};

export default ProductItem;
