import axios from "axios";
import {nanoid} from "nanoid"
//人员相关配置项
export default {
  namespaced: true, //开启命名空间
  actions: {
    addPersonWang(context, value) {
      if (value.name.indexOf("王") === 0) {
        context.commit("ADD_PERSON", value);
      } else {
        alert("必须添加姓王的人");
      }
    },
    //发送请求
    addPersonServer(context) {
      axios.get("https://api.uixsj.cn/hitokoto/get?type=social").then(
        (response) => {
          console.log("请求成功", response.data);
          context.commit("ADD_PERSON",{id:nanoid(),name:response.data})
        },
        (error) => {
          console.log("请求失败", error.message);
        }
      );
    },
  },
  mutations: {
    ADD_PERSON(state, value) {
      state.personList.unshift(value);
    },
  },
  state: {
    personList: [{ id: "001", name: "zs" }],
  },
  getters: {
    firstPersonName(state) {
      return state.personList[0].name;
    },
  },
};
