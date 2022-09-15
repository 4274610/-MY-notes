<template>
  <div>
    <ul>
     <!-- 用props测试params参数 -->
      <!-- <li v-for="m in messageList" :key="m.id"><router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp;</li>  -->
     
     <!-- 用props测试query参数 -->   
      <li v-for="m in messageList" :key="m.id"><router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp;</li> 


      <!-- 跳转路由并携带 params参数，to的对象写法 -->
      <!-- <li v-for="m in messageList" :key="m.id">
        <router-link
          :to="{
            name:'xiangqing',
           //这里只能写name,不能写path
            params: { id: m.id, title: m.title },
          }"
          >{{ m.title }}</router-link
        >&nbsp;&nbsp;
      </li> -->
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "001", title: "消息001" },
        { id: "002", title: "消息002" },
        { id: "003", title: "消息003" },
      ],
    };
  },
};
</script>

<style></style>
