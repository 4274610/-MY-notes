<template>
  <ul>
    <li>消息编号{{$route.query.id}}</li>
    <li>消息标题{{$route.query.title}}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  mounted(){
    console.log(this.$route);//借助$route身上的query属性，获取路由传来的query参数
  }
};
</script>

<style></style>
