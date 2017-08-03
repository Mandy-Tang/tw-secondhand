import * as React from 'react';
import { connect } from 'react-redux';

import './ProductDetailPage.css';
import { ProductDetail, ProductDetailProps } from '../../../components';
import { Header } from '../../../components';
import { PopUpWrapper } from '../../Layout/Popup/PopUp';

interface ProductDetailPageProps {
  detail?: ProductDetailProps
};

export class ProductDetailPage extends React.Component<ProductDetailPageProps> {

  constructor(props) {
    super(props);
  }

  render() {
    let testData = {
      objectId: "324324324",
      name: 'iphone 6s',
      price: 3000,
      img: 'http://cdn2.gsmarena.com/vv/pics/apple/apple-iphone-7-1.jpg',
      status: 1,
      buyer: 'pei',
      description: 'rwerwe'
  };
    return (
      <div>
        <div className="App">
          <Header title="商品详情"/>
        </div>
        <div>
          {/*<ProductDetail key={this.props.detail.objectId} name={this.props.detail.name} img={this.props.detail.name} description={this.props.detail.description} buyer={this.props.detail.buyer} price={this.props.detail.price}/>*/}
          <ProductDetail key={testData.objectId} name={testData.name} img={testData.img} description={testData.description} buyer={testData.buyer} price={testData.price}/>
        </div>
      </div>
    );
  }
}

export default PopUpWrapper(connect()(ProductDetailPage));

