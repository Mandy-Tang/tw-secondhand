import * as React from 'react'
import {connect} from 'react-redux'

const Layout = ({status, title, ...children}) => {  
  return (
    <div className="popUpWrapper">
        <img src="{status}"/>
        <div className="popup-title">{title}</div>
        {children}
    </div>
  )
}

const ConnectedLayout = connect()(Layout)

const popUpWrapper = InnerContent => (props) => {
    return (
        <ConnectedLayout {...props}>
            <InnerContent {...props}/>
        </ConnectedLayout>
    )   
}

export {popUpWrapper};

export default ConnectedLayout;
