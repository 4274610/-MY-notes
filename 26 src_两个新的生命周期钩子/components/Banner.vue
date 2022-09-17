<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Vue Router Demo</h2>
      <button @click="back">后退</button>
      <button @click="forward">前进</button>
      <button @click="testGo">测试一下go</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    //利用$router的属性back()forward()实现前进和后退，如果有replace会影响跳过被替换的内容
    back() {
      this.$router.back();
    },
    forward() {
      this.$router.forward();
    },
    testGo() {
      this.$router.go(-2);//可前进可后退
    },
  },
};
</script>

<style></style>
