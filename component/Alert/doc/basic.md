Alert对话框

## API

适用平台：WEB

创建一个对话框，modal和alert都是基于dialog进行封装, 可以在此组件上添加拓展配置。

## Alert

| 属性               | 说明                                                           | 类型       | 默认值     |
| ------------------ | -------------------------------------------------------------- | ---------- | ---------- |
| prefixCls          | 组件的公用className前序                                        | string     | danarrr-alert |
| className          | 定义alert最外层元素的class                                    | string     | 无         |
| style              | 自定义样式dialog的body的样式                                   | object     | {}         |
| title              | dialog显示的title                                              | JSXElement | 无         |
| content             | dialog显示的正文内容                                             | JSXElement | 无         |
| visible            | 控制dialog执行动画                                             | boolean    | false      |
| buttons          | 展示按钮                                               | Array    |     |
| transparent        | 是否不创建mask                                                 | boolean    | false      |
| maskCloseable      | 可点击mask层关闭dialog弹框                                           | boolean   | false    |
| closeCallback        | 关闭事件  | function   |          |



使用例子：

```JavaScript
<Alert
    title='只有标题的dialog'
    buttons={[{ 
        text: '关闭', 
        onPress: () => new Promise( ( resolve ) => {
            this.closeAlert();
        })}]}
    visible={false}
    >
</Alert> 
```