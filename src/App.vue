<template>
  <v-container fluid fill-height align-center justify-center>
    <v-layout wrap row fill-height justify-center>
      <v-flex v-if="this.sigevadata">
        <v-card>
          <chart :sigevadata="this.sigevadata">
          </chart>
          <guia-tabla :sigevadata="this.sigevadata">
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
      sigevadata: false
    }
  },
  mounted () {
    this.getSigevaData(this.cuil)
  },
  methods: {
    getSigevaData (query) {
      axios.get(`http://sinos.unsam.edu.ar/api/guin`, {params: { cuil: query }})
      .then(res => {
        const sigevadata = res.data
        const getLength = (item, anio) => sigevadata[item].filter(x => x.anio === anio).length
        sigevadata.articulosLength = {
          '2014': getLength('articulos', 2014),
          '2015': getLength('articulos', 2015),
          '2016': getLength('articulos', 2016),
          '2017': getLength('articulos', 2017)
        }
        sigevadata.librosLength = {
          '2014': getLength('libros', 2014),
          '2015': getLength('libros', 2015),
          '2016': getLength('libros', 2016),
          '2017': getLength('libros', 2017)
        }
        sigevadata.pdlLength = {
          '2014': getLength('pdl', 2014),
          '2015': getLength('pdl', 2015),
          '2016': getLength('pdl', 2016),
          '2017': getLength('pdl', 2017)
        }
        sigevadata.tepLength = {
          '2014': getLength('tep', 2014),
          '2015': getLength('tep', 2015),
          '2016': getLength('tep', 2016),
          '2017': getLength('tep', 2017)
        }
        sigevadata.demLength = {
          '2014': getLength('dem', 2014),
          '2015': getLength('dem', 2015),
          '2016': getLength('dem', 2016),
          '2017': getLength('dem', 2017)
        }
        this.sigevadata = sigevadata
      })
      .catch(err => console.log(`getSigevaData Error: ${err}`))
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