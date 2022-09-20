import Vue from "vue";
import App from "./App.vue";
//引入插件
// import vueResource from "vue-resource";
//引入store
// import store from "./store"
Vue.config.productionTip = false;

//使用插件
// Vue.use(vueResource);

//引入vue-router
import VueRouter from "vue-router"
//引入路由器
import router from "./router"
//使用vue-router
Vue.use(VueRouter)

//解决重复点击一个按钮报错的问题
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (to) {
  return VueRouterReplace.call(this, to).catch(err => err)
}


new Vue({
  el: "#app",
  render: (h) => h(App),
  // store,//配置store 
  router,//配置路由器
  // beforeCreate() {
  //   Vue.prototype.$bus = this; //全装全局事件总线
  // },
});
