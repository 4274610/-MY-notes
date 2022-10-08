<template>
  <div>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>薪资：{{ salary }}k</h2>
    <h2 v-show="person.car">车：{{ person.car }}</h2>
    <button @click="name += '!'">修改姓名</button>
    <button @click="age++">修改年龄</button>
    <button @click="salary++">涨薪</button>
    <button @click="showRawPerson">变成最原始的person</button>
    <button @click="addCar">添加一台车</button>
    <button @click="person.car.name += '!'" v-show="person.car">改名字</button>
    <button @click="person.car.price++" v-show="person.car">改价格</button>

    <h2>当前n的值是{{ n }}</h2>
    <button @click="n++">点我n+1</button>
  </div>
</template>

<script>
import { ref, reactive, toRef, toRefs, toRaw, markRaw } from "vue";
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

    // toRaw作用：将一个由reactive生成的响应式对象转为普通对象。
    // 使用场景：用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新。
    function showRawPerson() {
      const p = toRaw(person);
      p.age++; //不起作用，因为p通过toRaw已经不再是响应式的了
      console.log(p);
    }

    //给person后添加一个属性car,
    function addCar() {
      let car = { name: "奔驰", price: 40 };
      // person.car=car  //直接添加,里面的数据也是响应式的
      person.car = markRaw(car); //标记一个对象，使其永远不会再成为响应式对象。数据改了，但是页面不响应
    }
    // markRaw应用场景: 较多
    // 有些值不应被设置为响应式的，例如复杂的第三方类库等。
    // 当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能。

    return {
      showRawPerson,
      addCar,
      n,
      person, //添加一个属性后，需要return出来，setup只执行一次
      ...toRefs(person),
      salary: toRef(person.job.j1, "salary"),
    };
  },
};
</script>

<style></style>
