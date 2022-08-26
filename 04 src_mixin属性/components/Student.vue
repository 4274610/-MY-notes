<template>
  <div>

    <h2 @click="showName">学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>{{x}}</h2>
   
  </div>
</template>
<script>

//1、定义混合mixin.js
//2、使用混合
//局部混合 先import再mixins
//全局混合 在main.js里先import再Vue.mixin() 弊端就是Root App上也会有混合的东西


// 局部混合
import {hunhe,hunhe2} from "../mixin"
export default {
  name: "Student",
  data() {
    return {
     name:"张三",
     sex:"男"
    };
  },
  mixins:[hunhe,hunhe2]//必须写成数组，可以引入多个
}
</script>
