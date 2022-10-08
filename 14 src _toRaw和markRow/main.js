//引入的不再是vue构造函数了，引入的是一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

//创建应用实例对象--app(类似于vue中的vm,但app更轻，身上的属性和方法更少)
// const app =createApp(App);
// console.log(app);
//挂载
// app.mount("#app")

//简化
createApp(App).mount('#app')
