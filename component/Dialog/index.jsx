import React, { PureComponent } from 'react';
import Dialog from './Dialog';
import Error from './../../_utils/error.jsx'
import './Dialog.scss';
import './../../_style/animation.scss';

export default class DialogComponent extends PureComponent{
    render(){
        return (
            <Error displayName='PopupComponent'>
                <Dialog {...this.props}/>
            </Error>
        )
    }
}