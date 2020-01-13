import React, { Component } from 'react';
import './index.scss';
import danarrrDesign from 'danarrr-uidesign/dist'
const Skeleton = danarrrDesign.Skeleton;

export default class App extends Component {
    constructor(props) {
        super(props);
    } 

    render() {    

        return (
            <div className='mobile-page'>
                <div className='mobile-page__header'>
                    <h1 className='mobile-page__title'>Skeleton 骨架屏</h1>
                </div>
                <div className='mobile-page__body'>
                  description
                </div>
               
                <Skeleton>
                  <Skeleton.Box style={{ marginTop: '20px',height: '50px', width: '50%' }}> 
                  </Skeleton.Box>
              
                  <Skeleton.Item style={{ marginTop: '20px',height: '34px', width: '100%' }}/> 
                  <Skeleton.Item style={{ marginTop: '20px',height: '54px', width: '100%' }} />
                </Skeleton>  
            </div>
        );
    }
}