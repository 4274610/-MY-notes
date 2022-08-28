<template>
  <div>
    <student></student>
    <hr>
    <school></school>
  </div> 
</template>
<script>
import School from "./components/School.vue";

import Student from "./components/Student.vue";
export default {
  name: "App",
  components: {
    Student,
    School
  }
  }
</script>
<style>
.title{
  color:red
}
/* style在APP.vue中对全部的title起作用 */
</style>
