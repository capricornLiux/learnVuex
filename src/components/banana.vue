<template>
  <div>
    <h1>{{msg}}</h1>
    <button @click="addOne">add One</button>
    <button @click="minusOne">minus One</button>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex';

  import {mapActions} from 'vuex';

  export default {
    data(){
      return {
        msg: 'banana',
        price: 15,
        // 重量kg
        weight: 2
      }
    },

    methods: {
      addOne(){
//        this.increase(this.price);
        this.bananaAdd({
          price: this.price,
          weight: this.weight
        })
      },

      minusOne(){
//        this.decrease(this.price);
        this.bananaSub({
          price: this.price,
          weight: this.weight
        })
      },

      // 使用语法糖
      /*
      ...mapMutations({
        increase: 'INCREMENT',
        decrease: 'DECREMENT'
      }),
      */

      ...mapActions([
        'bananaAdd',
        'bananaSub'
      ])
    }
  }
</script>

<style>

</style>
