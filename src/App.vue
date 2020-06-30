<template>
  <v-container fluid>
    <v-layout
      wrap
      row
    >
      <v-card v-if="this.sigevadata">
        <v-card-title>
          <h1 class="subheading">PUBLICACIONES</h1>
        </v-card-title>
        <chart :sigevadata="this.sigevadata">
        </chart>
        <guia-tabla :sigevadata="this.sigevadata">
        </guia-tabla>
        <v-card-media class="pr-3 pb-3">
          <v-spacer></v-spacer>
          <a
            href="https://github.com/emigpa/guin"
            target="_blank"
          >
            <img
              alt="github.com/emigpa/guin"
              src="http://sinos.unsam.edu.ar/guin/github.png"
            ></img>
          </a>
        </v-card-media>
      </v-card>
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
    chart: Chart
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
      axios
        .get(`http://sinos.unsam.edu.ar/api/guin`, { params: { cuil: query } })
        .then(res => {
          const sigevadata = res.data
          const getLength = (item, anio) =>
            sigevadata[item].filter(x => x.anio === anio).length
          sigevadata.articulosLength = {
            '2015': getLength('articulos', 2015),
            '2016': getLength('articulos', 2016),
            '2017': getLength('articulos', 2017),
            '2018': getLength('articulos', 2018),
            '2019': getLength('articulos', 2019),
            '2020': getLength('articulos', 2020),
          }
          sigevadata.librosLength = {
            '2015': getLength('libros', 2015),
            '2016': getLength('libros', 2016),
            '2017': getLength('libros', 2017),
            '2018': getLength('libros', 2018),
            '2019': getLength('libros', 2019),
            '2020': getLength('libros', 2020)
          }
          sigevadata.pdlLength = {
            '2015': getLength('pdl', 2015),
            '2016': getLength('pdl', 2016),
            '2017': getLength('pdl', 2017),
            '2018': getLength('pdl', 2018),
            '2019': getLength('pdl', 2019),
            '2020': getLength('pdl', 2020)
          }
          sigevadata.tepLength = {
            '2015': getLength('tep', 2015),
            '2016': getLength('tep', 2016),
            '2017': getLength('tep', 2017),
            '2018': getLength('tep', 2018),
            '2019': getLength('tep', 2019),
            '2020': getLength('tep', 2020)
          }
          sigevadata.demLength = {
            '2015': getLength('dem', 2015),
            '2016': getLength('dem', 2016),
            '2017': getLength('dem', 2017),
            '2018': getLength('dem', 2018),
            '2019': getLength('dem', 2019),
            '2020': getLength('dem', 2020)
          }
          this.sigevadata = sigevadata
          // console.log(
          //   `
          //   CUIL: ${this.sigevadata.persona[0].cuil}
          //   Persona: ${this.sigevadata.persona[0].apellido}, ${this.sigevadata.persona[0].nombre}
          //   Email: ${this.sigevadata.persona[0].email}`)
        })
        .catch(err => console.log(`getSigevaData Error: ${err}`))
    }
  }
}
</script>
<style>
body {
  font-family: "Lato";
}
.application {
  font-family: "Lato";
}
.chart-container {
  font-family: "Lato";
}
</style>