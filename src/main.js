import React from 'react'
import ReactDOM from 'react-dom' //react-dom只需要在入口文件中渲染我们的根组件的时候需要
import App from './App.js' //导入我们项目看到的第一个组件

       /**
       * 两个参数
       * 参数1：要渲染的组件(自定义标签)
       * 参数2:渲染的位置
         */
          ReactDOM.render(
              <App/>,
              document.getElementById("app")
         )


   
