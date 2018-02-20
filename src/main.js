import Vue from 'vue/dist/vue.min.js'
import App from './App.vue'
import Vuetify from 'vuetify/dist/vuetify.min.js'
import 'vuetify/dist/vuetify.min.css'
import Chartkick from 'chartkick'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js/dist/Chart.min.js'

Vue.use(Vuetify)
Vue.use(VueChartkick, {
  Chartkick
})

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
