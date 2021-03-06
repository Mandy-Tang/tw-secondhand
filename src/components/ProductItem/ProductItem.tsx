import * as React from 'react';
import { Link } from 'react-router-dom';
import './ProductItem.css';

const buyerIcon = require('../../containers/resources/buyer.svg');

export interface ProductItemProps {
  name?: string;
  img?: string;
  status?: number;
  price?: number;
  buyer?: {
    objectId?: string;
    username?: string;
  };
  id?: number;
}

const ProductItem = (props: ProductItemProps) => {
  return (
    <Link to={
      {
        pathname: "/productDetail",
        search: `?id=${props.id}`,
        state: {fromDashboard: true}
      }
    }>
      <div className={props.buyer ? 'productItem notActive' : 'productItem'}>
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
              <span className="productBuyer">{props.buyer.username}</span>
            </div> : ''
        }
        <span className="productStatus">
          {props.buyer ? '交易关闭':'出售中'}
        </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
