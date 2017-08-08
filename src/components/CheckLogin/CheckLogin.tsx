import { push } from 'react-router-redux';
// import store from '../../store/index';
import * as React from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';

interface CheckLoginProps {
  children?: any;
  dispatch?: Redux.Dispatch<object>;
}

interface CheckLoginState {
  isLogin: boolean;
}
class CheckLoginComponent extends React.Component<CheckLoginProps, CheckLoginState> {
  constructor () {
    super();
    this.state = {
      isLogin: false
    };
  }
  componentDidMount() {
    const isLogin = Boolean(window.localStorage.getItem('username'));
    this.setState({isLogin});
    if (!isLogin) {
      this.props.dispatch(push('/login'));
    }
  }
  render() {
    return this.props.children;
  }
}

const ConnectedCheckLogin = connect(state => state)(CheckLoginComponent);

const CheckLogin = InnerComp => (
  function check(props: any) {
    return (
      <ConnectedCheckLogin {...props}>
        <InnerComp {...props}/>
      </ConnectedCheckLogin>
    );
  }
);

export default CheckLogin;
