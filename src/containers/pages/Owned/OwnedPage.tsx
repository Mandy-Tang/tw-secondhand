import * as React from 'react';
import { connect } from 'react-redux';
import { PopUpWrapper } from '../../Layout/Popup/PopUp';
import { Header, ProductList } from '../../../components';
import { fetchOwneds } from '../../../modules/owned/actions';
import { PageProps } from '../Home/HomePage';

class OwnedPage extends React.Component<PageProps<object>> {
    constructor(props: PageProps<object>) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(fetchOwneds());
    }
    render() {
        return (
            <div className="owned">
                <Header title="出售宝贝"/>
                <ProductList items={this.props.products}/>
            </div>
        );
    }
}
export default PopUpWrapper(connect(state => ({
    user: state.user,
    products: state.owned
}))(OwnedPage));
