<template>
  <div>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>薪资：{{ salary }}k</h2>
    <button @click="name += '!'">修改姓名</button>
    <button @click="age++">修改年龄</button>
    <button @click="salary++">涨薪</button>
    <h2>当前n的值是{{ x.n }}</h2>
    <button @click="x.n++">点我n+1</button>
    <button @click="x={n:888}">点我替换n</button>
    <!-- 对x进行操作，不涉及n的操作，用shallowRef是可以的 -->

  </div>
</template>

<script>
import { ref, reactive, toRef, toRefs, shallowReactive, shallowRef } from "vue";
export default {
  name: "Demo",
  setup() {
    let person = shallowReactive({
      //  shallowReactive只考虑第一层数据的响应式
      // let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: { salary: 20 },
      },
    });

    //  shallowRef：只处理基本数据类型的响应式, 不进行对象的响应式处理
    let x = shallowRef({
      n: 1,
    });
    // 什么时候使用?
    // 如果有一个对象数据，结构比较深, 但变化时只是外层属性变化,性能会优化一些 ===> shallowReactive。
    // 如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换 ===> shallowRef。
    return {
      x,
      ...toRefs(person),
      salary: toRef(person.job.j1, "salary"),
    };
  },
};
</script>

<style></style>
