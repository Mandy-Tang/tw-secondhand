import * as React from 'react';
import './ProductDetail.css';
// import { default as Button } from '../Button/Button';

const buyerIcon = require('../../containers/resources/buyer.svg');

export interface ProductDetailProps {
  objectId?: string;
  name?: string;
  img?: string;
  price?: number;
  buyer?: object;
  owner?: {
    username?: string;
    objectId?: string;
  };
  description?: string;
}

class ProductDetail extends React.Component<ProductDetailProps> {

  handleBuy = (): void => {
    console.log("buy");
  };

  public render() {
    return (
      <div>
        <div className="product-img">
          <img src={this.props.img} alt={this.props.name} height="150px" width="150px"/>
        </div>
        <div className="product-base">
          <div className="product-name">
            {this.props.name}
          </div>
          <div className="product-price">
            ￥{this.props.price}
            {
              this.props.owner ?
                <div className="buyer-area">
                <span className="buyerIcon">
                  <img width="20px" height="20px" src={buyerIcon} alt="buyer"/>
                </span>
                  <span className="productBuyer">{this.props.owner.username}</span>
                </div> : ''
            }
          </div>

        </div>
        <div className="product-details">
          {this.props.description}
        </div>
        <div className="btn-wrapper">
          <button onClick={this.handleBuy}>立刻购买</button>
        </div>
      </div>);
  };

};

export default ProductDetail;
