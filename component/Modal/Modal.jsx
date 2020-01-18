import React, { PureComponent } from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types'; // todo类型检测
import config from '../../_utils/prefix'
import { throttle } from '../../_utils/throttleDebounce';
import scrollThrough  from  '../../_utils/scrollThrough';
// todo要解决滑动穿透  不然fullmodal没法用

import Dialog  from '../Dialog';

export default class Modal extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            isRenderModal: this.props.isRenderModal,
            visible: this.props.visible,
        }
    }

    componentWillReceiveProps(newProps){
        if(this.state.visible !== newProps.visible){
            this.setState({
                isRenderModal: newProps.visible,
                visible: newProps.visible
            // },()=>this.setAnimationName());
            })
        } else {
            this.close();
        }
    }

    createButton(item){
        return (<div {...item.props} onClick = {throttle(item.onPress)}>{item.text}</div>)
    }

    close = () =>{
        this.setState({
            visible: false
        })
        // todo
        // this.closeCallback();
    }

    createTitle(title){
        return (title && <div className={classNames(`${this.props.prefixCls}__title`)}>{title}</div>)
    }
    
    createFooter(){
        const {buttons, modalType} = this.props;
        if(!buttons.length && !modalType) return false;

        else {
            return modalType === 'full' ?  
            <div className={`${this.props.prefixCls}__closeicon`} onClick={this.close}></div>: 
            (
                <div className={buttons.length > 2 ? classNames(`${this.props.prefixCls}__radios`):
                    classNames(`${this.props.prefixCls}__buttons`)}>
                    {buttons.map(item => {
                        return this.createButton(item); // todo详细记录
                    })}
                </div>
            )
        }
    }

    setAnimationName(leaveOrNot){
        let name = this.props.transitionName;
        let transitionName = `${name}${leaveOrNot? '-leave':''}` ;
      
        this.setState({transitionName})
    }

    render(){
        const {
            children,
            maskCloseable,
            maskTransitionName,
            prefixCls,
            className,
            maskStyle,
            title,
            transparent,
            buttons,
            closable,
            style,
            closeFn,
            modalType
        } = this.props;

        return (
            <Dialog
                style={style}
                transparent={transparent}
                transitionName={this.state.transitionName}
                visible={this.state.visible}
                maskStyle={maskStyle}
                maskCloseable={maskCloseable}
                closeFn={this.close}
                boxClassName={classNames(`${prefixCls}__${modalType==='full'? 'fullbox': 'box'}`, className)}
                closeCallback={() => { this.closeCallback(); }}
                title={this.createTitle(title)}
                footer={closable || this.createFooter()}
            >
                <div className={classNames(`${prefixCls}__children`)}>
                    {children}
                </div>
            </Dialog>
        );
    } 
}

Modal.defaultProps = { // todo不正确
    prefixCls: `${config.cls}-modal`,
    maskTransitionName: `${config.cls}-fade`,
    style: {},
    maskStyle: {},
    className: '',
    closable: false,
    closeCallback() { },
    closeFn:{},
    visible: false,
    title: '',
    children: '',
    transitionName: `${config.cls}-zoom`,
    buttons: [],
    buttonDirection: 'horizontally',
    maskCloseable: false,
    transparent: false,
    modalType: null, // 模态框类型
}