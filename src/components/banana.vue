<template>
  <div>
    <h1>{{msg}}</h1>
    <button @click="addOne">add One</button>
    <button @click="minusOne">minus One</button>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex';
  export default {
    data(){
      return {
        msg: 'banana',
        price: 15
      }
    },

    methods: {
      addOne(){
        this.increase(this.price);
      },

      minusOne(){
        this.decrease(this.price);
      },

      // 使用语法糖
      ...mapMutations({
        increase: 'INCREMENT',
        decrease: 'DECREMENT'
      })
    }
  }
</script>

<style>

</style>
