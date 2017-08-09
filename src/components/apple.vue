<template>
  <div>
    <h1>{{msg}}</h1>

    <button type="button" @click="addOne">add one</button>
    <button type="button" @click="minusOne">minus one</button>
  </div>
</template>

<script>

  import {mapMutations} from 'vuex';

  export default {
    data(){
      return {
        msg: 'apple',
        price: 5
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
