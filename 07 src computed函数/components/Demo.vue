<template>
  <div>
    <h1>人员信息</h1>
    <h2>姓：{{ person.firstName }}</h2>
    <h2>名：{{ person.lastName }}</h2>
    <h2>全名：{{ person.fullName }}</h2>
    <input type="text" v-model="person.firstName" />
    <input type="text" v-model="person.lastName" />
    <input type="text" v-model="person.fullName" />
  </div>
</template>

<script>
import { reactive, computed } from "vue";
export default {
  name: "Demo",

  setup() {
    let person = reactive({
      firstName: "张",
      lastName: "三",
    });
    // 简写
    // person.fullName = computed(() => {
    //   return person.firstName + "-" + person.lastName;
    // });

    person.fullName = computed({
      get() {
        return person.firstName + "-" + person.lastName;
      },
      set(value) {
        console.log("set被调用", value);
        const nameArr = value.split("-");
        person.firstName = nameArr[0];
        person.lastName = nameArr[1];
      },
    });
    return {
      person,
    };
  },
};
</script>

<style></style>
