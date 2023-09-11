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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              ><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
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
        .get('http://sinos.unsam.edu.ar/sigeva/api/guin', { params: { cuil: this.querycuil } })
        .then(res => {
          const sigevadata = res.data
          const getLength = (item, anio) =>
            sigevadata[item].filter(x => x.anio === anio).length
          sigevadata.articulosLength = {
            // 2016: getLength('articulos', 2016),
            // 2017: getLength('articulos', 2017),
            // 2018: getLength('articulos', 2018),
            2019: getLength('articulos', 2019),
            2020: getLength('articulos', 2020),
            2021: getLength('articulos', 2021),
            2022: getLength('articulos', 2022),
            2023: getLength('articulos', 2023)
          }
          sigevadata.librosLength = {
            // 2016: getLength('libros', 2016),
            // 2017: getLength('libros', 2017),
            // 2018: getLength('libros', 2018),
            2019: getLength('libros', 2019),
            2020: getLength('libros', 2020),
            2021: getLength('libros', 2021),
            2022: getLength('libros', 2022),
            2023: getLength('libros', 2023)
          }
          sigevadata.pdlLength = {
            // 2016: getLength('pdl', 2016),
            // 2017: getLength('pdl', 2017),
            // 2018: getLength('pdl', 2018),
            2019: getLength('pdl', 2019),
            2020: getLength('pdl', 2020),
            2021: getLength('pdl', 2021),
            2022: getLength('pdl', 2022),
            2023: getLength('pdl', 2023)
          }
          sigevadata.tepLength = {
            // 2016: getLength('tep', 2016),
            // 2017: getLength('tep', 2017),
            // 2018: getLength('tep', 2018),
            2019: getLength('tep', 2019),
            2020: getLength('tep', 2020),
            2021: getLength('tep', 2021),
            2022: getLength('tep', 2022),
            2023: getLength('tep', 2023)
          }
          sigevadata.demLength = {
            // 2016: getLength('dem', 2016),
            // 2017: getLength('dem', 2017),
            // 2018: getLength('dem', 2018),
            2019: getLength('dem', 2019),
            2020: getLength('dem', 2020),
            2021: getLength('dem', 2021),
            2022: getLength('dem', 2022),
            2023: getLength('dem', 2023)
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
