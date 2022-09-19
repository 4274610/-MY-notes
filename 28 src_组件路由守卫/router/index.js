//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
//引入组件
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import News from "../pages/News.vue";
import Message from "../pages/Message.vue";
import Detail from "../pages/Detail.vue";

//创建一个路由器
const router = new VueRouter({
  routes: [
    {
      name: "guanyu",
      path: "/about",
      component: About,
      meta: { isAuth: true,title: "关于" },
    },
    {
      name: "zhuye",
      path: "/home",
      component: Home,
      meta: { title: "主页" },
      children: [
        {
          name: "xinwen",
          path: "news",
          component: News,
          meta: { isAuth: true, title: "新闻" },
          //独享路由守卫，单独对某一个路由设置
          // beforeEnter: (to, from, next) => {
          //   if (to.meta.isAuth) {
          //     if (localStorage.getItem("school") === "atguigu") {
          //       next();
          //     } else {
          //       alert("无权限查看！！!");
          //     }
          //   } else {
          //     next();
          //   }
          // },
        },
        {
          name: "xiaoxi",
          path: "message",
          component: Message,
          meta: { isAuth: true, title: "消息" },
          children: [
            {
              name: "xiangqing",
              meta: { isAuth: true, title: "详情" },
              //path: "detail/:id/:title",//用props测试params参数
              path: "detail", //用props测试query参数

              component: Detail,
              // 谁接收参数props写到谁的配置里面，让组件更方便的收到参数
              // 1、布尔值写法：若布尔值为真，就会把该路由组件收到的所有【params参数】，以props的形式传给Detail组件
              //   props: true,
              // 2、函数写法：
              props($route) {
                return { id: $route.query.id, title: $route.query.title };
              },
              // 3、对象写法props:{a:1,b:hello}传的是死数据，不常用
            },
          ],
        },
      ],
    },
  ],
});
//全局前置路由守卫，在初始化和每一次路由切换之前都会调用这个函数
//next()放行 next(path)放行到指定路由 next(false)中断
// router.beforeEach((to, from, next) => {
//   console.log(from, to);
  // if(to.path==="/home/news"||to.path==="/home/message"){
   // if(to.name==="xinwen"||to.name==="xiaoxi"){
   //限制过多时，在路由中加一个配置meta，作为权限的标识
//   if (to.meta.isAuth) {
    //判断是否需要鉴权
//     if (localStorage.getItem("school") === "atguigu") {
//       next();
//     } else {
//       alert("无权限查看！！!");
//     }
//   } else {
//     next();
//   }
// });

 //全局后置路由守卫，在初始化和每一次路由切换之后都会调用这个函数
//设置小图标旁边的title
// router.afterEach((to, from) => {
//   document.title = to.meta.title || "硅谷系统";
// });
//没有设置title的地方，使用"硅谷系统"，比如刚一打开
//在刷新时，会露出原来在html中设置的title名（默认文件名），title也要记得改成"硅谷系统"

export default router;

//路由组件通常存放在pages文件夹，一般组件通常存放在components文件夹
//路由组件引入到index.js文件中，一般组件引入到APP文件中
//通过切换，"隐藏"的路由组件默认是被销毁的，需要时再被挂载
//每个组件都有自己的$route属性，里面存储着自己的路由信息
//整个应用只有一个router，可以通过组件的$router属性获取到
//不同的route 同样的router
