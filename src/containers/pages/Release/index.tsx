import * as React from 'react';
import FileUpload from '../../../components/FileUpload/index';
import './index.css';
import { connect, DispatchProp } from 'react-redux';
import { PopUpWrapper } from '../../Layout/Popup/PopUp';
import Header from '../../../components/Header/Header';
import Button from '../../../components/Button/Button';
import { RouteComponentProps } from 'react-router';
import { uploadImageActionCreator, createProductActionCreator } from '../../../modules/product/actions';

export type PageProps<S> = DispatchProp<S> & RouteComponentProps<S> & {
  uploadedImg?: string
};

class ReleasePage extends React.Component<PageProps<Object>> {
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
    this.props.dispatch(createProductActionCreator(postData));
  }

  updateValueToState = (key) => (e) => {
    this.setState({
      [key]: e.target.value,
    })
  };

  render() {
    return (
      <div>
        <Header title="发布宝贝"/>
        <FileUpload onImageUpload={this.handleImageUpload} uploadedImage={this.props.uploadedImg}/>
        <form action="" method="post">
          <div className="inputGroup">
            <input name="name" type="text" placeholder="商品名称" onChange={this.updateValueToState('name')}/>
            <input name="price" type="text" placeholder="售价￥" onChange={this.updateValueToState('price')}/>
            <textarea
              name="description"
              placeholder="添加描述..."
              rows={10} cols={30}
              onChange={this.updateValueToState('description')}
            />
          </div>
          <Button destination="" text="开始出售" handleClick={this.handlePostProduct}/>
        </form>
      </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    uploadedImg: state.uploadImg,
  }
}
export default PopUpWrapper(connect(mapStateToProps)(ReleasePage));
