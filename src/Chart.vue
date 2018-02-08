<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex sm8>
        <v-card height="100%" id="leftcard">
          <v-card-title class="pb-4" primary-title>
            <div>
              <h1 class="headline">{{ autor }}</h1>
                <h2 class="subheading">Escuela de Humanidades</h2>
                <h2 class="subheading">Artículos publicados: {{ cantArticulos }}</h2>
                <!-- <h2 class="subheading">Datos de SIGEVA-UNSAM</h2> -->
            </div>
          </v-card-title>
          <v-card-media class="pa-3" contain>
            <column-chart :stacked="true" :data="stacked.data" :colors="stacked.colors"></column-chart>
          </v-card-media>
        </v-card>
      </v-flex>
      <v-flex sm4>
        <v-card class="pa-3" height="100%">
          <v-card-media class="pa-3 d-block" contain id="perchart"></v-card-media>
          <v-divider></v-divider>
          <v-card-media class="pl-3 pr-3 d-block" id="piechart" contain></v-card-media>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import Chart from 'frappe-charts/dist/frappe-charts.min.esm'
export default {
  props: ['sigevaData'],
  data () {
    return {
      stacked: {
        data: [
          {name: 'Artículos', data: {'2014': 3, '2015': 3, '2016': 2, '2017': 1}},
          {name: 'Libros', data: {'2014': 3, '2015': 3, '2016': 2, '2017': 1}},
          {name: 'Capítulos de libro', data: {'2014': 3, '2015': 3, '2016': 2, '2017': 1}},
          {name: 'Trabajos en eventos', data: {'2014': 3, '2015': 3, '2016': 2, '2017': 1}},
          {name: 'Otras producciones científicas', data: {'2014': 3, '2015': 3, '2016': 2, '2017': 1}}
        ],
        colors: ['#222831', '#003459', '#028090', '#02C39A', '#FCE38A']
      },
      autor: 'Ricardo Ibarlucía',
      cantArticulos: 9,
      lineData: {
        labels: ['2014', '2015', '2016', '2017'],
        datasets: [
          {
            values: [3, 3, 2, 1]
          },
          {
            values: [2, 4, 1, 7]
          }
        ]
      },
      perData: {
        labels: ['Filosofía, Ética y Religión', 'Lengua y Literatura'],
        datasets: [
          {
            values: [8, 1]
          }
        ]
      },
      pieData: {
        labels: ['Tópicos', 'Eadem utraque Europa', 'Revista latinoamericana de Filosofía', 'El ángel exterminador', 'Aisthesis. Pratiche, linguaggi e saperi dell?estetico', 'Lapsus Calami', 'Anuario del Instituto de Investigaciones sobre el Patrimonio Cultural'],
        datasets: [
          {
            values: [1, 2, 1, 1, 2, 1, 1]
          }
        ]
      }
    }
  },
  mounted () {
    this.setChart()
  },
  methods: {
    setChart () {
      // console.log(this.sigevaData)
      // const lineChart = new Chart({
      //   parent: '#linechart', // or a DOM element
      //   data: this.lineData,
      //   type: 'line', // or 'line', 'scatter', 'pie', 'percentage'
      //   region_fill: 1,
      //   // height: 250,
      //   colors: ['blue'],
      //   format_tooltip_x: d => (d + '').toUpperCase(),
      //   format_tooltip_y: d => `${d} Artículos`,
      //   title: 'Artículos publicados'
      //
      // })
      const perChart = new Chart({
        parent: '#perchart', // or a DOM element
        data: this.perData,
        type: 'percentage', // or 'line', 'scatter', 'pie', 'percentage'
        // height: document.getElementById('leftcard').offsetHeight / 2 - 200,
        title: 'Área de conocimiento'
        // format_tooltip_x: d => (d + '').toUpperCase(),
        // format_tooltip_y: d => d
      })
      const pieChart = new Chart({
        parent: '#piechart', // or a DOM element
        data: this.pieData,
        type: 'percentage', // or 'line', 'scatter', 'pie', 'percentage'
        height: document.getElementById('leftcard').offsetHeight / 4,
        // height: 150,
        title: 'Revistas'
        // format_tooltip_x: d => (d + '').toUpperCase(),
        // format_tooltip_y: d => d
      })
    }
  }
}

</script>
<style>
/* .text-muted {
  font-size: 8px;
} */
.graph-stats-container {
  flex-direction: column;
  justify-content: flex-end;
}
.chart-container {
  display: flex;
  flex-direction: column;
}
/* .frappe-chart {
  justify-items: center;
} */
</style>