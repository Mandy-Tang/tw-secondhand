import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { push } from 'react-router-redux';
import { layoutWrapper } from '../../Layout/index';
import { Header, Logo } from '../../../components';

const ProfilePage = (props: DispatchProp<object> & RouteComponentProps<object>) => (
  <div>
    <Header title="个人信息" />
    <div>
        <Logo />
    </div>
    <p>
      <button onClick={() => props.dispatch(push('/'))}>Go Back to Home</button>
    </p>
  </div>
);

export default layoutWrapper(connect()(ProfilePage));
