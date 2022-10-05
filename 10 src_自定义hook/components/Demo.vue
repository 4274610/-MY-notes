<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <button @click="sum++">点我n加一</button>
    <h2>当前点击时鼠标的坐标为 x:{{ point.x }}y:{{ point.y }}</h2>
  </div>
</template>

<script>
import { onBeforeUnmount, onMounted, reactive, ref } from "vue";
import usePoint from "../hooks/usePoint"
export default {
  name: "Demo",
  setup() {
    let sum = ref(1);
    let point =usePoint()//调用封装的钩子
    
    return {
      sum,
      point

    };
  },
};
</script>

<style></style>
