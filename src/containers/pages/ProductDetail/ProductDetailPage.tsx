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

  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.productId = parseInt(this.props.location.search.substring(1).split('=')[1]);
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
            <ProductDetail key={product.objectId} name={product.name} img={product.img}
                           description={product.description} owner={product.owner} price={product.price}/>
            : ""
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
