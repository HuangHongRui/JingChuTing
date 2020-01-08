## SVG-使用选择

---

### 使用 [`url-lodaer`](https://www.npmjs.com/package/url-loader)

> 可满足基本需求

首先是在webpack配置中使用`url-loader`.
```js
  // Webpack 配置
  // url-loader 会将SVG转换为 base64 URI
  {
    test: /\.svg$/,
    use: [{
      loader: "url-loader",
      options: {
        // 文件超过10KB将将由 file-loader 进行处理
        limit: 10000,
      }
    }]
  }
  ```

紧接着是在项目中导入使用.

```js
  import logo from "style/imgage/logo.svg";
  <img alt="logo" src={logo} />
```

流浪器渲染后的元素, 可见src填充着很长base64URL.

```js
<img src="data:image/svg+xml;base64,...很长很长" />
```

---

### 使用 [`svg-rul-lodaer`](https://www.npmjs.com/package/svg-url-loader)

>1. 将SVG文件转化为 UTF-8数据URL（简短）
>2. 使用 Gzip 压缩时，能有更好压缩效果
>3. 浏览器解析 UTF-8 字符更快

还是一样，为 webpack 导入配置
```js
  {
    test: /\.svg$/,
    use: [{
      loader: "svg-url-loader",
      options: {
        // 只对大于10KB的SVG进行处理
        limit: 10000,
        // 为更合理的输出命名文件
        name: "[path][name].[ext]"
      }
    }]
  }
```

处理并渲染到浏览器的元素

```js
// 简短舒服
<img src="/8c21b7aa42b87321bcff67bb4f8de510.svg">

// 如设置 options.name ,将会替换显示
<img src="/src/style/image/jingchu.svg">
```

---


### 使用 [`SVGR`](https://github.com/gregberge/svgr)

> 1. 可编译为组件直接使用
> 2. 活跃库
> 3. 功能强大可扩展

Webpack 配置
```jsx
  {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }
```

文件中引用并调用

```jsx
  import Jingchu from "./jingchu.svg";
  <Jingchu>
```
