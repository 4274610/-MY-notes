<template>
  <div class="container">
    <!-- APP组件里的标签完成解析后再塞到插槽中 -->
    <Category title="美食">
      <!-- 如果穿得数据不是data中的就不需要冒号 -->
      <img
        slot="center"
        src="https://p5.itc.cn/images01/20220520/950bc5965761474d8480b7d58ae3c9d6.jpeg"
        alt=""
      />
      <a slot="footer" href="http://baidu.com">更多美食</a>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
      <div slot="footer" class="foot">
        <a href="http://baidu.com">单机游戏</a>
        <a href="http://baidu.com">网络游戏</a>
      </div>
    </Category>
    <Category title="电影">
      <video
        slot="center"
        src="http://clips.vorwaerts-gmbn.de/big_buck_bunny.mp4"
        controls
      ></video>
      <template slot="footer">
      <!-- <template v-slot:footer>   v-slot:footer是新写法，只能配合template使用-->
        <div class="foot">
          <a href="http://baidu.com">经典</a>
          <a href="http://baidu.com">热门</a>
          <a href="http://baidu.com">推荐</a>
        </div>
        <h4>欢迎前来观看</h4>
        <!-- h4可以单独放到footer插槽中，也可也和上面的一起包裹到template中 -->
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
