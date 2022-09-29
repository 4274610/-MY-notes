<template>
  <div>
    <h1>人员信息</h1>
    <h2 v-if="person.name">姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2 v-if="person.sex">性别：{{ person.sex }}</h2>
    <h3>职业：{{ person.job.type }}</h3>
    <h3>薪资：{{ person.job.salary }}</h3>
    <h3>爱好：{{ person.hobby }}</h3>
    <button @click="addSex">添加性别属性</button>
    <button @click="deleteName">删除姓名属性</button>

    <button @click="changeInfo">修改人的信息</button>
  </div>
</template>

<script>
import { ref } from "vue";
import { reactive } from "vue";
export default {
  name: "App",
  setup() {
    //reactive:定义一个对象、数组类型的响应式数据（基本类型数据用ref）
    // ref也可以用来定义对象（或数组）类型数据, 它内部会自动通过reactive转为代理对象。
    let person = reactive({
      name: "张三",
      age: 18,
      // sex:"",
      job: {
        type: "前端工程师",
        salary: "5k",
      },
      hobby: ["唱歌", "跳舞", "喝酒"],
    });

    function changeInfo() {
      person.job.type = "UI设计师";
      person.job.salary = "3k";
      person.hobby[0] = "学习"; //vue3中可以直接修改，vue2中不可以
    }
    //添加属性、删除属性、通过下标修改数组，必须是用reactive定义
    // vue3中用function代替methods
    function addSex() {
       person.sex = "男";
    }
    function deleteName() {
      delete  person.name;
    }
    return {
      person,
      changeInfo,
      addSex,
      deleteName,
    };
  },
};

// 从原理角度对比：
// ref通过Object.defineProperty()的get与set来实现响应式（数据劫持）。
// reactive通过使用Proxy来实现响应式（数据劫持）, 并通过Reflect操作源对象内部的数据。

// 从使用角度对比：
// ref定义的数据：操作数据需要.value，读取数据时模板中直接读取不需要.value。
// reactive定义的数据：操作数据与读取数据：均不需要.value。
</script>

<style></style>
