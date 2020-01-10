import React, { PureComponent } from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';
import config from './../../_utils/prefix'
import Dialog  from './../../component/Dialog/Dialog';


export default class Popup extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            isRenderModal: this.props.isRenderModal,
            visible: this.props.visible,
            direction: this.props.direction,
        }
    }


    componentWillReceiveProps(newProps){
        if(this.state.visible !== newProps.visible){
            this.setState({
                isRenderModal: newProps.visible,
                visible: newProps.visible,
                direction: newProps.direction,
            }, ()=>this.setAnimationName());
                
        } else {
            this.close();
        }
    }

    close(){
        this.setAnimationName('leave');
        setTimeout(() => {
            this.setState({
                visible: false,
            });
        }, 200);
    }

    createTitle(title){
        return (<div className={classNames(`${this.props.prefixCls}__title`)}>{title}</div>)
    }

    setAnimationName(leaveOrNot){
        const { direction } = this.state;
        let transitionName = `${config.cls}-slide-${direction}${leaveOrNot? '-leave':''}` ;
        
        this.setState({transitionName})
      
    }

    render(){
        const {
            children,
            prefixCls,
            className,
            maskStyle,
            title,
            style,
        } = this.props;

        return (
            <Dialog
                style={style}
                transitionName={this.state.transitionName}
                visible={this.state.visible}
                maskStyle={maskStyle}
                maskCloseable={true}
                boxClassName={classNames(`${prefixCls}__box`, className)}
                closeFn={()=>this.close()}
                closeCallback={() => { this.closeCallback(); }}
                title={this.createTitle(title)}
            >
                <div className={classNames(`${prefixCls}__children`)}>
                    {children}
                </div>
            </Dialog>
    );
    }
    
}


Popup.defaultProps = {
    prefixCls: `${config.cls}-popup`,
    direction: 'bottom', // top left right bottom
    // preRender: false todo预渲染功能
}

Popup.propTypes = {
    prefixCls: propTypes.string,
    direction: propTypes.string,
}