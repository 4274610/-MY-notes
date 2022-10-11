<template>
  <div class="son">
    <h3>我是Son组件(孙),{{car.name}}--{{car.price}}</h3>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  name: "Son",
  setup() {
    //接收祖组件传来的数据
    let car=inject("onecar");
    return {car};
  },
};
</script>

<style>
.son {
  background-color: rgb(159, 190, 220);
  padding: 10px;
}
</style>
