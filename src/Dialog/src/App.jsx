import React, { Component } from 'react';
import './index.scss';
import danarrrDesign from 'danarrr-uidesign/dist';
const Dialog = danarrrDesign.Dialog;
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    } 

    showDialog(configProps){ 
        this.setState({
            visible: true, // 展示弹框
            configProps,
        }) 
    }

    closeDiglog(){
        this.setState({
          visible: false, 
        })   
      }

    render() {
        const setDialogConfig = {
            defalutProps:{
              content: '正文',
              maskCloseable: true,
            },
            allShowProps:{
              buttons:[{ 
                text: '关闭',
               
              }],
            
              content: "正文",
              title: "输入标题。。",
              maskCloseable: true,
            }
        }

        return (
            <div className='mobile-page'>
                <div className='mobile-page__header'>
                    <div className='mobile-page__title'>Dialog 对话框</div>
                </div>
                <div className='mobile-page__body'>
                    <div className='mobile-page__btngroups'>
                        <button onClick={this.showDialog.bind(this, setDialogConfig.defalutProps)}>默认Dialog</button>
                        <button onClick={this.showDialog.bind(this, setDialogConfig.allShowProps)}>有标题有正文的Dialog</button>
                    </div>
                </div>
                

                <Dialog 
                    {...this.state.configProps}
                    visible = {this.state.visible}
                    closeFn={this.closeDiglog.bind(this)}
                />
            </div>
        );
    }
}