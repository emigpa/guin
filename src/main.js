import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import i18n from './i18n'
import 'vuetify/dist/vuetify.min.css'
import Chartkick from 'chartkick'
import VueChartkick from 'vue-chartkick'
/* eslint-disable-next-line */
import Chart from 'chart.js/dist/Chart.min.js'

Vue.use(VueChartkick, { Chartkick })
Vue.config.productionTip = false

new Vue({
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app')
