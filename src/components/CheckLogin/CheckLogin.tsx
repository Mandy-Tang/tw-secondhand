import { push } from 'react-router-redux';
// import store from '../../store/index';
import * as React from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';

interface CheckLoginProps {
  children?: any;
  dispatch: Redux.Dispatch<object>;
  isLogin: boolean;
}

class CheckLoginComponent extends React.Component<CheckLoginProps> {
  constructor () {
    super();
  }
  componentDidMount() {
    if (!this.props.isLogin) {
      this.props.dispatch(push('/login'));
    }
  }
  render() {
    return this.props.children;
  }
}

const ConnectedCheckLogin = connect(state => ({isLogin: state.user.isLogin}))(CheckLoginComponent);

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
