/**
 * Created by liuxin on 2017/8/9.
 */
// 一个动作提交多个mutations, 封装在action中进行一次多个操作
import * as types from './mutation-types'

export const appleAdd = function ({commit, state}, {price, weight}) {
  commit(types.SET_APPLE_ADD_PRICE, price);
  commit(types.SET_APPLE_ADD_WEIGHT, weight);
};

export const appleSub = function ({commit, state}, {price, weight}) {
  commit(types.SET_APPLE_SUBTRACT_PRICE, price);
  commit(types.SET_APPLE_SUBTRACT_WEIGHT, weight);
};

export const bananaAdd = function ({commit, state}, {price, weight}) {
  commit(types.SET_BANANA_ADD_PRICE, price);
  commit(types.SET_BANANA_ADD_WEIGHT, weight);
};

export const bananaSub = function ({commit, state}, {price, weight}) {
  commit(types.SET_BANANA_SUBTRACT_PRICE, price);
  commit(types.SET_BANANA_SUBTRACT_WEIGHT, weight);
};

