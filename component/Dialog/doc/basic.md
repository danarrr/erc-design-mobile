Dialog 基础对话框

## API

适用平台：WEB

创建一个对话框，modal是基于dialog进行封装, 可以在此组件上添加拓展配置, 作为基建组件。

## Dialog

| 属性               | 说明                                                           | 类型       | 默认值     |
| ------------------ | -------------------------------------------------------------- | ---------- | ---------- |
| prefixCls          | 组件的公用className前序                                        | string     | danarrr-dialog |
| className          | 定义dialog最外层元素的class                                    | string     | 无         |
| boxClassName       | 定义dialog的body class                                         | string     | 无         |
| maskClassName      | 定义dialog的mask class                                         | string     | 无         |
| style              | 自定义样式dialog的body的样式                                   | object     | {}         |
| maskStyle          | 定义dialog的mask的样式                                         | string     | 无         |
| title              | dialog显示的title                                              | JSXElement | 无         |
| content             | dialog显示的footer                                             | JSXElement | 无         |
| maskCloseable            | 点击mask层可关闭弹窗                                             | boolean    | false      |
| visible            | 控制dialog执行动画                                             | boolean    | false      |
| closeCallback          | 控制dialog关闭的方法                                             | func    | false无    |
| showCloseBtn        | 是否显示关闭按钮                                                 | boolean    | false      |
| transitionName        | 动画弹出名称  | string   |            |


简单的例子

```JavaScript
<Dialog
    visible={true}
    maskClose={true}
    closeCallback={console.log(123)}
>
    <div className='modal-text'>这是一个文案...</div>
</Dialog>
```