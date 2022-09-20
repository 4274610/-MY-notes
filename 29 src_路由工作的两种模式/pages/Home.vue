<template>
  <!-- <h2>我是home组件</h2> -->

  <div>
    <ul class="nav nav-tabs">
      <li>

        <router-link replace class="list-group-item" active-class="active" to="/home/news">News</router-link>
      </li>
      <li>
        <router-link replace  class="list-group-item " active-class="active" to="/home/message">Message</router-link>
      </li>
    </ul>
    <div>
      <ul>
        <!-- 缓存路由组件，News是组件名，不写include的话里面的内容就全部缓存，多个写成数组形式 :include=["News"，"Message"]-->
        <keep-alive include="News">
            <router-view></router-view>
        </keep-alive>
    
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style></style>
