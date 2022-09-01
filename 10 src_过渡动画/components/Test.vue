<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏test</button>
    <transition name="hello" :appear="true">
      <!--transition有name，下面跟着写name，不写就name,下面就写v  -->
      <!-- 一打开就出现动画appear 或者 :appear="true" 加冒号true变布尔值-->
     <h1 v-show="isShow" >你好啊</h1>
    </transition>
   
  </div>
</template>
<script>
export default {
  name: "Test",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>
<style scoped> 
h1{
  background-color: antiquewhite;
}
/* .v-enter-active{
  animation: atguigu 1s;
}
.v-leave-active{
  animation: atguigu 1s reverse;
} */

/* 进入过程中 */
.hello-enter-active{
  animation: atguigu 1s;
}
/* 离开过程中 */
.hello-leave-active{
  animation: atguigu 1s reverse;
}
@keyframes atguigu{
  from{
    transform:translateX(-100%);
  }
  to{
    transform:translateX(0px);
  }
}
</style>
