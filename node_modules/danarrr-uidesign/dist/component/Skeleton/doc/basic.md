基建对话框

## API

适用平台：WEB

创建一个对话框，modal和alert都是基于dialog进行封装, 可以在此组件上添加拓展配置。

## Skeleton

| 属性               | 说明                                                           | 类型       | 默认值     |
| ------------------ | -------------------------------------------------------------- | ---------- | ---------- |
| prefixCls          | 组件的公用className前序                                        | string     | danarr-skeleton |
| className          | 定义skeleton最外层元素的class                                    | string     | 无         |
| style       | 定义skeleton的Box/Item class                                         | string     | 无         |


简单的例子

```JavaScript
 <Skeleton>
    <Skeleton.Box style={{ marginTop: '20px',height: '50px', width: '50%' }}> 
    </Skeleton.Box>

    <Skeleton.Item style={{ marginTop: '20px',height: '34px', width: '100%' }}/> 
    <Skeleton.Item style={{ marginTop: '20px',height: '54px', width: '100%' }} />
</Skeleton>
```
