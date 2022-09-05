<template>
  <div class="container">
    <!-- APP组件里的标签完成解析后再塞到插槽中 -->
    <!-- 内容不一样写到父组件中，如果内容一样就直接传数据过去，写到子组件中 -->
    <Category title="美食" >
      <!-- 如果穿得数据不是data中的就不需要冒号 -->
      <img src="https://p5.itc.cn/images01/20220520/950bc5965761474d8480b7d58ae3c9d6.jpeg" alt="">
    </Category>

    <Category title="游戏" >
      <ul>
      <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
    </Category>
    
    <Category title="电影" >
      <video src="http://clips.vorwaerts-gmbn.de/big_buck_bunny.mp4" controls></video>
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
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
      films: ["《教父》", "《拆弹专家》", "《你好，李焕英》", "《尚硅谷》"],
    };
  },
};
</script>
<style>
.container {
  display: flex;
  justify-content: space-around;
}
img{
  width: 200px;
  height: 100px;
}
video{
  width: 200px;
  height: 100px;
}
</style>
