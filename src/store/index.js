import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/api/http'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    posts () {
      return http.get('/.netlify/functions/server').then(response => {
        return response.data;
      });
    }
  },
  modules: {
  }
})
