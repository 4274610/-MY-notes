<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏Test3</button>
    <transition-group name="hello" appear>
      <h1 v-show="!isShow" key="1">多个动画过渡效果</h1>
      <h1 v-show="isShow" key="2">多个动画过渡效果</h1>
      <!--transition-group的子元素必须匹配key值  -->
    </transition-group>
  </div>
</template>
<script>
export default {
  name: "Test3",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>
<style scoped>
h1 {
  background-color: rgb(203, 130, 34);
}
/* 进入的起点 */
.hello-enter {
  transform: translateX(-100%);
}
/* 进入的终点 */
.hello-enter-to {
  transform: translateX(0px);
}
/* 过渡效果 */
.hello-enter-active,
.hello-leave-active {
  transition: 1s linear;
}
/* 离开的起点 */
.hello-leave {
  transform: translateX(0px);
}
/* 离开的终点 */
.hello-leave-to {
  transform: translateX(-100%);
}

/* 合并写 */
/* .hello-enter,.hello-leave-to{
   transform:translateX(-100%);
}
.hello-enter-to,.hello-leave{
transform:translateX(0px);
} */
</style>
