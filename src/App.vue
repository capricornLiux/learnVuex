<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--<hello></hello>-->

    {{totalPrice}}
    <apple></apple>
    <banana></banana>

    <test></test>

  </div>
</template>

<script>
//import Hello from './components/Hello'
import Apple from './components/apple.vue'
import Banana from './components/banana.vue'
import test from './components/test.vue'
export default {
  name: 'app',
  components: {
//    Hello
    Apple,
    Banana,
    test
  },

  // 定义计算型属性
  computed : {
      totalPrice() {
//        return this.$store.state.totalPrice;
        return this.$store.getters.getTotal;
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
