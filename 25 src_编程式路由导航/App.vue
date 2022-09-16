<template>
  <div>
    <div class="row">
      <Banner></Banner>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- router-link的两个属性 push和replace.push是追加历史记录，replace是替换当前记录,谁开启了谁就替换掉上一条，留下它自己路由跳转的时候默认push -->
          <router-link

            class="list-group-item"
            active-class="active"
            to="/about"
            >About</router-link
          >
          <router-link
 
            class="list-group-item"
            active-class="active"
            to="/home"
            >Home</router-link
          >
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "./components/Banner.vue";
export default {
  name: "App",
  components: {
    Banner,
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
