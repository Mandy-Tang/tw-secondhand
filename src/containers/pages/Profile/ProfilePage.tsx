import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { layoutWrapper } from '../../Layout/index';
import { Header, Logo, Button } from '../../../components';
import './ProfilePage.css';

export type ProfileProps<S> = DispatchProp<S> & RouteComponentProps<S> & {
    user: object;
};

class ProfilePage extends React.Component<ProfileProps<object>> {
    render() {
        // const { user } = this.props;
        return (
            <div className="profile">
                <Header title="个人信息" />
                <div className="profileInfo">
                    <Logo />
                    <span className="profileName">user</span>
                </div>
                <p>
                <Button destination="" text="已买宝贝" />
                </p>
                <p>
                <Button destination="" text="出售宝贝" />
                </p>
                <p>
                <Button destination="" text="退出登录" />
                </p>
            </div>
        );
    }
}

export default layoutWrapper(connect(state => ({
    user: state.user
}))(ProfilePage));
