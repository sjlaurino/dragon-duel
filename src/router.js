import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Selector from './views/Selector.vue'
// @ts-ignore
import Game from './views/Game.vue'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'select',
      component: Selector
    },
    {
      path: '/game',
      name: 'game',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Game
      // function() {
      //   return import(/* webpackChunkName: "about" */ './views/Game.vue')
      // }

    }
  ]
})
