<template>
  <div class="app">
    <h3>我是APP组件</h3>
  </div>
</template>

<script>
import {
  reactive,
  ref,
  readonly,
  toRefs,
  isRef,
  isReactive,
  isReadonly,
  isProxy,
} from "vue";

export default {
  name: "App",

  setup() {
    let sum = ref(1);
    let car = reactive({ name: "奔驰", price: "40w" });
    let car2 = readonly(car);
    // 响应式数据的判断
    console.log(isRef(sum));//检查一个值是否为一个 ref 对象
    console.log(isReactive(car));//检查一个对象是否是由 reactive 创建的响应式代理
    console.log(isReactive(car2));
    console.log(isReadonly(car2));//检查一个对象是否是由 readonly 创建的只读代理
    console.log(isProxy(car));
    console.log(isProxy(car2));//检查一个对象是否是由 reactive 或者 readonly 方法创建的代理

    console.log(isReactive(sum));

    return {
      ...toRefs(car),
    };
  },
};
</script>

<style>
.app {
  background-color: bisque;
  padding: 10px;
}
</style>
