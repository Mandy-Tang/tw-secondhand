import * as React from 'react';
import * as Redux from 'redux';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Logo, SignUpForm } from '../../../components';
import './SignUpPage.css';
import { userSignUp } from '../../../modules/user/actions';
import { bindActionCreators } from 'redux';

type SignUpPageProps<S> = DispatchProp<S> & RouteComponentProps<S> & {
  onSignUp: Redux.Dispatch<object>;
};

const SignUpPage = (props: SignUpPageProps<object>) => (
  <div>
    <div className="sign-up-header">
      <Logo/>
    </div>
    <div className="sign-up-form">
      <SignUpForm onSignUp={props.onSignUp}/>
    </div>
  </div>
);

function mapDispatchToProps (dispatch: Redux.Dispatch<object>) {
  return {
    onSignUp: bindActionCreators(userSignUp, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(SignUpPage);
