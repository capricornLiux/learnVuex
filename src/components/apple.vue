<template>
  <div>
    <h1>{{msg}}</h1>

    <button type="button" @click="addOne">add one</button>
    <button type="button" @click="minusOne">minus one</button>
  </div>
</template>

<script>

  import {mapMutations} from 'vuex';

  import {mapActions} from 'vuex';

  export default {
    data(){
      return {
        msg: 'apple',
        price: 5,
        // 重量kg
        weight: 1
      }
    },

    methods: {
      addOne(){
//        this.increase(this.price);
        this.appleAdd({
          price: this.price,
          weight: this.weight
        });
      },

      minusOne(){
//        this.decrease(this.price);
        this.appleSub({
          price: this.price,
          weight: this.weight
        });
      },

      // 使用语法糖
      ...mapMutations({
//        increase: 'INCREMENT',
//        decrease: 'DECREMENT'
      }),

      ...mapActions([
        'appleAdd',
        'appleSub'
      ])

    }
  }
</script>

<style>

</style>
