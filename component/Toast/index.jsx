import React, { PureComponent } from 'react';
import Toast from './Toast';
import Error from './../../_utils/error.jsx'
import './Toast.scss';

export default class ToastComponent extends PureComponent{
    render(){
        return (
            <Error displayName='ToastComponent'>
                <Toast {...this.props}/>
            </Error>
        )
    }
}