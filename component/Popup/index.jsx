import React, { PureComponent } from 'react';
import Popup from './Popup';
import Error from './../../_utils/error.jsx'
import './Popup.scss';

export default class PopupComponent extends PureComponent{
    render(){
        return (
            <Error displayName='PopupComponent'>
                <Popup {...this.props}/>
            </Error>
        )
    }
}