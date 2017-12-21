import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  count:0,
  name:'计算属性'
}

const mutations = {
  increment (state,number){
    state.count += number;
  },
  decrement (state,number){
    state.count -= number;
  }
}

const getters = {
  getName (state) {
    return state.name
  }
}

const actions = {
  incrementSync (context,number){
    setTimeout(function(){
      //提交事件
      context.commit('increment',number);
    },1000)
  },
  decrementSync (context,number){
    setTimeout(function(){
      //提交事件
      context.commit('decrement',number);
    },1000)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
