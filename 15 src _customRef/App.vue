<template>
  <div>
    <input type="text" v-model="keyWord" />
    <h2>{{ keyWord }}</h2>
  </div>
</template>

<script>
import { customRef, ref } from "vue";
export default {
  name: "App",
  setup() {
    // let keyWord = ref("hello");//使用vue提供的ref
    let keyWord = myRef("hello", 1000); //程序员自定义的ref

    // customRef作用：创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制。
    // 实现防抖效果：
    function myRef(value, delay) {
      let timer;
      //第一个return 是把结果输出来，第二个return是业务逻辑
      return customRef((track, trigger) => {
        return {
          get() {
            console.log(`有人从myRef中读取了${value}`);
            track(); //通知vue去追踪value的变化
            return value;
          },
          set(newValue) {
            console.log(`有人把myRef中的数据修改成了${newValue}`);
            clearTimeout(timer);
            timer = setTimeout(() => {
              value = newValue;
              trigger(); //通知vue去重新解析模板
            }, delay);
          },
        };
      });
    }

    return {
      keyWord,
    };
  },
};
</script>

<style></style>
