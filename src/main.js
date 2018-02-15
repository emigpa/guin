import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import Chartkick from 'chartkick'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'

Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.use(VueChartkick, {
  Chartkick
})

const notfound = {
  template: '<div> Not found </div>'
}

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/:cuil',
      component: App,
      props: true
    }
    // {
    //   path: '*',
    //   component: notfound
    // }
  ]
})

new Vue({
  el: '#app',
  store,
  router
})
