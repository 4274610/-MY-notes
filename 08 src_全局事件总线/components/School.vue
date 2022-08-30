<template>
  <div class="school">
    <h2>学校名字：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>
<script>
export default {
  name: "School",
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
  //全局事件总线，兄弟通信：student组件给school组件传数据
  //接收数据的一方，写在mounted里
  mounted(){
    this.$bus.$on("hello",data=>{//$on绑定事件hello,这样就不用在上面绑定了
      console.log("我是school组件,我收到了数据",data);
      // 通过$on("CustomCaseName",回调)绑定自定义事件时，为了保证this的指向父组件，需要在methods中设置回调，直接$on中配置回调时，必须使用箭头函数。
      
    })
  },
  beforeDestroy() {
    this.$bus.$off("hello")//解绑
  },
  
};
</script>
<style scoped>
.school {
  background-color: rgb(220, 239, 233);
  padding: 10px;
}
</style>
