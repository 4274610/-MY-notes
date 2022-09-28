<template>
  <div>
    <h1>人员信息</h1>
    <h2>姓名：{{ name }}</h2>
    <h2>姓名：{{ age }}</h2>
    <h3>职业：{{ job.type }}</h3>
    <h3>薪资：{{ job.salary }}</h3>
    <button @click="changeInfo">修改人的信息</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    //ref:定义一个响应式数据
    //处理基础数据类型getter setter
    let name = ref("张三")
    let age = ref(18)
    //处理对象类型数据proxy
    let job = ref({
      type: "前端工程师",
      salary: "5k",
    })
    function changeInfo() {
      //ref定义的数据需要加.value
      name.value = "李四";
      age.value = "48";
      job.value.type = "UI设计师";
      job.value.salary = "3k";
      console.log(name,job.value);
    }
    return {
      name,
      age,
      job,
      changeInfo,
    };
  },
};
</script>

<style></style>
