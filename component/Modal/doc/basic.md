Modal 对话框

## API

适用平台：WEB

用作显示系统的重要信息，并请求用户进行操作反馈，eg：删除某个重要内容时，弹出 Modal 进行二次确认。

## 规则
- 尽可能少用会打断用户操作。
- 用户按钮控制在2-3个，此组件三个以上按钮展示不同样式。
- 用户使用习惯, 把常用点击按钮放在右侧，取消按钮始终放在右侧。

## Modal

| 属性               | 说明                                                           | 类型       | 默认值     |
| ------------------ | -------------------------------------------------------------- | ---------- | ---------- |
| prefixCls          | 组件的公用className前序                                        | string     | zds-dialog |
| className          | 定义dialog最外层元素的class                                    | string     | 无         |
| boxClassName       | 定义dialog的body class                                         | string     | 无         |
| maskClassName      | 定义dialog的mask class                                         | string     | 无         |
| maskTransitionName | 定义dialog的mask 的动画class标识                               | string     | 无         |
| transitionName     | 定义dialog的mask 的动画class标识                               | string     | 无         |
| style              | 自定义样式dialog的body的样式                                   | object     | {}         |
| maskStyle          | 定义dialog的mask的样式                                         | string     | 无         |
| title              | dialog显示的title                                              | JSXElement | 无         |
| footer             | dialog显示的footer                                             | JSXElement | 无         |
| visible            | 控制dialog执行动画                                             | boolean    | false      |
| maskClose          | 点击mask触发关闭                                               | boolean    | false无    |
| transparent        | 是否不创建mask                                                 | boolean    | false      |
| closeCallback      | 控制dialog关闭的方法                                           | function   | 无         |
| boxAnimated        | box动画事件，返回一个参数说明当前结束的动画属于enter还是leave  | function   |            |
| maskAnimated       | mask动画事件，返回一个参数说明当前结束的动画属于enter还是leave | function   |            |


## 简单的例子
### 基本配置
```javascript
const configProps = {
    title: '只有标题的dialog', 
    buttons:[{ 
        text: '关闭', 
        onPress: () => new Promise(( resolve ) => {
        this.closeModal();})
    }],
}
```

### 全屏模态框
```javascript
const fullModalProps ={
    maskCloseable: true, 
    children: "正文正文正文正文正文正文正文正文正文正文正文正文",
    title: "输入标题。。",
    modalType: "full",
}
```
```html      
<Modal
    {...configProps}
    visible={this.state.modalVisible}
    >
</Modal>
```