<template>
  <div>
    <h2 @click="showName">学生姓名：{{ name }}</h2>
    <h2 >学生性别：{{ sex }}</h2>
    <h2 >学生年龄：<span v-big="age"></span></h2>
    <input type="text" v-fbind:value="sex">
  
  </div>
</template>
<script>
export default {
  name: "Student",
  data() {
    return {
     name:"张三",
     sex:"男",
     age:19
    };
  },
}

// 插件功能：用于增强Vue
// 本质：包含install方法的一个对象。install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据
// 定义插件：对象.install=function(Vue,options){
  //1、添加全局过滤器 2、添加自定义指令 3、配置全局混入 4、添加实例方法
// }
// 使用插件：在main.js里使用 Vue.use(plugins)
</script>
