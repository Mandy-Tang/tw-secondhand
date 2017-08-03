import * as React from 'react'
import './index.css'

const uploadImageLogo = require('../../containers/resources/uploading-archive.svg');

interface FileUploadProps {
  uploadedImage?: string;
}

const FileUpload = (props: FileUploadProps) => {
  return <div className="fileUpload">
    {
      props.uploadedImage ? (<img src={props.uploadedImage} alt="preview-image" height="120px" width="120px"/>) : (
        (
          <div className="fileUpload">
            <label htmlFor="file-upload">
              <p>点击上传图片</p>
              <img src={uploadImageLogo} alt="uploadImageLogo" height="80px" width="80px"/>
            </label>
            <input id="file-upload" type="file"/>
          </div>
        )
      )
    }
  </div>
};

export default FileUpload;
