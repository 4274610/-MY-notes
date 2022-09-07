<template>
  <div class="container">
    <Category title="美食">
      <template v-slot="foodss">
        <!-- 这里的foodss是一个对象,{foods:["火锅", "烧烤", "小龙虾", "牛排"]}名字可以随便命名 -->
        <!-- v-slot和scope都可以,和具名插槽不一样slot="" -->
        <ul>
          <li v-for="(g, index) in foodss.foods" :key="index">{{ g }}</li>
        </ul>
      </template>
    </Category>

    <Category title="美食">
      <!-- 解构赋值的写法{ foods:foods }={foods} -->
      <template v-slot="{ foods:foods }">
        <ol>
          <li v-for="(g, index) in foods" :key="index">{{ g }}</li>
        </ol>
      </template>
    </Category>

    <Category title="美食">
      <template v-slot="{ foods }">
        <h4 v-for="(g, index) in foods" :key="index">{{ g }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: {
    Category,
  },
};
</script>
<style>
.container,
.foot,
h4 {
  display: flex;
  justify-content: space-around;
}
img {
  width: 200px;
  height: 100px;
}
video {
  width: 200px;
  height: 100px;
}
</style>
