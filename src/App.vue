<template>
  <v-container fluid>
    <v-layout row justify-space-between>
      <v-flex xl8 lg10 md12 sm12 xs12>
        <v-card>
          <chart>
          </chart>
          <guia-tabla>
          </guia-tabla>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import axios from 'axios'
import GuiaTabla from './GuiaTabla.vue'
import Chart from './Chart.vue'
export default {
  components: {
    'guia-tabla': GuiaTabla,
    'chart': Chart
  },
  props: ['cuil'],
  data () {
    return {
    }
  },
  mounted () {
    this.getSigevaData()
  },
  methods: {
    getSigevaData () {
      // axios
      // .get('http://localhost:8080/api/guin',
      //   {params: {
      //     cuil: this.cuil
      //   }})
      // .then(res => console.log(res.data))
      // .catch(err => console.log(err))
    }
  }
}
</script>
<style>
body {
  font-family: 'Lato';
}
.application {
  font-family: 'Lato';
}
.chart-container {
  font-family: 'Lato';
}
</style>