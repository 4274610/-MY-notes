<template>
  <div class="child">
    <h3>我是Child组件(子)</h3>
    <h3>n的值是:{{ n }}</h3>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "Child",
  //配合异步引入和suspense

  // async setup() {
  //   let n = ref(1);
  //   let p = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({n});
  //     }, 3000);
  //   });
  //   return await p;//等p成功的结果

  // 或者直接retun出去promise,不加async修饰
  setup() {
    let n = ref(1);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ n });//setup本来return出去的就是一个对象，所以n要写成对象形式{ n }
      }, 3000);
    });
  },
};
</script>

<style>
.child {
  background-color: rgb(245, 197, 239);
  padding: 10px;
}
</style>
