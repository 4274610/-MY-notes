<template>
  <ul>
    <li :style="{ opacity }">欢迎学习Vue</li>
    <li>news001 <input type="text" /></li>
    <li>news002 <input type="text" /></li>
    <li>news003 <input type="text" /></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1,
    };
  },
  // mounted() {
  //   this.timer = setInterval(() => {
  //     console.log("setInterval");
  //     this.opacity -= 0.01;
  //     if (this.opacity <= 0) this.opacity = 1;
  //   }, 16);
  // },
  // beforeDestroy() {
  //   clearInterval(this.timer);
  // },

  //组件独有的两个生命周期钩子，特殊时候使用，因为整个News组件缓存了，离开页面时也不会被销毁，但是要让【欢迎学习Vue】销毁，此时就需要这两个钩子
  //组件被激活时
  activated() {
    this.timer = setInterval(() => {
      console.log("setInterval");
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    }, 16);
  },
  //组件失活时
  deactivated() {
    clearInterval(this.timer);
  },
};
</script>

<style></style>
