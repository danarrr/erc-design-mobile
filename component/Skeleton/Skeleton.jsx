import React, { PureComponent, Component } from 'react';
import config from './../../_utils/prefix'
import propTypes from 'prop-types';
import classNames from 'classnames';

import SBox from './SkeletonBox';
// import Item from './SkeletonItem'


export default class Skeleton extends Component{
    constructor(props){
        super(props)
    }

    static SBox(){
        return SBox;
    }
    // static Item = Item;
    

    render(){
        const { style, prefixCls, className, children } = this.props;
        const selectClassName = classNames(
            prefixCls,
            className
        );

        return (
            <div style={style} className={selectClassName}>
                {children}
            </div>
        );
    }
}



Skeleton.defaultProps = {
    prefixCls: `${config.cls}-skeleton`,
    className: '',
    style: {},
}

Skeleton.propTypes = {
    prefixCls: propTypes.string,
    className: propTypes.string,
    style: propTypes.object,
}