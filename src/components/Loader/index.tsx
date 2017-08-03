import * as React from 'react'
import { connect } from 'react-redux';
import './index.css'

interface LoaderProps {
  loader?: true;
}

export const Loader = (props: LoaderProps) => {
  return <div id="loader" className={props.loader ? 'loader active' : 'loader'}/>
};

export default connect((state) => {
  return {loader: state.loader.loader}
})(Loader);
