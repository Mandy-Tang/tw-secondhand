import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import * as D from '../../../definitions';

import './ProductDetailPage.css';
import { ProductDetail } from '../../../components';
import { Header } from '../../../components';
import { PopUpWrapper } from '../../Layout/Popup/PopUp';
import { RouteComponentProps } from "react-router";

type ProductDetailPageProps<S> = DispatchProp<S> & RouteComponentProps<S> & {
  products?: D.ProductState;
};

export class ProductDetailPage extends React.Component<ProductDetailPageProps<Object>> {
  private productId: number;
  private product: D.Product;

  constructor(props) {
    super(props);
    this.handleBuy = this.handleBuy.bind(this);
  }

  handleBuy() {
    this.props.dispatch({
      type: 'BUY_PRODUCT',
      payload: this.product.objectId,
    })
  }

  componentWillMount() {
    this.productId = parseInt(this.props.location.search.substring(1).split('=')[1]);
    this.product = this.props.products[this.productId];
  }

  render() {
    let product = this.props.products[this.productId];
    return (
      <div>
        <div className="App">
          <Header title="商品详情"/>
        </div>
        <div>
          {product ?
            <ProductDetail key={product.objectId}
                           name={product.name}
                           img={product.img}
                           description={product.description}
                           owner={product.owner}
                           price={product.price}
                           handleBuy={this.handleBuy}/> : ""
          }
        </div>
      </div>
    );
  }
}

export default PopUpWrapper(connect((state) => {
  return {
    products: state.products,
  }
})(ProductDetailPage));
