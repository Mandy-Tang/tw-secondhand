import * as React from 'react';
import * as Redux from 'redux';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { PopUpWrapper } from '../../Layout/Popup/PopUp';
import { Logo, LoginForm } from '../../../components';
import './LoginPage.css';
import { userLogin } from '../../../modules/user/actions';
import { bindActionCreators } from 'redux';

type LoginPageProps<S> = DispatchProp<S> & RouteComponentProps<S> & {
  onLogin: Redux.Dispatch<object>;
};

const LoginPage = (props: LoginPageProps<object>) => (
  <div>
    <div className="login-header">
      <Logo/>
    </div>
    <div className="login-form">
      <LoginForm onLogin={props.onLogin}/>
    </div>
  </div>
);

function mapDispatchToProps (dispatch: Redux.Dispatch<object>) {
  return {
    onLogin: bindActionCreators(userLogin, dispatch)
  };
}

export default PopUpWrapper(connect(null, mapDispatchToProps)(LoginPage));
