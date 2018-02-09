<template>
  <v-container fluid>
    <v-card height="100%" id="leftcard">
      <v-card-title class="pb-4" primary-title>
        <div>
          <h1 class="headline">{{ autor }}</h1>
          <h2 class="subheading">Escuela de Humanidades</h2>
          <h2 class="subheading">Artículos publicados: {{ cantArticulos }}</h2>
          <!-- <h2 class="subheading">Datos de SIGEVA-UNSAM</h2> -->
        </div>
      </v-card-title>
      <v-layout row justify-space-around>
        <v-flex xl8 lg8 md10 sm10 xs12>
      <v-card-media class="pa-3" contain>
        <column-chart :stacked="true" :data="stacked.data" :colors="stacked.colors"></column-chart>
      </v-card-media>
    </v-flex>
  </v-layout>
    </v-card>
  </v-container>
</template>
<script>
export default {
  props: ['sigevaData'],
  data () {
    return {
      stacked: {
        data: [
          {name: 'Artículos', data: {'2014': 3, '2015': 3, '2016': 2, '2017': 1}},
          {name: 'Libros', data: {'2014': 2, '2015': 2, '2016': 1, '2017': 2}},
          {name: 'Capítulos de libro', data: {'2014': 2, '2015': 0, '2016': 1, '2017': 1}},
          {name: 'Trabajos en eventos', data: {'2014': 1, '2015': 1, '2016': 1, '2017': 1}},
          {name: 'Otras producciones científicas', data: {'2014': 5, '2015': 4, '2016': 4, '2017': 1}}
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
  }
}

</script>
<style>
</style>