<template>
  <v-app v-if="sigevadata !== null">
    <v-container
      fluid
    >
      <v-main>
        <v-card
          flat
        >
          <v-card-title>
            {{ $t('publicaciones') }}
          </v-card-title>
          <v-card-text>
            <Chart
              :sigevadata="sigevadata"
            />
            <GuiaTabla
              :sigevadata="sigevadata"
            />
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <a
              href="https://github.com/emigpa/guin"
              target="_blank"
            >
              <img
                alt="github.com/emigpa/guin"
                src="http://sinos.unsam.edu.ar/guin/github.png"
              >
            </a>
          </v-card-actions>
        </v-card>
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
import axios from 'axios'
import GuiaTabla from './components/GuiaTabla'
import Chart from './components/Chart'
export default {
  name: 'App',
  components: {
    GuiaTabla,
    Chart
  },
  data () {
    return {
      sigevadata: null,
      querycuil: '0'
    }
  },
  computed: {
    lang () {
      const parentUrlLang = document.referrer.search('investigadores.unsam.edu.ar/eng')
      return parentUrlLang !== -1 ? 'en' : 'es'
    }
  },
  mounted () {
    this.setLang()
    this.setCuil()
    this.getSigevaData()
  },
  methods: {
    setLang () {
      this.$i18n.locale = this.lang
    },
    setCuil () {
      const params = new URLSearchParams(window.location.search)
      const cuil = params.get('cuil')
      this.querycuil = cuil
    },
    getSigevaData () {
      axios
        .get('http://sinos.unsam.edu.ar/api/guin', { params: { cuil: this.querycuil } })
        .then(res => {
          const sigevadata = res.data
          const getLength = (item, anio) =>
            sigevadata[item].filter(x => x.anio === anio).length
          sigevadata.articulosLength = {
            2016: getLength('articulos', 2016),
            2017: getLength('articulos', 2017),
            2018: getLength('articulos', 2018),
            2019: getLength('articulos', 2019),
            2020: getLength('articulos', 2020),
            2021: getLength('articulos', 2021)
          }
          sigevadata.librosLength = {
            2016: getLength('libros', 2016),
            2017: getLength('libros', 2017),
            2018: getLength('libros', 2018),
            2019: getLength('libros', 2019),
            2020: getLength('libros', 2020),
            2021: getLength('libros', 2021)
          }
          sigevadata.pdlLength = {
            2016: getLength('pdl', 2016),
            2017: getLength('pdl', 2017),
            2018: getLength('pdl', 2018),
            2019: getLength('pdl', 2019),
            2020: getLength('pdl', 2020),
            2021: getLength('pdl', 2021)
          }
          sigevadata.tepLength = {
            2016: getLength('tep', 2016),
            2017: getLength('tep', 2017),
            2018: getLength('tep', 2018),
            2019: getLength('tep', 2019),
            2020: getLength('tep', 2020),
            2021: getLength('tep', 2021)
          }
          sigevadata.demLength = {
            2016: getLength('dem', 2016),
            2017: getLength('dem', 2017),
            2018: getLength('dem', 2018),
            2019: getLength('dem', 2019),
            2020: getLength('dem', 2020),
            2021: getLength('dem', 2021)
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
