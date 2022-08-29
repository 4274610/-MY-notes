<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <h2>当前的n值: {{ n }}</h2>
    <button @click="add">点我n+1</button>
    <button @click="sendStudentName">把学生名给App</button>
    <button @click="jiebang">解绑atguigu事件</button>
    <button @click="death">销毁当前组件实例</button>
  </div>
</template>
<script>
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      age: 18,
      n: 1,
    };
  },
  methods: {
    add() {
      console.log("add被调用了");
      this.n ++;    
    },
    sendStudentName() {
      //触发Student组件实例身上的自定义事件atguigu,把数据通过参数传过去
      //方式一、直接传
      this.$emit("atguigu",this.name,this.age,666,888)
      //方式二、如果数据很多包装成一个对象传出去
      // let p = {
      //   name: this.name,
      //   age: this.age,
      // };
      //触发组件实例对象Student身上的绑定事件atguigu
      // this.$emit("atguigu", p);
      
      this.$emit("demo");
    },
    jiebang() {
      this.$off("atguigu"); //解绑一个自定义事件
      // this.$off(["atguigu", "demo"]); //解绑多个自定义事件
      // this.$off(); //解绑全部自定义事件
    },
    death() {
      this.$destroy(); //销毁了当前的student组件实例，销毁后所有student实例的自定义事件全部不奏效,原生DOM依然能调用，但是不响应了
    },
  },
};
</script>
<style scoped>
.student {
  background-color: rgb(236, 194, 201);
  padding: 10px;
  margin-top: 20px;
}
</style>
