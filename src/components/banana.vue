<template>
  <div>
    <h1>{{msg}}</h1>
    <button @click="addOne">add One</button>
    <button @click="minusOne">minus One</button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        msg: 'banana',
        price: 15
      }
    },

    methods: {
      addOne(){
//        this.$store.commit('increment', this.price);
        this.$store.dispatch('increase', this.price);
      },

      minusOne(){
//        this.$store.commit('decrement', this.price);
        this.$store.dispatch('decrease', this.price);
      }
    }
  }
</script>

<style>

</style>
