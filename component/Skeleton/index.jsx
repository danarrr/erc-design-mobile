import React, { PureComponent } from 'react';
import Skeleton from './Skeleton';
import Error from './../../_utils/error.jsx'
import './Skeleton.scss';

export default class SkeletonComponent extends PureComponent{
    render(){
        return (
            <Error displayName='SkeletonComponent'>
                <Skeleton {...this.props}/>
            </Error>
        )
    }
}