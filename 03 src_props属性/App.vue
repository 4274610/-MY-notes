<template>
  <div>
    <student name="李四" sex="男" :age="19"></student>
    <!-- 因为props，只能父传子，vm传给vc,不能兄弟组件互传，也不能子传父，给谁传就写到谁的标签里，儿子使用props接收
      age前面加v-bind，传入的数据变成数值类型 -->
  </div>
</template>
<script>
import Student from "./components/Student.vue";
export default {
  name: "App",
  components: {
    Student,
  }
  }
</script>
<style></style>
