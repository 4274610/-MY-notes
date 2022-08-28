<template>
  <div class="demo"> 
    <h2 class="title">学生姓名：{{ name }}</h2>
    <h2 >学生性别：{{ sex }}</h2>

  
  </div>
</template>
<script>
export default {
  name: "Student",
  data() {
    return {
     name:"张三",
     sex:"男",
     age:19
    };
  },
}

</script>

<style scoped>
/* scoped让样式局部生效 ，防止取名重复*/
.demo{
  background-color: skyblue;
}
</style>
