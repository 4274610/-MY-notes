<template>
  <div class="row">
    <!-- 1、展示列表 -->
    <div
      v-show="info.users.length"
      class="card"
      v-for="user in info.users"
      :key="user.id"    
    >
      <a :href="user.html_url" target="_blank">
        <!-- 数据绑定加：点击头像超链接到用户的主页，在控制台用户的属性上找html_url -->
        <img :src="user.avatar_url" style="width: 100px" />
        <!-- 数据绑定加： 图片显示用户的头像 -->
      </a>
      <p class="card-text">{{ user.login }}</p>
      <!--显示用户名 -->
    </div>
    <!--2、展示欢迎语  -->
    <h2 v-show="info.isFirst">欢迎使用！！</h2>
    <!-- 3、展示加载中 -->
    <h2 v-show="info.isLoading">加载中....</h2>
    <!-- 4、展示错误信息 -->
    <h2 v-show="info.errMsg">{{ info.errMsg }}</h2>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      info: {
        users: [],
        isFirst: true,
        isLoading: false,
        errMsg: "",
      },
    };
  },
  methods: {
    sendtUser(dataObj) {
      console.log("成功拿到数据", dataObj);
      this.info = { ...this.info, ...dataObj };
      //把数据存到数组中 ,扩展运算符 合并+替换，保留原来的，替换已有的
    },
  },
  mounted() {
    this.$bus.$on("updateListData", this.sendtUser);
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
