<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ age}}</h2>
    <!-- 使用父组件传过来的数据 -->
    <h2>学生年龄：{{ myAge + 1 }}</h2>
    <button @click="addAge">点我年龄+1</button>
  </div>
</template>
<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "我是一个尚硅谷的学生",
      myAge: this.age,//props是只读的，通过props传进来的值是无法修改的，无法this.age=99这样去修改，props优先级更高
      //所以需要通过这样的方式去改，复制props到data中，修改data中的数据
    };
  },
  methods: {
    addAge() {
      this.myAge++;
    },
  },

  //1、简单声明接收，常用，必须写到数组里，加引号 ，跟钱有关的必须用最完整的写法
  // props:["name","age","sex"]

  //2、接收的同时对数据进行类型限制，如果不是符合的类型，控制台会报错
  // props: {
  //   name: String,
  //   sex: String,
  //   age: Number,
  // },

  // 3、接收的同时对数据进行类型限制、默认值的指定、必要性的限制
  props: {
    name: {
      type: String,
      required: true, //name是必传项
    },
    age: {
      type: Number,
      default: 99, //age不是必传项，如果不传值就默认99
    },
    sex: {
      type: String,
      required: true,
    },
  },
};
</script>
