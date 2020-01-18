Popup 滑动对话框

## API

适用平台：WEB

创建一个具有动画效果的对话框。

## Popup

| 属性               | 说明                                                           | 类型       | 默认值     |
| ------------------ | -------------------------------------------------------------- | ---------- | ---------- |
| prefixCls          | 组件的公用className前序                                        | string     | danarrr-popup |
| direction          | 弹框弹出方向                                    | string     |   bottom       |其他值  

简单的例子

```javascript
const configProps = {
    buttons:[{ 
    text: '关闭',
    
    }],
    direction: 'right',
    content: "正文",
    title: "输入标题。。",
}
```
```html
<Popup
    {...configProps}
    visible={this.state.popupVisible}
    closeCallback={() => { this.setState( { popupVisible: false } ); }}
>
    <div className="modal-text">这是一个文案...</div>
</Popup>>
```

