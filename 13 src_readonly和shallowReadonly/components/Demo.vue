<template>
  <div>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>薪资：{{ salary }}k</h2>
    <button @click="name += '!'">修改姓名</button>
    <button @click="age++">修改年龄</button>
    <button @click="salary++">涨薪</button>
    <h2>当前n的值是{{ n }}</h2>
    <button @click="n++">点我n+1</button>
  </div>
</template>

<script>
import { ref, reactive, toRef, toRefs, readonly, shallowReadonly } from "vue";
export default {
  name: "Demo",
  setup() {
    let n = ref(0);
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: { salary: 20 },
      },
    });
    //应用场景：应用别人的组件，不修改别人的数据时使用
    //readonly:完全无法修改，如果修改控制台会报错
    // person=readonly(person)
    // n=readonly(n)
    //shallowReadonly：浅只读，只有第一层无法修改，深层的可以修改

    person = shallowReadonly(person);

    return {
      n,
      ...toRefs(person),
      salary: toRef(person.job.j1, "salary"),
    };
  },
};
</script>

<style></style>
