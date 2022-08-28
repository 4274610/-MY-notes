const obj = {
    // 本质：包含install方法的一个对象
  install(Vue) {
    //全局过滤器
    Vue.filter("mySlice", function (value) {
      return value.slice(0, 4);
    });
    //全局指令
    Vue.directive("big", function (element, binding) {
      element.innerText = binding.value * 10;
    });
    Vue.directive("fbind", {
      bind(element, binding) {
        element.value = binding.value;
      },
      inserted(element, binding) {
        element.focus();
      },
      update(element, binding) {
        element.value = binding.value;
      },
    });
    //定义混入
    Vue.mixin({
      data() {
        return { x: 100 };
      },
    });
    //给Vue原型上添加一个方法(vm和vc都能用)
    Vue.prototype.hello = () => {
      alert("hello");
    };
  },
};
export default obj;
