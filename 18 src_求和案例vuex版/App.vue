<template>
  <div class="container">
    <Count></Count>
  </div>
</template>

<script>
import  Count from "./components/Count.vue";
export default {
  name: "App",
  components: {
    Count
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
