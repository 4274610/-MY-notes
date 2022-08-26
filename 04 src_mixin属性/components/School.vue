<template>
  <div>

    <h2 @click="showName">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
   
  </div>
</template>
<script>

//1、定义混合mixin.js
//2、使用混合
//局部混合 先import再mixins
//全局混合 在main.js里先import再Vue.mixin() 弊端就是Root App上也会有混合的东西

// 局部混合
import {hunhe} from "../mixin"
export default {
  name: "School",
  data() {
    return {
     name:"尚硅谷",
     address:"北京"
    };
  },
   mixins:[hunhe]//必须写成数组，可以引入多个

}
</script>
