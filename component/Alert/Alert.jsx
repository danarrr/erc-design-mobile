import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import propTypes from 'prop-types'; // todo类型检测
import config from './../../_utils/prefix';
import { throttle } from './../../_utils/throttleDebounce';

import Modal  from './../../component/Modal';

export default class Alert extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            visible: this.props.visible,
        }
    }

    componentWillReceiveProps(newProps){
        if(this.state.visible !== newProps.visible){
            this.setState({
                visible: newProps.visible
            });
        } else {
            this.close();
        }
    }

    close(){
        this.setState({
            visible: false,
        });
        
        // todo
        // this.closeCallback();
    }

    render(){
        const {
            prefixCls,
            className,
            title,
            content,
            titleImg,
            buttons,
            maskCloseable
        } = this.props;

        return (
            <Modal
                transitionName={`${config.cls}-zoom`}
                visible={this.state.visible}
                title={title}
                maskCloseable={maskCloseable}
                // closeCallback={() => { this.removeAlert()}}    
                closeFn={()=>this.close.bind(this)}         
                buttons={buttons}
            >
                <div className={classNames(`${prefixCls}__children`)}>
                    {content}
                </div>
            </Modal>
        );
    } 
}

Alert.defaultProps = {
    prefixCls: `${config.cls}-alert`,
    className: 'ttt',
    style: {},
    title: '',
    content: null,
    titleImg: null,
    buttons: [],
    buttonDirection: 'horizontally',
    maskCloseable: false,
    closable: true,
    closeCallback() { }
}