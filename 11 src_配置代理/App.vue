<template>
  <div id="app">
    <button @click="getStudentMsg">点我获取学生信息</button>
    <button @click="getCarMsg">点我获取汽车信息</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "App",
  methods: {
    getStudentMsg() {
      axios({
        //1、配置代理方式一的路径写法
        // url: "http://localhost:8080/students",
        //2、配置代理方式二的路径写法
        url: "http://localhost:8080/atguigu/students",
        methods: "GET",
      }).then(response=>{
        console.log("请求成功",response.data),error=>{
          console.log("请求失败",error.messgae);
        }
      })
    },
    getCarMsg() {
      axios({
        url: "http://localhost:8080/demo/cars",
        methods: "GET",
      }).then(response=>{
        console.log("请求成功",response.data),error=>{
          console.log("请求失败",error.messgae);
        }
      })
    },
  },
};
</script>
