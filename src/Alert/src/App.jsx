import React, { Component } from 'react';
import './index.scss';

import danarrrDesign from 'danarrr-uidesign/dist'
const Alert = danarrrDesign.Alert;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          alertVisible: false,
        };
    } 

    showAlert(configProps){
        this.setState({
          alertVisible: true, 
          configProps,
        })
    }

    closeAlert(){
      this.setState({
        alertVisible: false,
      })
    }

    render() {
      const setAlertConfig = {
        defalutProps:{
          title: '只有标题的dialog', 
          buttons:[{ text: '关闭', onPress: () => new Promise( ( resolve ) => {
            this.closeAlert();
          } ),}],
        },
        allShowProps:{
          buttons:[{ 
            text: '关闭',
            onPress: () => new Promise( ( resolve ) => {
              this.closeAlert();
            }),
          }],
        
          content: "正文",
          title: "输入标题。。",
          maskCloseable: true,
        },
        buttonsProps:{
          buttons:[{ 
            text: '关闭',
            onPress: () => new Promise( ( resolve ) => {
              this.closeAlert();
            }),
          },{ 
            text: '其他',
            onPress: () => new Promise( ( resolve ) => {
              this.closeAlert();
            }),
          }],
        
          content: "正文",
          title: "输入标题。。",
        },
        radioProps:{
          buttons:[{ 
            text: '关闭',
            onPress: () => new Promise( ( resolve ) => {
              this.closeAlert();
            }),
          },{ 
            text: '其他',
            onPress: () => new Promise( ( resolve ) => {
              this.closeAlert();
            }),
          },{ 
            text: '第三个按钮',
            onPress: () => new Promise( ( resolve ) => {
              this.closeAlert();
            }),
          }], 
          content: "正文",
          title: "输入标题。。",
        },
        maskCloseProps:{
            maskCloseable: true, 
            buttons:[{ 
              text: '关闭',
              onPress: () => new Promise( ( resolve ) => {
                this.closeAlert();
              }),
            },{ 
              text: '其他',
              onPress: () => new Promise( ( resolve ) => {
                this.closeAlert();
              }),
            }],
            content: "正文",
            title: "输入标题。。",
          },
        }
    

        return (
            <div className='mobile-page'>
                <div className='mobile-page__header'>
                    <div className='mobile-page__title'>alert 警告弹窗</div>
                </div>
                <div className='mobile-page__body'>
                  <div className='mobile-page__text'>
                      基本使用
                  </div>
                  <div className='mobile-page__btngroups'>
                    <button onClick={this.showAlert.bind(this, setAlertConfig.defalutProps)}>只有标题</button>    
                    <button onClick={this.showAlert.bind(this, setAlertConfig.allShowProps)}>有标题和正文</button>    
                    <button onClick={this.showAlert.bind(this, setAlertConfig.buttonsProps)}>双按钮</button>    
                    <button onClick={this.showAlert.bind(this, setAlertConfig.radioProps)}>单选框</button>    
                    <button onClick={this.showAlert.bind(this, setAlertConfig.maskCloseProps)}>点击mask关闭没生效</button>    
                  </div>
                </div>

                
          <Alert
            {...this.state.configProps}
            visible={this.state.alertVisible}
          >
          </Alert>  
            </div>
        );
    }
}