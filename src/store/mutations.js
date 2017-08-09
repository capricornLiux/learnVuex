/**
 * Created by liuxin on 2017/8/9.
 */
import * as types from './mutation-types'

const mutations = {
  [types.INCREMENT](state, price) {
    state.totalPrice += price;
  },

  [types.DECREMENT](state, price) {
    state.totalPrice -= price;
  }
};

export default mutations
