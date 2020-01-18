import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentJWT: ''
  },

  getters: {
    jwt: state => state.currentJWT
  },

  mutations: {
    setJWT (state, jwt) {
      state.currentJWT = jwt
    }
  },

  actions: {
    async login ({ commit }, { name, password }) {
      const result = await fetch('http://192.168.99.100/api/login', {
        method: 'POST',
        mode: 'cors',
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify({
          name,
          password
        })
      }).then((data) => data.text())

      const data = JSON.parse(result)
      commit('setJWT', data.token)

      if (data.success) {
        router.push('home')
      }
    }
  }
})
