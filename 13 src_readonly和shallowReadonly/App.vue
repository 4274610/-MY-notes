<template>
  <div>
    <button @click="isShowDemo = !isShowDemo">显示/隐藏demo组件</button>
    <Demo v-if="isShowDemo"></Demo>
  </div>
</template>

<script>
import Demo from "./components/Demo.vue";
import { ref } from "vue";
export default {
  name: "App",
  components: { Demo },
  setup() {
    let isShowDemo = ref(true);

    return {
      isShowDemo,
    };
  },
};
</script>

<style></style>
