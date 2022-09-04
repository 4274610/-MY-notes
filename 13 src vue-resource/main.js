import Vue from "vue";
import App from "./App.vue";
//引入插件,官方不维护，老系统可能会用
import vueResource from "vue-resource";


Vue.config.productionTip = false;
//使用插件
Vue.use(vueResource);
new Vue({
  el: "#app",
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this; //全装全局事件总线
  },
});
