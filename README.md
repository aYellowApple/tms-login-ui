# tms-login-ui

## 在项目中使用

安装组件库。

```
cnpm i tms-login-ui -S
```

在引入组件库的项目中安装按需加载插件。

```
cnpm i babel-plugin-import -D
```

在`babel.config.js`文件中配置插件。

```js
plugins: [
  [
    'import',
    {
      libraryName: 'tms-login-ui',
      style: true
    }
  ]
]
```

# 组件

## 登录框（login）

提供固定和弹框的登录框布局。

### 使用

```js
import Vue from 'vue'
import { Login } from 'tms-login-ui'
Vue.use(Login)
```
```
<tms-login mode="static" :display="{nickname:true,password:true}" @submit="callback"></tms-login>
```
### 插槽（slots）

| 名称   | 说明                                        |
| ------ | ------------------------------------------ |
| title | 自定义顶部内容                               |
| nickname | 自定义用户名框                            |
| password   | 自定义密码框                            |
| button | 自定义提交按钮                              |

### 属性（props）

| 参数             | 说明                                                            | 类型   | 默认值                       |            
| -----------------| -------------------------------------------------------------- | ------ | --------------------------- |
| mode             | 布局形式                                                        | string | static                      |
| title            | 登录框名称                                                      | string |                              |
| display          | 显示哪些组件。只要将要显示的区域设置成 true，不显示的不用设置。     | object | {nickname: true, password: true} |
| modalWidth       | 登录框宽度                                                      | String | 400px                         |
| modalHeight      | 登录框高度                                                      | String | 300px                         |
