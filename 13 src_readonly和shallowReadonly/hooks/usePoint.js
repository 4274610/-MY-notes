import { onBeforeUnmount, onMounted, reactive } from "vue";

//使用函数封装并暴露出去
export default function () {

//实现鼠标"打点"的相关数据
  let point = reactive({
    x: 0,
    y: 0,
  });
//实现鼠标"打点"的相关方法
function savePoint(e) {
  point.x = e.pageX;
  point.y = e.pageY;
  console.log(e.pageX, e.pageY);
}
//实现鼠标"打点"的相关钩子
onMounted(() => {
  window.addEventListener("click", savePoint);
});
onBeforeUnmount(() => {
  window.removeEventListener("click", savePoint); //卸载前移除回调
});
//把数据return出去
return point 
}



