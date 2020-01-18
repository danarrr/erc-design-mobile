import React, { Component } from 'react';
import './index.scss';
import danarrrDesign from 'danarrr-uidesign'
const Popup = danarrrDesign.Popup;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popupVisible: false,
        };
    } 

    showPopup(configProps){
        this.setState({
          popupVisible: true, 
          configProps,
        })
    }

    render() {
        const setPopConfig = {
            topProps:{
              direction: 'top',
              buttons:[{ 
                text: '关闭',
               
              }],
            
              content: "正文",
              title: "输入标题。。",
            },
            bottomProps:{
              buttons:[{ 
                text: '关闭',
               
              }],
              direction: 'bottom',
            
              content: "正文",
              title: "输入标题。。",
            },
            leftProps:{
              buttons:[{ 
                text: '关闭',
               
              }],
              direction: 'left',
            
              content: "正文",
              title: "输入标题。。",
            },
            rightProps:{
              buttons:[{ 
                text: '关闭',
               
              }],
              direction: 'right',
            
              content: "正文",
              title: "输入标题。。",
            }
        }
    

        return (
            <div className='mobile-page'>
                <div className='mobile-page__header'>
                    <h1 className='mobile-page__title'>popup 滑动弹框</h1>
                </div>
                <div className='mobile-page__body'>
                  <div className='mobile-page__btngroups'>
                    <button onClick={this.showPopup.bind(this, setPopConfig.bottomProps)}>从底部滑出弹框</button>    
                    <button onClick={this.showPopup.bind(this, setPopConfig.topProps)}>从顶部滑出弹框</button>    
                    <button onClick={this.showPopup.bind(this, setPopConfig.leftProps)}>从左边滑出弹框</button>    
                    <button onClick={this.showPopup.bind(this, setPopConfig.rightProps)}>从右边滑出弹框</button>    
                  </div>
                </div>
               
                <Popup
                    {...this.state.configProps}
                    visible={this.state.popupVisible}
                    closeCallback={() => { this.setState( { popupVisible: false } ); }}
                    >
                    <div className="modal-text">这是一个文案...</div>
                </Popup>  
            </div>
        );
    }
}