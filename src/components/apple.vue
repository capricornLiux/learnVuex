<template>
  <div>
    <h1>{{msg}}</h1>

    <button type="button" @click="addOne">add one</button>
    <button type="button" @click="minusOne">minus one</button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        msg: 'apple',
        price: 5
      }
    },

    methods : {
        addOne(){
//            this.$store.commit('increment', this.price);
          this.$store.dispatch('increase', this.price);
        },

      minusOne(){
//            this.$store.commit('decrement', this.price);
        this.$store.dispatch('decrease', this.price);
      }
    }
  }
</script>

<style>

</style>
