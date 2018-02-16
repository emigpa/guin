import Vue from 'vue/dist/vue.min.js'
import VueRouter from 'vue-router/dist/vue-router.min.js'
import store from './store'
import App from './App.vue'
import Vuetify from 'vuetify/dist/vuetify.min.js'
import 'vuetify/dist/vuetify.min.css'
import Chartkick from 'chartkick'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js/dist/Chart.min.js'

Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.use(VueChartkick, {
  Chartkick
})

const notfound = {
  template: '<div> No se encontraron datos con el cuil proporcionado. :S </div>'
}

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/:cuil',
      component: App,
      props: true
    },
    {
      path: '*',
      component: notfound
    }
  ]
})

new Vue({
  el: '#app',
  store,
  router
})
