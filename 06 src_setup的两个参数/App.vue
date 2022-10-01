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
    //绑定自定义事件，可以替换vue2中的.native修饰符，子组件用emits: ['']和.emit接着
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
