<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <button @click="sum++">点我n加一</button>
    <h1>{{ msg }}</h1>
    <button @click="msg += '!'">点我加一个感叹号</button>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>薪资：{{ person.job.salary }}k</h2>
    <button @click="person.name += '!'">修改姓名</button>
    <button @click="person.age++">修改年龄</button>
    <button @click="person.job.salary++">涨薪</button>
  </div>
</template>

<script>
import { ref, watch, reactive,watchEffect } from "vue";
export default {
  name: "Demo",
  setup() {
    let sum = ref(1);
    let msg = ref("你好啊");
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        salary: 20,
      },
    });

   //watch的套路是：既要指明监视的属性，也要指明监视的回调。
    watch(sum, (newValue, oldValue) => {
      console.log("sum的值变了", newValue, oldValue);
    });
    //watchEffect的套路是：不用指明监视哪个属性，监视的回调中用到哪个属性，那就监视哪个属性。
    //所用到的数据只要发生改变，回调就会被执行
    watchEffect(()=>{    
      const x1=sum.value
      const x2=person.job.salary
      person.age++
      console.log("watchEffect配置的回调执行了");
      
    })
    // watchEffect有点像computed：所依赖的数据发生改变，就执行回调
    // 但computed注重的计算出来的值（回调函数的返回值），所以必须要写返回值。
    // 而watchEffect更注重的是过程（回调函数的函数体），所以不用写返回值。
 
    return {
      sum,
      msg,
      person,
    };
  },
};
</script>

<style></style>
