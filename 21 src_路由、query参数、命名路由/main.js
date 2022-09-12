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


new Vue({
  el: "#app",
  render: (h) => h(App),
  // store,//配置store 
  router,//配置路由器
  // beforeCreate() {
  //   Vue.prototype.$bus = this; //全装全局事件总线
  // },
});
