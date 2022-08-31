<template>
  <div class="school">
    <h2>学校名字：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>
<script>
import pubsub from "pubsub-js"
export default {
  name: "School",
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
  //student组件给school组件传数据
  mounted(){
    //接收、订阅消息  
    this.pubId= pubsub.subscribe("hello",(msgName,data)=>{//用箭头函数或者在上面配置到methods中。两个参数。第一个是事件的名字，第二个才是传过来的数据
      console.log("收到了student传来的hello消息",msgName,data);
     })
    },
    beforeDestroy() {
      //销毁组件前，取消订阅
      pubsub.unsubscribe(this.pubId)
    },
  
 
  
};
</script>
<style scoped>
.school {
  background-color: rgb(220, 239, 233);
  padding: 10px;
}
</style>
