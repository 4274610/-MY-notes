<template>
  <ul>
    <li>消息编号{{$route.params.id}}</li>
    <li>消息标题{{$route.params.title}}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  mounted(){
    console.log(this.$route);//借助$route身上的params属性，获取路由传来的params参数
  }
};
</script>

<style></style>
