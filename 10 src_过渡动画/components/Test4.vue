<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏Test4</button>
    <transition-group 
    name="animate__animated animate__bounce" 
    enter-active-class="animate__fadeInBottomRight" 
    leave-active-class="animate__fadeOutTopRight"
    appear>
      <h1 v-show="!isShow" key="1">库过渡效果</h1>
      <h1 v-show="isShow" key="2">第三方库过渡效果</h1>
    </transition-group>
  </div>
</template>
<script>
import "animate.css";
export default {
  name: "Test4",
  data() { 
    return {
      isShow: true,
    };
  },
};
</script>
<style scoped>
h1 {
  background-color: skyblue;
}
</style>
