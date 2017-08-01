import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { push } from 'react-router-redux';
import { PopUpWrapper } from '../../Layout/Popup/PopUp';

const AboutUsPage = (props: DispatchProp<object> & RouteComponentProps<object>) => (
  <div>
    <h2>About Us</h2>
    <p>
      <button onClick={() => props.dispatch(push('/'))}>Go Back to Home</button>
    </p>
  </div>
);

export default PopUpWrapper(connect()(AboutUsPage));
