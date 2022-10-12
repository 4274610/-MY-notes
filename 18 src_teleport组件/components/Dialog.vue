<template>
  <div>
    <button @click="isShow = true">点我弹窗</button>
    <teleport to="body">
    <!--  Teleport 是一种能够将我们的组件html结构移动到指定位置的技术。 -->
      <!-- to后面写放到哪里 ,就以哪里进行定位，指定位置-->
      <div v-if="isShow" class="mask">
        <div class="dialog">
          <h2>我是一个弹窗</h2>
          <h3>一些内容</h3>
          <h3>一些内容</h3>
          <h3>一些内容</h3>
          <h3>一些内容</h3>
          <button @click="isShow = false">关闭弹窗</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Dialog",
  setup() {
    let isShow = ref(false);
    return { isShow };
  },
};
</script>

<style>
.mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.dialog {
  width: 300px;
  height: 300px;
  background-color: rgb(202, 249, 233);
  text-align: center;
  /* 弹窗居中 translate挪回自身的一半*/
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
