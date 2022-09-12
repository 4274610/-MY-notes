//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
//引入组件
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import News from "../pages/News.vue";
import Message from "../pages/Message.vue";
import Detail from "../pages/Detail.vue";

//创建一个路由器
export default new VueRouter({
  routes: [
    { path: "/about", component: About },
    {
      path: "/home",
      component: Home,
      children: [
        { path: "news", component: News },
        {
          path: "message",
          component: Message,
          children: [{ name:"xiangqing",path: "detail", component: Detail }],//嵌套多时，命名路由可以简化路由的跳转
        },
      ],
      //二级路由不加斜杠
    },
  ],
});

//路由组件通常存放在pages文件夹，一般组件通常存放在components文件夹
//路由组件引入到index.js文件中，一般组件引入到APP文件中
//通过切换，"隐藏"的路由组件默认是被销毁的，需要时再被挂载
//每个组件都有自己的$route属性，里面存储着自己的路由信息
//整个应用只有一个router，可以通过组件的$router属性获取到
//不同的route 同样的router
