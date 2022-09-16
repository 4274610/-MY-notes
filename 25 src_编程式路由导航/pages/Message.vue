<template>
  <div>
    <ul>
      <!-- 用props测试params参数 -->
      <!-- <li v-for="m in messageList" :key="m.id"><router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp;</li>  -->

      <!-- 用props测试query参数 -->
      <!-- <li v-for="m in messageList" :key="m.id"><router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp;</li>  -->

      <li v-for="m in messageList" :key="m.id">
        <router-link
          :to="{
            name: 'xiangqing',
            query: { id: m.id, title: m.title },
          }"
          >{{ m.title }}</router-link
        >&nbsp;&nbsp;
        <button @click="pushShow(m)">push查看</button>
        <button @click="replaceShow(m)">replace查看</button>
      </li>
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
  methods: {
    //编程式导航
    //除了router-link(a标签），另一种（按钮）发送参数的方法，让子组件加载出来this.$router.push
    pushShow(m) {
      this.$router.push({
        name: "xiangqing",
        query: { id: m.id, title: m.title },
      });
    },
    replaceShow(m) {
      this.$router.replace({
        name: "xiangqing",/ 
        query: { id: m.id, title: m.title },

        // params: {id: m.id, title: m.title },params必须用name来引入路由
      });
    },
  },
};
</script>

<style></style>
