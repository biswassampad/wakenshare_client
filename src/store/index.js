import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './Auth'
import Post from './posts'
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    auth:Auth,
    post:Post
  }
})
