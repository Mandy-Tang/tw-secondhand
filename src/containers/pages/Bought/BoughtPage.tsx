import * as React from 'react';
import { connect } from 'react-redux';
import { PopUpWrapper } from '../../Layout/Popup/PopUp';
import { Header, ProductList } from '../../../components';
import { fetchBoughts } from '../../../modules/bought/actions';
import { PageProps } from '../Home/HomePage';

class BoughtPage extends React.Component<PageProps<object>> {
    constructor(props: PageProps<object>) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(fetchBoughts());
    }
    render() {
        return (
            <div className="bought">
                <Header title="已买宝贝"/>
                <ProductList items={this.props.products}/>
            </div>
        );
    }
}
export default PopUpWrapper(connect(state => ({
    user: state.user,
    products: state.boughts
}))(BoughtPage));
