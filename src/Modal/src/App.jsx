import React, { Component } from 'react';
import './index.scss';

import danarrrDesign from 'danarrr-uidesign';
const Modal = danarrrDesign.Modal;


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modalVisible: false,
        };
    } 

    showModal(configProps){
        this.setState({
          modalVisible: true, 
          configProps,
        })
    }

    closeModal(){
      this.setState({
        modalVisible: false,
      })
    }

    render() {
      const setModalConfig = {
        defalutProps:{
            title: '只有标题的dialog', 
            buttons:[{ text: '关闭', onPress: () => new Promise( ( resolve ) => {
              this.closeModal();
            } ),}],
          },
          allShowProps:{
            buttons:[{ 
              text: '关闭',
              onPress: () => new Promise( ( resolve ) => {
                this.closeModal();
              }),
            }],
          
            children: "正文",
            title: "输入标题。。",
            maskCloseable: true,
          },
          buttonsProps:{
            buttons:[{ 
              text: '关闭',
              onPress: () => new Promise( ( resolve ) => {
                this.closeModal();
              }),
            },{ 
              text: '其他',
              onPress: () => new Promise( ( resolve ) => {
                this.closeModal();
              }),
            }],
          
            children: "正文",
            title: "输入标题。。",
          },
          radioProps:{
            buttons:[{ 
              text: '关闭',
              onPress: () => new Promise( ( resolve ) => {
                this.closeModal();
              }),
            },{ 
              text: '其他',
              onPress: () => new Promise( ( resolve ) => {
                this.closeModal();
              }),
            },{ 
              text: '第三个按钮',
              onPress: () => new Promise( ( resolve ) => {
                this.closeModal();
              }),
            }], 
            children: "正文",
            title: "输入标题。。",
          },
          maskCloseProps:{
              maskCloseable: true, 
              children: "正文",
              title: "输入标题。。",
          },
          fullModalProps:{
            maskCloseable: true, 
            children: "正文正文正文正文正文正文正文正文正文正文正文正文",
            title: "输入标题。。",
            modalType: "full",
          },
      }
    

        return (
            <div className='mobile-page'>
                <div className='mobile-page__header'>
                    <div className='mobile-page__title'>modal 警告弹窗</div>
                </div>
                <div className='mobile-page__body'>
                  <div className='mobile-page__text'>
                    基本配置
                  </div>
                  <div className='mobile-page__btngroups'>
                    <button onClick={this.showModal.bind(this, setModalConfig.defalutProps)}>只有标题</button>    
                    <button onClick={this.showModal.bind(this, setModalConfig.allShowProps)}>有标题和正文</button>    
                    <button onClick={this.showModal.bind(this, setModalConfig.buttonsProps)}>双按钮</button>    
                    <button onClick={this.showModal.bind(this, setModalConfig.radioProps)}>单选框</button>    
                    <button onClick={this.showModal.bind(this, setModalConfig.maskCloseProps)}>点击mask关闭弹窗</button>    
                    <button>todo 可输入的弹框</button>    
                  </div>
                  <div className='mobile-page__text'>全屏模态框</div>
                  <div className='mobile-page__btngroups'>
                    <button onClick={this.showModal.bind(this, setModalConfig.fullModalProps)}>全屏模态框</button>    
                  </div>
                </div>

                
          <Modal
            {...this.state.configProps}
            visible={this.state.modalVisible}
          >
          </Modal>  
            </div>
        );
    }
}