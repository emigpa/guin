import Vue from 'vue/dist/vue.min.js'
import Vuetify from 'vuetify/dist/vuetify.min.js'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import Chartkick from 'chartkick'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js/dist/Chart.min.js'

Vue.use(Vuetify)
Vue.use(VueChartkick, { Chartkick })
const querycuil = document.getElementById('app').getAttribute('data-cuil')

const app = new Vue({
  el: '#app',
  template: `
  <v-app>
    <main>
      <v-container fluid>
      <App :cuil="${querycuil}"><App/>
      </v-container>
    </main>
  </v-app>
  `,
  components: { App }
})
