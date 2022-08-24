<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM">点我输出上方的DOM元素</button>
    <img src="./assets/logo.png" alt="logo">
    <school ref="sch"></school>
    <student ></student>
  </div>
</template>
<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";
export default {
  name: "App",
  components: {
    School,
    Student,
  },
  data(){
    return {
      msg:"欢迎学习Vue!!!"
    }
  },
  methods:{
    showDOM(){
      console.log(this.$refs.title);//得到h1的真实DOM元素
      console.log(this.$refs.sch);//得到school组件实例对象
      console.log(this.$refs);
    }
  }
};
// ref属性
//1、被用来给元素或子组件注册引用信息（id的替代者）
//2、应用在html标签上获取的是真实DOM元素，应用在组件标签上获取的是组件实例对象
//3、使用方式
// <h1  ref="title"></h1>
// this.$refs.title
</script>
<style></style>
