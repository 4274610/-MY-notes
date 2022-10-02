<template>
  <div>
    <Demo msg="你好啊" school="尚硅谷" @hello="showHelloMsg"></Demo>
  </div>
</template>

<script>
import Demo from "./components/Demo.vue";
export default {
  name: "App",
  components: { Demo },
  setup() {
    //绑定自定义事件
    function showHelloMsg(value) {
      alert(`你触发了hello事件，我收到的参数是${value}`);
    }
    return {
      showHelloMsg
    }
  },
};
</script>

<style></style>
