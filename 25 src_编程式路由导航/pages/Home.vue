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
        <router-view></router-view>
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
