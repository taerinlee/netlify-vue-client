import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/api/http'

Vue.use(Vuex)

const baseUri = '/.netlify/functions/server';

export default new Vuex.Store({
  state: {
  },
  mutations: {
    // TODO maintain for temperary
    TEMP() {
    }
  },
  actions: {
    getPosts () {
      return http.get(baseUri).then(response => {
        return response.data;
      });
    },
    deletePost ({ commit }, id) {
      // TODO maintain for temperary
      commit('TEMP');
      return http.delete(baseUri+`/delete/${id}`).then(response => {
        return response.data;
      });
    },
    getPost ({ commit }, id) {
      // TODO maintain for temperary
      commit('TEMP');
      return http.get(baseUri+`/post/${id}`).then(response => {
        return response.data;
      });
    },
    updatePost ({ commit }, payload) {
      // TODO maintain for temperary
      commit('TEMP');
      return http.post(baseUri+`/update/${payload.id}`, payload.params).then(response => {
        return response.data;
      });
    },
    addPost ({ commit }, payload) {
      // TODO maintain for temperary
      commit('TEMP');
      return http.post(baseUri+'/add', payload.params).then(response => {
        return response.data;
      });
    }
  },
  modules: {
  }
})
