<template>
  <div class="app">
    <h3>我是APP组件(祖)</h3>
    <!-- 使用Suspense包裹组件，并配置好default 与 fallback -->
    <suspense>
      <template v-slot:default>
        <Child></Child>
      </template>
      <!-- 组件没出来的时候占位用，网速慢，组件用了promise -->
      <template v-slot:fallback>
        <h3>加载中.....</h3>
      </template>
    </suspense>
  </div>
</template>

<script>
// import Child from "./components/Child.vue";//静态引入

//异步引入组件
import { defineAsyncComponent } from "vue";
const Child = defineAsyncComponent(() => import("./components/Child.vue")); //异步引入、动态引入
//defineAsyncComponent里面是个回调，返回import引入函数的结果
export default {
  name: "App",
  components: {
    Child,
  },
};
</script>

<style>
.app {
  background-color: bisque;
  padding: 10px;
}
</style>
