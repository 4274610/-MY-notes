<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <slot :foods="foods" >默认插槽，没有内容传递过来时，显示我</slot>
    <!-- 数据传给插槽的使用者 -->
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾", "牛排"]
    };
  },
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
