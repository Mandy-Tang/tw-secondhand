import * as React from 'react'
import FileUpload from "../../../components/FileUpload/index";
import './index.css'
import { connect } from "react-redux";
import { PopUpWrapper } from "../../Layout/Popup/PopUp";
import Header from "../../../components/Header/Header";
import Button from "../../../components/Button/Button";

class ReleasePage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header title="发布宝贝"/>
        <FileUpload/>
        <form action="" method="post">
          <div className="inputGroup">
            <input name="name" type="text" placeholder="商品名称"/>
            <input name="price" type="text" placeholder="售价￥"/>
            <textarea
              name="description"
              placeholder="添加描述..."
              rows={10} cols={30}
            />
          </div>
          <Button destination="" text="开始出售"/>
        </form>
      </div>)
  }
}

export default PopUpWrapper(connect()(ReleasePage));
