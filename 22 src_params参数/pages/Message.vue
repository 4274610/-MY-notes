<template>
  <div>
    <ul>
      <!-- 跳转路由并携带params参数，to的字符串写法，用斜杠分隔，在index.js中需要写配置项 -->
      <li v-for="m in messageList" :key="m.id"><router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp;</li> 
     
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
