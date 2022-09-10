//该文件用于创建Vuex中最核心的store
//引入Vue
import Vue from "vue";
//引入vuex
import Vuex from "vuex";
//使用vuex
Vue.use(Vuex);

//准备actions——用于响应组件中的动作
const actions = {
  //   jia(context, value) {
  // console.log(context, value); //context是迷你版的store,value是前面传过来的n
  //     context.commit("JIA", value); //通过commit提交给mutations,这里对应的mutations的操作大写
  //   },
  //   jian(context, value) {
  //     context.commit("JIAN", value);
  //   },
  jiaOdd(context, value) {
    if (context.state.sum % 2) {
      context.commit("JIA", value);
    }
  },
  jiaWait(context, value) {
    setTimeout(() => {
      context.commit("JIA", value);
    }, 500);
  },
};

//准备mutations——用于操作数据state
const mutations = {
  JIA(state, value) {
    state.sum += value;
  },
  JIAN(state, value) {
    state.sum -= value;
  },
  ADD_PERSON(state, value){
   state.personList.push(value);
  }
};

//准备state——用于存储数据
const state = {
  sum: 0,
  school:"尚硅谷",
  subject:"前端",
  personList:[{id:"001",name:"zs"}]
};

//getters——对state中的数据进行加工，类似于computed加工data
const getters={
    bigSum(state){
        return state.sum*10//写返回值
    }
}
//创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
});
