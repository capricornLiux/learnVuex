<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--<hello></hello>-->

    {{totalPrice}}
    <apple></apple>
    <banana></banana>

  </div>
</template>

<script>

  import Apple from './components/apple.vue'
  import Banana from './components/banana.vue'

  import {mapGetters} from 'vuex'

  export default {
    name: 'app',
    components: {
      Apple,
      Banana,
    },

    // 定义计算型属性
    computed: {
      ...mapGetters([
        'totalPrice'
      ])
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
