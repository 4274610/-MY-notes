<template>
  <div>
    <div id="app">
      <h2>{{ msg }} </h2>
        <h2>学生名字是{{ studentName }}</h2>
      <!-- 通过父组件给子组件传递函数类型的props实现：子给父传数据 -->
      <School :getSchoolName="getSchoolName"></School>
      <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传数据 (第一种方式，使用v-on:或者@),事件修饰符正常使用-->
      <Student v-on:atguigu="getStudentName" @demo="test"></Student>
      <!-- 事件名atguigu，getStudentName回调名 -->
      <!-- <Student @atguigu.once="getStudentName"></Student> -->
      <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传数据 (第二种方式，使用ref)-->
      <!-- <Student ref="stu"></Student> -->
      <!-- ref用在组件标签上，得到组件实例对象 -->

      <!-- 如果在组件标签上绑定原生事件,要加.native修饰符,不然会被当做自定义事件,点这个组件就会触发,vue3已废弃 -->
      <Student @click.native="show"></Student>
    </div>
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
  data() {
    return {
      msg: "自定义事件:子组件给父组件传",
      studentName: "",
    };
  },
  methods: {
    getSchoolName(name) {
      console.log("得到了学校的名字", name);
    },
    test() {
      console.log("得到了demo");
    },
    show() {
      alert("hello vue");
    },

    // 方式一的两种接收数据方法：第一、直接接收
    getStudentName(name, age, x, y) {
      console.log("得到了学生的名字", name, age, x, y);
      this.studentName = name;
    },

    // 方式一的两种接收数据方法：第二、扩展运算符接
    //传过来的值很多，可以使用扩展运算符接,得到的就是一个数组
    // getStudentName(...params) {//name,...params
    //   console.log("得到了学生的名字",params);//name,params
    // },
    //方式二的接收数据方法
    //   getStudentName(p) {
    //     console.log("得到了学生的名字",p);
    //   },
  },
  mounted() {
    //App挂载完毕后
    // console.log(this.$refs.stu); //应用ref，得到组件实例对象
    // this.$refs.stu.$on("atguigu", this.getStudentName); //绑定自定义事件，$on当...时调用getStudentName
    // this.$refs.stu.$once("atguigu", this.getStudentName); //绑定自定义事件，只生效一次
  },
};
</script>
<style>
#app {
  background-color: gray;
  padding: 10px;
}
</style>
