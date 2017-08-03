import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import * as D from '../../../definitions';
import './HomePage.css';
import { layoutWrapper } from '../../Layout/index';
import ProductList from '../../../components/ProductList/index';
import Header from '../../../components/Header/Header';
import {fetchProducts} from '../../../modules/product/actions';

export type PageProps<S> = DispatchProp<S> & RouteComponentProps<S> & {
  user: D.UserState;
  products: D.ProductState;
};

class HomePage extends React.Component<PageProps<object>> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <Header title="精选"/>
        <ProductList items={this.props.products}/>
      </div>
    );
  }
}

const mapStateToProps = (state: D.RootState<object>) => {
  return {
    user: state.user,
    products: state.products,
  }
};

export default layoutWrapper(connect(
  mapStateToProps
)(HomePage));
