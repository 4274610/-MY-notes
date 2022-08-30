<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>  
    <button @click="sendStudentName">传数据给school组件</button>
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
  methods:{
    sendStudentName(){
      this.$bus.$emit("hello",this.name)
    }
  }
}
</script>
<style scoped>
.student {
  background-color: rgb(236, 194, 201);
  padding: 10px;
  margin-top: 20px;
}
</style>
