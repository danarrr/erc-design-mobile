import React, { PureComponent, Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import config from './../../_utils/prefix';
import {isDOM} from './../../_utils/typeOf';

const prefixCls = `${config.cls}-toast`;
let _parentNode = null;

function createParentNode( specifiedpParnet ){
    const parentNode = document.createElement( 'div' );
    if ( isDOM( specifiedpParnet ) ) {
        specifiedpParnet.appendChild( parentNode );
    } else {
        document.body.appendChild( parentNode );
    }
    return parentNode;
}

function getToast(type){
    _parentNode = createParentNode();

    ReactDOM.render(
        // <div className={zzcToastCls}>
        <div>
        
            {/* <div className={classNames( `${prefixCls}-notice-content`, isIconToast ? 'logo-box' : '' )}> */}
            <div className={classNames( `${prefixCls}-notice-content`)}>
                <div className={classNames( `${prefixCls}-text` )}>
                    {
                        ( type === 'success' || type === 'error' || type === 'waring' || type === 'loading' ) && <Icon type={(() => {
                            switch (type) {
                                case 'success': return 'success_outline';
                                case 'error': return 'error_outline';
                                case 'waring': return 'warning_outline';
                                case 'loading': return 'loading';
                            }
                        })()} />
                    }
                    <div className={classNames( `${prefixCls}-text-content` )}
                        dangerouslySetInnerHTML={{
                            // __html: content || '错误的正文'
                            __html: '错误的正文'
                        }}
                    />
                </div>
            </div>
        </div>
        ,_parentNode
    )
}

export default class Toast extends Component {
    static error(props){
        getToast('info', [...props])
    }
}

Toast.defaultProps = {
    prefixCls: `${config.cls}-toast`,
    className: '',
    style: {},
    justify: 'flex-start',
    align: 'flex-start',
    direction: "row",
}