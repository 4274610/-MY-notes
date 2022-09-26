<template>
  <div>
    <h1>人员信息</h1>
    <h2>姓名：{{name}}</h2>
    <h2>姓名：{{age}}</h2>
    <button @click="sayHello">说话</button>
  </div>
</template>

<script>
// import {h} from "vue"
export default {
  name: "App",
  //组件中所用到的数据、方法等全部写到setup中
  setup() {
    //配置数据
    let name = "张三";
    let age = 18;
    //配置方法
    function sayHello() {
      alert(`我叫${name},今年${age}了`);
    }
    //在setup花括号里面，必须有return
    //setup的两种返回值第一种：若返回一个对象，则对象中的属性、方法在模板中可以直接使用，常用
    return {
      name,
      age,
      sayHello,
    };
    //setup的两种返回值第二种：若返回一个渲染函数h,则可自定义渲染内容
    // return ()=>{return h ("h1","尚硅谷")}

  },
};
</script>

<style></style>
