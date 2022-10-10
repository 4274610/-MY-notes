<template>
  <div class="app">
    <h3>我是APP组件(祖),{{name}}--{{price}}</h3>
 <Child></Child>
    
  </div>
</template>

<script>
import { reactive,toRefs ,provide} from "vue";

import Child from "./components/Child.vue"
export default {
  name: "App",
  components:{
    Child
  },
  setup() {
    let car=reactive({
      name:"奔驰",
      price:"40w"
    })

    //给后代组件传数据,任意后代
    provide("onecar",car)//第一个参数取名，第二个参数数据

    return {
    ...toRefs(car)
    };
  },
};
</script>

<style>
.app{
  background-color: bisque;
  padding: 10px;
}
  </style>
