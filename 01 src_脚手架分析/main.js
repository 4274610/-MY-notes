// amin.js是整个项目的入口文件
//1、引入Vue
import Vue from 'vue'
// 2、引入App组件，它是所有组件的父组件
import App from './App.vue'
// 3、关闭生产提示
Vue.config.productionTip = false
// 4、创建Vue实例
new Vue({
// 5、将App组件放入容器中
  render: h => h(App),
}).$mount('#app')

// 关于不同版本的Vue
// 1、vue.js与vue.runtime.xxx.js的区别
// （1）vue.js是完整版的Vue,包括核心功能+模板解析器
// （2）vue.runtime.xxx.js是运行版的Vue,只有核心功能
// 2、因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数接收到createElement函数去指定具体内容

