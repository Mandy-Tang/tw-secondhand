import * as React from 'react';
import { connect } from 'react-redux';
import { PopUpWrapper } from '../../Layout/Popup/PopUp';
import { Header, ProductList } from '../../../components';
import { fetchProducts } from '../../../modules/product/actions';
import { PageProps } from '../Home/HomePage';

class BoughtPage extends React.Component<PageProps<object>> {
    constructor(props: PageProps<object>) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(fetchProducts());
    }
    render() {
        return (
            <div className="bought">
                <Header title="已买宝贝"/>
                <p>
                <ProductList items={this.props.products}/>
                </p>
            </div>
        );
    }
}
export default PopUpWrapper(connect(state => ({
    products: state.products
}))(BoughtPage));
