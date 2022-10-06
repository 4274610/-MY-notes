<template>
  <div>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>薪资：{{ salary }}k</h2>
    <button @click="name += '!'">修改姓名</button>
    <button @click="age++">修改年龄</button>
    <button @click="salary++">涨薪</button>
  </div>
</template>

<script>
import { ref, reactive, toRef, toRefs } from "vue";
export default {
  name: "Demo",
  setup() {
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: { salary: 20 },
      },
    });

    return {
      //整个写法
      ...toRefs(person), //是一个对象，所以要用扩展运算符
      //只展开第一层，salary不行，所以还是要写job.j1.salary或者单独展开

      //单个写法
      // name:toRef(person,"name"),
      // age:toRef(person,"age"),
      salary: toRef(person.job.j1, "salary"),

      // 作用：创建一个 ref 对象，其value值指向另一个对象中的某个属性。
      // 应用: 要将响应式对象中的某个属性单独提供给外部使用时。
    };
  },
};
</script>

<style></style>
