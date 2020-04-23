import axios from 'axios';

export default{
  state:{
    shouts:{}
  },
  getters:{
    shouts(state){
      console.log('1122',state.shouts);
      return state.shouts;
    }
  },
  mutations:{
    getShouts:(state)=>{
      return new Promise((resolve,reject)=>{

      })
    }
  },
  actions:{
    getShouts:(context)=>{
      context.commit('getShouts');
    }
  }
}
