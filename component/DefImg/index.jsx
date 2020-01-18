import React, { PureComponent } from 'react';

// 裂图处理
export default class DefImg extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            src: props.defaultImg
        };

        let imgDom = document.createElement('img');
        imgDom.src = this.props.src;

        imgDom.addEventListener('load', () => {
            this.setState({
                src: this.props.src
            });
        });
        imgDom.addEventListener('error', e => {
            console.warn('img 404' + this.props.src);
            this.setState({
                src: this.props.errorImg
            });
        });

        imgDom = null;
    }

    handleError(event) {
        const { target } = event;

        target.src = this.state.errorImg;
    }

    componentDidUpdate(prevProps) {
        const { src: srcProps, errorImg } = this.props;
        const { src: srcPreProps } = prevProps;
        if (srcProps === srcPreProps) return;

        this.setState({
            src: srcProps,
            errorImg: errorImg
        });
    }

    render() {
        const { src } = this.state;
        const { isBackground } = this.props;
        const otherProps = Object.assign({}, this.props)
        const style = { backgroundImage: `url(${src})`, height: '200px', width: '200px' };
    
        const dom = isBackground ? (
            <div {...otherProps} key="def-img" style={style} />
        ) : (
            <img {...otherProps} src={src} key="def-img" onError={this.handleError.bind(this)} />
            );

        return [dom];
    }
}

// 错误图片适配多语言环境
const errorImgArr = {
    en: require('./img/error_en.jpg'),
    // jp: require('global/img/error_jp.jpg'),
    // fr: require('global/img/error_fr.jpg'),
    // ru: require('global/img/error_ru.jpg'),
    // es: require('global/img/error_es.jpg'),
    // mx: require('global/img/error_mx.jpg'),
};
const errorImg = errorImgArr['en'];
DefImg.defaultProps = {
    isBackground: false, // 是用img 还是 div background-image
    src: '', // 真实的url
    // defaultImg: require('global/img/null.jpg'), // 默认的url
    errorImg: errorImg.default // 错误显示的url
};
