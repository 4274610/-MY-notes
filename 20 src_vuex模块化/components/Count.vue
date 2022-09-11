<template>
  <div>
    <!-- <h1>当前求和为：{{ $store.state.sum }}</h1>
    <h1>放大10倍后的和为: {{ $store.getters.bigSum }}</h1>
    <h1>我在{{ $store.state.school }}学习{{ $store.state.subject }}</h1> -->
    <!-- 上面的可以简化为 mapState、mapGetters写法-->
    <h1>当前求和为：{{ sum }}</h1>
    <h1>放大10倍后的和为: {{ bigSum }}</h1>
    <h1>我在{{ school }}学习{{ subject }}</h1>

    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <!-- <button @click="increment">+</button> -->
    <!-- <button @click="decrement">-</button> -->
    <!-- 上面的可以简化为 mapMutations写法-->
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>

    <!-- <button @click="incrementOdd">当前求和为奇数再加</button> -->
    <!-- <button @click="incrementWait">等一等再加</button> -->
    <!-- 上面的可以简化为 mapActions写法-->
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
    <h2 style="color:red">person组件的总人数是{{personList.length}}</h2>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "Count",
  data() {
    return {
      n: 1, //用户选择的数字
    };
  },
  computed: {
    
    ...mapState("countAbout",["sum", "school", "subject"]),
    ...mapState("personAbout",["personList"]),

    ...mapGetters("countAbout",["bigSum"]),
  },
  methods: {
   
    ...mapMutations("countAbout",{ increment: "JIA", decrement: "JIAN" }),
   
    ...mapActions("countAbout",{incrementOdd:"jiaOdd",incrementWait:"jiaWait"}),
  },
};
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>
