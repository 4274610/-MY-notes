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
import { ref, computed, watch, reactive } from "vue";
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

    //watch函数，可以写三个参数，参数之间用逗号隔开，在小括号里写所有内容

    //1、监视ref所定义的一个响应式数据
    // watch(sum, (newValue, oldValue) => {
    //   console.log("sum的值变了", newValue, oldValue);
    // });

    //2.1监视多个ref定义的响应式数据，第一个参数写成数组
    // watch(
    //   [sum, msg],
    //   (newValue, oldValue) => {
    //     console.log("sum或msg的值变了", newValue, oldValue);
    //   },
    //   { immediate: true }
    // );

    //2.2监视ref定义的对象数据时，person 需要加.value，这时就不是监视ref定义的数据了，而是它内部通过reactive定义的数据了
    watch(
      person.value,
      (newValue, oldValue) => {
        console.log("person的值变了", newValue, oldValue);
      },
      { deep: true }//如果不写.value，就需要开启深度监视
    );

    //3、监视reactive定义的一个响应式数据（监视全部属性）
    // (1)默认开启深度监视，且无法关掉
    // (2)并且此处无法获取正确的oldValue，如果需要oldValue，就单独写到ref中
    
    watch(
      person,
      (newValue, oldValue) => {
        console.log("person的值变了", newValue, oldValue);
      },
      { deep: false }//此处的deep配置无效
    );

    //4、监视reactive定义的响应式数据中的某个属性，第一个参数写成函数
    // watch(
    //   () => person.name,
    //   (newValue, oldValue) => {
    //     console.log("name的值变了", newValue, oldValue);
    //   }
    // );

    //5、监视reactive定义的响应式数据中的某些属性,第一个参数写成数组
    // watch([() => person.name, () => person.age], (newValue, oldValue) => {
    //   console.log("name或age的值变了", newValue, oldValue);
    // });

    //6、此处由于监视的是reactive所定义的对象中的某个属性，
    //监视单个属性deep配置有效，但此处无法获取正确的oldValue
    // watch(
    //   () => person.job,
    //   (newValue, oldValue) => {
    //     console.log("person的job变化了", newValue, oldValue);
    //   },
    //   { deep: true }
    // );
    return {
      sum,
      msg,
      person,
    };
  },
};
</script>

<style></style>
