import React, { Component } from 'react';
import './index.scss';
import danarrrDesign from 'danarrr-uidesign';
const DefImg = danarrrDesign.DefImg;

export default class App extends Component {
    constructor(props) {
        super(props);
    } 

    render() {    

        return (
            <div className='mobile-page'>
                <div className='mobile-page__header'>
                    <h1 className='mobile-page__title'>DefImg 裂图处理</h1>
                </div>
                <div className='mobile-page__body'>
                  description
                </div>
            
                <DefImg isBackground src={'hha.jpg'} className="car-thumbnail" />
            </div>
        );
    }
}