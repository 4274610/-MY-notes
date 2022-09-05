<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 定义一个插槽 -->
    <slot>默认插槽，没有内容传递过来时，显示我</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: [ "title"],
};
</script>

<style scoped>
.category {
  background-color: rgb(187, 227, 214);
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: rgb(208, 182, 186);
}
</style>
