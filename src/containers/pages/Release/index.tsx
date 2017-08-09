import * as React from 'react';
import FileUpload from '../../../components/FileUpload/index';
import './index.css';
import { connect, DispatchProp } from 'react-redux';
import { PopUpWrapper } from '../../Layout/Popup/PopUp';
import { Header, CheckLogin } from '../../../components';
import { RouteComponentProps } from 'react-router';
import { uploadImageActionCreator, createProductActionCreator } from '../../../modules/product/actions';
import { withRouter } from "react-router-dom";

export type PageProps<S> = DispatchProp<S> & RouteComponentProps<S> & {
  uploadedImg?: string
};

class ReleasePage extends React.Component<PageProps<Object>, { warningMsg?: boolean }> {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.handlePostProduct = this.handlePostProduct.bind(this);
  }

  handleImageUpload(file) {
    this.props.dispatch(uploadImageActionCreator(file));
  }

  handlePostProduct() {
    let postData = {
      ...this.state,
      "img": this.props.uploadedImg,
    };
    if (this.checkField(postData)) {
      this.props.dispatch(createProductActionCreator(postData));
      this.props.history.push('/');
    } else {
      this.setState({warningMsg: true})
    }
  }

  private checkField(postData) {
    return postData.name && postData.price && postData.description && postData.img ? true : false;
  }

  updateValueToState = (key) => (e) => {
    this.setState({
      [key]: e.target.value,
    })
  };

  render() {
    return (
      <div className="releasePage">
        <Header title="发布宝贝"/>
        <FileUpload onImageUpload={this.handleImageUpload} uploadedImage={this.props.uploadedImg}/>
        <div>
          <div className="inputGroup">
            <input name="name" type="text" placeholder="商品名称" onChange={this.updateValueToState('name')}/>
            <input name="price" type="text" placeholder="售价￥" onChange={this.updateValueToState('price')}/>
            <textarea
              name="description"
              placeholder="添加描述..."
              rows={10} cols={30}
              onChange={this.updateValueToState('description')}
            />
            {this.state.warningMsg ? <span>全部选项必填</span> : ''}
          </div>
          <button className="button" onClick={this.handlePostProduct}>
            开始出售
          </button>
        </div>
      </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    uploadedImg: state.uploadImg,
  };
};
export default CheckLogin(PopUpWrapper(connect(mapStateToProps)(withRouter(ReleasePage))));

