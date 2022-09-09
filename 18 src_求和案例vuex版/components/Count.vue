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
    <button @click="increment(n)">直接+</button>
    <button @click="decrement(n)">直接-</button>

    <!-- <button @click="incrementOdd">当前求和为奇数再加</button> -->
    <!-- <button @click="incrementWait">等一等再加</button> -->
    <!-- 上面的可以简化为 mapActions写法-->
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
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
    //先import引入
    //在computed中通过mapState从state中【获取数据】，让模板能够使用这些数据（对象写法）
    //computed里面是对象，mapState也是对象，对象里面套对象显然是不行的，利用扩展运算符，把mapState里面的对象展开陈列在computed中
    //不能简写sum: sum才能简写，第一个sum是插值语法里面的，第二个sum是一个变量名，这样才能简写
    //sum: "sum"，第二个"sum"是一个字符串，通过字符串里面的字去state中找值
    ...mapState({ sum: "sum", school: "school", subject: "subject" }),

    //借助mapState生成计算属性，从state中获取数据（数组写法）
    //一个sum，两种指代
    ...mapState(["sum", "school", "subject"]),

    //借助mapGetters生成计算属性，从getters中获取数据
    ...mapGetters({ bigSum: "bigSum" }),
    ...mapGetters(["bigSum"]),
  },
  methods: {
    // increment() {
    //   this.$store.commit("JIA", this.n); //没有其他的操作，就直接通过commit提交给mutations,注意这里大写，和mutations里的操作相匹配
    // },
    // decrement() {
    //   this.$store.commit("JIAN", this.n);
    // },

    //借助mapMutations生成对应的方法，方法会调用commit去联系mutations(对象写法)，在插值语法中传参
    ...mapMutations({ increment: "JIA", decrement: "JIAN" }),//触发后面Mutations中的方法JIA、JIAN
    // ...mapMutations({"JIA","JIAN"}),//数组写法，其他地方要对应着改名字

    // incrementOdd() {
    //   this.$store.dispatch("jiaOdd", this.n); //通过dispatch派发给actions，jiaOdd和actions里的操作相匹配
    // },
    // incrementWait() {
    //   this.$store.dispatch("jiaWait", this.n);
    // },

    //借助mapActions生成对应的方法，方法会调用dispatch去联系actions(对象写法)，在插值语法中传参
    ...mapActions({incrementOdd:"jiaOdd",incrementWait:"jiaWait"}),//触发后面actions中的jiaOdd、jiaWait业务逻辑，进而触发mutations中的最终操作JIA
    // ...mapActions(["jiaOdd","jiaWait"])//数组写法，其他地方要对应着改名字

  },
};
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>
