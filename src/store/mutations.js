/**
 * Created by liuxin on 2017/8/9.
 */
import * as types from './mutation-types'

const mutations = {
  // apple
  [types.SET_APPLE_ADD_PRICE](state, price) {
    state.totalPrice += price;
  },

  [types.SET_APPLE_ADD_WEIGHT](state, weight) {
    state.totalWeight += weight;
  },

  [types.SET_APPLE_SUBTRACT_PRICE](state, price) {
    state.totalPrice -= price;
  },

  [types.SET_APPLE_SUBTRACT_WEIGHT](state, weight) {
    state.totalWeight -= weight;
  },

  // banana

  [types.SET_BANANA_ADD_PRICE](state, price) {
    state.totalPrice += price;
  },

  [types.SET_BANANA_ADD_WEIGHT](state, weight) {
    state.totalWeight += weight;
  },

  [types.SET_BANANA_SUBTRACT_PRICE](state, price) {
    state.totalPrice -= price;
  },

  [types.SET_BANANA_SUBTRACT_WEIGHT](state, weight) {
    state.totalWeight -= weight;
  }
};

export default mutations
