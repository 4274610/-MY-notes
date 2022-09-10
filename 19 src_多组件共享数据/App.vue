<template>
  <div class="container">
    <Count></Count>
    <hr />
    <Person></Person>
  </div>
</template>

<script>
import Count from "./components/Count.vue";
import Person from "./components/Person.vue";
export default {
  name: "App",
  components: {
    Count,
    Person,
  },
};
</script>
<style>
.container,
.foot,
h4 {
  display: flex;
  justify-content: space-around;
}
img {
  width: 200px;
  height: 100px;
}
video {
  width: 200px;
  height: 100px;
}
</style>
