import * as React from 'react';
import * as Redux from 'redux';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { layoutWrapper } from '../../Layout/index';
import { Header, Logo, Button, CheckLogin } from '../../../components';
import './ProfilePage.css';
import { userLogout } from '../../../modules/user/actions';
import CheckLogin from "../../../components/CheckLogin/CheckLogin";

export type ProfileProps<S> = DispatchProp<S> & RouteComponentProps<S> & {
  username: string;
  onLogout: Function;
};

class ProfilePage extends React.Component<ProfileProps<object>> {
  constructor() {
    super();
  }

  handleLougout = (e) => {
    e.preventDefault();
    this.props.onLogout();
  }

  render() {
    const {username} = this.props;
    return (
      <div className="profile">
        <Header title="个人信息"/>
        <div className="profileInfo">
          <Logo/>
          <span className="profileName">{username}</span>
        </div>
        <p>
          <Button destination="bought" text="已买宝贝"/>
        </p>
        <p>
          <Button destination="owned" text="出售宝贝"/>
        </p>
        <p>
          <Button destination="" text="退出登录" handleClick={this.handleLougout}/>
        </p>
      </div>
    );
  }
}

export default CheckLogin(layoutWrapper(connect(state => ({
  username: state.user.username
}), (dispatch: Redux.Dispatch<object>) => ({
  onLogout: Redux.bindActionCreators(userLogout, dispatch)
}))(ProfilePage)));
