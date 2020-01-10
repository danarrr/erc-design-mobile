import React, { Component } from 'react';
import './index.scss';


class Mobile extends React.Component {
    static DemoBox = null;
    getDemoBox( div ) {
        this.DemoBox = div;
    }

    getFirame( iframe ) {
        this.iframe = iframe;
    }

    render() {
        const { index } = this.props;
        return (
            <div className="erc-mobile-box">
               
                <h2 id="modal">在线演示</h2>
                <div className="erc-mobile-content">
                    <div className="erc-mobile-header">
                        <div className="erc-mobile-header-bg"></div>
                        <div className="erc-mobile-search-box">
                            <p>https://danarrr.github.io/erc-design-mobile/{index}</p>
                            </div>
                        </div>
                    <div className="erc-mobile-body">
                        {/* 打包后展示在手机模拟器的页面 */}
                        <iframe 
                            ref={( iframe ) => { this.getFirame( iframe ); }} 
                            title='component-iframe' 
                            src={`./dist/html/${index}.html`} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Mobile;
