<template>
  <h2>我是about组件</h2>
</template>

<script>
export default {
  name: "About",
  //组件路由守卫
  //通过路由规则，进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    console.log(to, from,"beforeRouteEnter");
    if (to.meta.isAuth) {
      if (localStorage.getItem("school") === "atguigu") {
        next();
      } else {
        alert("无权限查看！！!");
      }
    } else {
      next();
    }
  },
  //通过路由规则，离开该组件时被调用
  beforeRouteLeave (to, from, next) {
    console.log(to, from,"beforeRouteLeave");
     next(); 
  }
};
</script>

<style></style>
