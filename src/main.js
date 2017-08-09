// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 导入vuex
import Vuex from 'vuex'

Vue.config.productionTip = false

// 使用use进行注册
Vue.use(Vuex);

// 进行vuex配置
let store = new Vuex.Store({
  state: {
    totalPrice: 0
  },

  // getters获取状态集里面的数据
  getters: {
      getTotal(state){
        return state.totalPrice;
      }
  },

  mutations: {
    increment(state, price){
      state.totalPrice += price;
    },

    decrement(state, price){
      state.totalPrice -= price;
    }
  },

  actions: {
    increase(context, price) {
      context.commit('increment', price);
    },

    decrease(context, price){
      context.commit('decrement', price);
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',

  // 使用store
  store: store,

  template: '<App/>',
  components: { App }
})
