import * as React from 'react';
import { connect } from 'react-redux';
import { Logo, LoginForm } from '../../../components';
import './LoginPage.css';

const LoginPage = () => (
  <div>
    <div className="login-header">
      <Logo/>
    </div>
    <div className="login-form">
      <LoginForm/>
    </div>
  </div>
);

export default connect()(LoginPage);
