import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'

Vue.use(Vuex)
let _api = Axios.create({
  baseURL: 'https://dragon-duel.herokuapp.com/api/'
})

export default new Vuex.Store({
  state: {
    heroes: [],
    dragons: [],
    activeHero: {},
    activeDragon: {}

  },
  mutations: {
    setHeroes(state, data) {
      state.heroes = data
    },
    setDragons(state, data) {
      state.dragons = data
    },
    setActiveHero(state, data) {
      state.activeHero = data
    },
    setActiveDragon(state, data) {
      state.activeDragon = data
    }
  },
  actions: {
    getHeroes({ commit, dispatch }) {
      _api.get('champions')
        .then(res => {
          commit('setHeroes', res.data)
        })
    },
    getHero({ commit, dispatch }, payload) {
      _api.get('heroes/' + payload)
        .then(res => {
          commit('setActiveHero', res.data)
        })
    },
    getDragons({ commit, dispatch }) {
      _api.get('dragons')
        .then(res => {
          commit('setDragons', res.data)
        })
    },
    getActiveDragon({ commit, dispatch }, payload) {
      _api.get('dragons/' + payload)
        .then(res => {
          commit('setActiveDragon', res.data)
        })
    }
  }
})
