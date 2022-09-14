<template>
  <ul>
    <li>消息编号{{id}}</li>
    <li>消息标题{{title}}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  props:["id","title"],
  mounted(){
    console.log(this.$route);//借助$route身上的params属性，获取路由传来的params参数
  }
};
</script>

<style></style>
