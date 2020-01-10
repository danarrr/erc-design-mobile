import React, { PureComponent, Component } from 'react';
import config from './../../_utils/prefix'
import classNames from 'classnames';
import propTypes from 'prop-types'

export default class SkeletonBox extends Component{
    constructor(props){
        super(props)
    }

    render() {
        const { style, prefixCls, className, justify, align, direction, children } = this.props;
        const selectClassName = classNames(
            prefixCls,
            className
        );

        return (
            // <div style={{...style, alignItems: align, justifyContent: justify, flexDirection: direction}} className={selectClassName}>
            //     {children}
            // </div>
            <div></div>
        );
    }
}

SkeletonBox.defaultProps = {
    prefixCls: `${config.cls}-skeleton-box`,
    className: '',
    style: {},
    justify: 'flex-start',
    align: 'flex-start',
    direction: "row",
}

SkeletonBox.propTypes = {
    prefixCls: propTypes.string,
    className: propTypes.string,
    style: propTypes.object,
    justify: propTypes.string,
    align: propTypes.string,
    direction: propTypes.string,
}