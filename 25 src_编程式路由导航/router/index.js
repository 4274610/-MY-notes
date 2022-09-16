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
          children: [
            {
              name: "xiangqing",
              //path: "detail/:id/:title",//用props测试params参数
              path: "detail",//用props测试query参数 

              component: Detail,
              // 谁接收参数props写到谁的配置里面，让组件更方便的收到参数
              // 1、布尔值写法：若布尔值为真，就会把该路由组件收到的所有【params参数】，以props的形式传给Detail组件
            //   props: true,
              // 2、函数写法：
              props($route) {
                return{id:$route.query.id,title:$route.query.title}
              },
              // 3、对象写法props:{a:1,b:hello}传的是死数据，不常用
            },
          ],
        },
      ],
    },
  ],
});




//路由组件通常存放在pages文件夹，一般组件通常存放在components文件夹
//路由组件引入到index.js文件中，一般组件引入到APP文件中
//通过切换，"隐藏"的路由组件默认是被销毁的，需要时再被挂载
//每个组件都有自己的$route属性，里面存储着自己的路由信息
//整个应用只有一个router，可以通过组件的$router属性获取到
//不同的route 同样的router
