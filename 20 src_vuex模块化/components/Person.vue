<template>
  <div>
    <h2 style="color: red">count组件的和为{{ sum }}</h2>
    <h1>人员列表</h1>
    <h2>列表中的第一个人是{{firstPersonName}}</h2>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="addPerson">添加</button>
    <button @click="addPersonWang">添加一个姓王的人</button>
    <button @click="addServerPerson">请求服务器添加人名</button>
    <ul>
      <!-- <li v-for="p in $store.state.personList" :key="p.id">{{p.name}}</li> -->
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "Person",
  data() {
    return {
      name: "",
     
    };
  },
  computed: {
    personList() {
      return this.$store.state.personAbout.personList;
    },
    sum() {
      return this.$store.state.countAbout.sum;
    },
    firstPersonName(){
        return this.$store.getters["personAbout/firstPersonName"];//读取对象里的一个属性
    }
  },
  methods: {
    addPerson() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.commit("personAbout/ADD_PERSON", personObj);
      this.name = "";
    },
    addPersonWang() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.dispatch("personAbout/addPersonWang", personObj);
      this.name = "";
    },
    //请求不输入数据
    addServerPerson(){
        this.$store.dispatch("personAbout/addPersonServer")
    }
  },
};
</script>

<style></style>
