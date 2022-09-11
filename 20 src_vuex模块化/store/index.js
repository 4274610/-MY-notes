//该文件用于创建Vuex中最核心的store
//引入Vue
import Vue from "vue";
//引入vuex
import Vuex from "vuex";
//使用vuex
Vue.use(Vuex);

//模块化
import countOptions from "./count"
import personOptions from "./person.js"


//创建并暴露store
export default new Vuex.Store({
  modules: {
    countAbout: countOptions,
    personAbout: personOptions,
  },
});
