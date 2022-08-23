<template>
  <!--一、组件的结构  -->
  <div class="demo">
    <h2>学校名字：{{ schoolName }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>
<script>
// 二、组件交互相关的代码
export default {
  name: "School", //最好和文件名保持一致
  data() {
    return {
      schoolName: "尚硅谷",
      address: "北京",
    };
  },
};
</script>
<style>
/* 三、组件的样式 */
.demo {
  background-color: antiquewhite;
}
</style>
