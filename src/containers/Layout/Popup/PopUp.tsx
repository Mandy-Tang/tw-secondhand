import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import './PopUp.css';

const backIcon = require('../../../containers/resources/back.svg');
const closeIcon = require('../../../containers/resources/close.svg');

export type PopupProps<S> = DispatchProp<S> & RouteComponentProps<S> & {
    backStatus: string;
    title?: string;
};

class Layout extends React.Component<PopupProps<object>> {
    constructor(props: PopupProps<object>) {
        super(props);
    }
    iconController = (backStatus) => {
        return backStatus === 'back' ? backIcon : closeIcon;
    }
    back = (e) => {
        e.stopPropagation();
        this.props.history.goBack();
    }
    render() {
        const {backStatus, children} = this.props;
  
        return (
            <div className="popUpWrapper">
                <img src={this.iconController(backStatus)} className="popUpIcon" onClick={this.back}/>
                {children}
            </div>
        );
    }
}

const ConnectedLayout = connect()(Layout);

export const PopUpWrapper = InnerContent => (props) => {
    return (
        <ConnectedLayout {...props}>
            <InnerContent {...props}/>
        </ConnectedLayout>
    );   
};

export default ConnectedLayout;
