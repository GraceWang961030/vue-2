import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let state={
  count:10
};
const actions={
  increase:({commit})=>{
    commit('increase')
  },
  decrease:({commit})=>{
    commit('decrease');
  },
  clickEven:({commit})=>{
    commit('clickEven');
  },
  clickAsync:({commit})=>{
    return new Promise((resolve,reject)=>{
      setTimeout(function() {
        commit('increase')
        resolve()
      },1000)
    })
  }
};

const mutations={
  increase(state){
    state.count++;
  },
  decrease(state){
    state.count--;
  },
  clickEven(state){
    if(state.count%2==0){
      state.count++;
    }
  }
};
 const  getters={
   count(state){
     return state.count;
   }
   }
 ;
export default new  Vuex.Store({
  actions,
  state,
  mutations,
  getters
})
