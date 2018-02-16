<template>
  <v-container wrap row>
    <v-card height="100%" id="leftcard">
      <v-card-title class="pb-4" primary-title>
        <div>
          <h1 class="headline">{{ autor }}</h1>
          <h2 class="subheading">Escuela de Humanidades</h2>
          <!-- <h2 class="subheading">Artículos publicados: {{ cantArticulos }}</h2> -->
          <!-- <h2 class="subheading">Datos de SIGEVA-UNSAM</h2> -->
        </div>
      </v-card-title>
      <v-layout justify-center>
        <v-flex xl6 lg6 md8 sm8 xs10>
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
          {name: 'Artículos', data: this.$store.state.articulosLength},
          {name: 'Libros', data: this.$store.state.librosLength},
          {name: 'Capítulos de libro', data: this.$store.state.pdlLength},
          {name: 'Trabajos en eventos', data: this.$store.state.tepLength},
          {name: 'Otras producciones científicas', data: this.$store.state.demLength}
        ],
        colors: ['#4CAF50', '#F44336', '#9C27B0', '#2196F3', '#FFEB3B']
        // colors: ['#222831', '#003459', '#028090', '#02C39A', '#FCE38A']
      },
      autor: 'Ricardo Ibarlucía',
      cantArticulos: 9
    }
  }
}

</script>
<style>
</style>