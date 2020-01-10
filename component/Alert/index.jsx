import React, { PureComponent } from 'react';
import Alert from './Alert';
import Error from './../../_utils/error.jsx'
import './Alert.scss';

export default class AlertComponent extends PureComponent{
    render(){
        return (
            <Error displayName='AlertComponent'>
                <Alert {...this.props}/>
            </Error>
        )
    }
}