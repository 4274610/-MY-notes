<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyword"
      />&nbsp;<button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    searchUsers() {
      //1、请求前更新list数据
      this.$bus.$emit("updateListData", {
        isFirst: false,
        isLoading: true,
        errMsg: "",
        users: [],
      }),
        axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
          //地址用模板字符串，可以按js解析this.keyword,不然会被当做字符串
          (response) => {
            //2、请求成功后更新list数据
            console.log("请求成功", response.data.items);
            this.$bus.$emit("updateListData", {
              isLoading: false,
              errMsg: "",
              users: response.data.items,
            });
          },
          (error) => {
            //3、请求失败后更新list数据
            this.$bus.$emit("updateListData", {
              isLoading: false,
              errMsg: error.message,
              users: [],
            });
            //console.log("请求失败", error.messgae);
          }
        );
    },
    sendUser() {},
  },
};
</script>

<style scoped></style>
