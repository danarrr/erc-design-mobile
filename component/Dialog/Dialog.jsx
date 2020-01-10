import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';

import config from './../../_utils/prefix'

// 基建组件
class Dialog  extends React.Component{
    constructor(props){
        super(props)
        this.props = props;
       
    }
    
    createDialogMask(){
        const {
            maskClassName,
            maskStyle,
            maskCloseable, 
            closeFn,
            prefixCls,
            visible,
        } = this.props;

        return(
            visible ? <div  
                className={classNames(`${prefixCls}__mask`, maskClassName)}
                style={maskStyle}
                onClick={() =>{
                    if(maskCloseable){closeFn()}
                }}
                onTouchMove={(e) => { e.preventDefault(); }}
            >
            </div>:<div></div>
        )
    }

    close(){
       this.setState({
           visible: false,
       })   
    }

    createDialogBody(){
        const {
            title,
            children,
            footer,
            boxClassName,
            visible,
            content,
            prefixCls,
            transitionName,
        } = this.props;

        return(
            <div className={classNames(`${prefixCls}__body`, boxClassName, transitionName)} visible={visible}>
                {title}
                {children || content}
                {footer}
            </div>
        )
    }

    render(){
        const {
            prefixCls,
            className,
            style,
            visible,
        }
        = this.props;
        console.log("Dialog visible: ", visible)
        // if(visible){ scrollThrough.fixBody()} // 滑动穿透
        return(
            visible?
            <div style={style} className={classNames(`${prefixCls}`, className)}>
                {this.createDialogMask()}
                {this.createDialogBody()}
            </div>:<div></div>
        )  
    }
}


// 布局分为三个部分 body mask box
// 然后配置动画
// 基建  后面几个组件基于这个函数扩展
// componentdidcatch
// 防抖节流
// 滑动穿透 todo
// 同时引入的问题
// mask冒泡
Dialog.defaultProps = {
    prefixCls: `${config.cls}-dialog`,
    className: '',
    boxClassName: '',
    maskClassName: '',
    style: {},
    maskStyle: {},
    title: '',
    content: '',
    visible: false,
    maskCloseable: false, 
    closeCallback: {}, // 控制dialog关闭的方法
    showCloseBtn: true,
    transitionName: '', //动画弹出命名
    // useLock: true //默认使用滑动穿透 todo滑动穿透怎么解决
};
Dialog.propTypes = {
    className: propTypes.string, // 自定义最外层元素的className
    boxClassName: propTypes.string, //定义dialog最外层元素的class
    maskClassName: propTypes.string, //定义dialog的mask class	
    style: propTypes.object, // 自定义样式dialog的body的样式	
    maskStyle: propTypes.object, //自定义样式mask的body的样式
    title: propTypes.string, 
    closeCallback: propTypes.func, // 控制dialog关闭的方法
    visible: propTypes.bool,
    maskCloseable: propTypes.bool,
    showCloseBtn: propTypes.bool,
    isFixScrollThrough: propTypes.bool,
    confirmBtn: propTypes.func,
}
export default Dialog;