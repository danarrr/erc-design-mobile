import React, { PureComponent } from 'react';
import config from './../../_utils/prefix'
import propTypes from 'prop-types';
import classNames from 'classnames';


export default class SkeletonItem extends PureComponent{
    constructor(props){
        super(props)
    }

    render(){
        const { style, prefixCls, className, height, width } = this.props;
        const selectClassName = classNames(
            prefixCls,
            className
        );
        // return(<div style={{...style, height: height, width: width}} className={selectClassName}/>)
            return(<div></div>)
    }
}

SkeletonItem.defaultProps = {
    prefixCls: `${config.cls}-skeleton-item`,
    className: '',
    style: {},
    height: null,
    width: null
}

SkeletonItem.propTypes = {
    prefixCls: propTypes.string,
    className: propTypes.string,
    style: propTypes.object,
    height: propTypes.number,
    width: propTypes.number,
}