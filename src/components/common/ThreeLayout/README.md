# 说明文件
## 可传参数(props)
1. leftWidth
2. rightWidth
3. minWidth
4. left
5. right
### 其中left right为左右边栏 组件的内容为主边栏

```jsx
<ThreeLayout
    left={
        <div style={{
            border: "2px solid #f60"
        }}>左边栏</div>
    }
    right={
        <div style={{
            border: "2px solid #f10"
        }}>右边栏</div>
    }
>
    <div style={{
        border: "2px solid #f40"
    }}>
        <h1>主区域</h1>
        <p>sadasdasduih uah </p>
    </div>
</ThreeLayout>
```
