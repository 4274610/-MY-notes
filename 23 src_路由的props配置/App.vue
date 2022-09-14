<template>
  <div>
    <div class="row">
      <Banner></Banner>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 原始html中，使用a标签实现页面的跳转 -->
          <!-- <a class="list-group-item active" href="./about.html">About</a>
          <a class="list-group-item" href="./home.html">Home</a> -->

          <!-- 利用router-link实现路由的切换 四处需要改动的地方 router-link  active-class="active" to="/about"加路径 -->
          <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 指定组件的呈现位置 -->
            <!-- <h2>点击哪个组件，就显示哪个组件的内容</h2> -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "./components/Banner.vue"
export default {
  name: "App",
  components: {
  Banner
  },
};
</script>
<style>
/* .container,
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
} */
</style>
