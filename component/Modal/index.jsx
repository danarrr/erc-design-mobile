import React, { PureComponent } from 'react';
import Modal from './Modal';
import Error from './../../_utils/error.jsx'
import './Modal.scss';

export default class ModalComponent extends PureComponent{
    render(){
        return (
            <Error displayName='ModalComponent'>
                <Modal {...this.props}/>
            </Error>
        )
    }
}