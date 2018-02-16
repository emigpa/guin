<template>
  <v-container fluid wrap align-center justify-center>
    <v-card id="leftcard">
      <v-card-title class="pb-4" primary-title>
          <h1 class="subheading">PRODUCCIÓN CIENTÍFICA</h1>
      </v-card-title>
          <v-card-media class="pa-3" contain>
            <column-chart :stacked="true" :data="stacked.data" :colors="stacked.colors" legend="right"></column-chart>
          </v-card-media>
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
        // colors: ['rgba(76, 175, 80, 0.8)', 'rgba(244, 67, 54, 0.8)', 'rgba(156, 39, 176, 0.8)', 'rgba(33, 150, 244, 0.8)', 'rgba(255, 235, 59, 0.8)']
        // colors: ['rgba(34, 40, 48, 0.8)', 'rgba(0, 52, 89, 0.8)', 'rgba(2, 128, 144, 0.8)', 'rgba(2, 195, 154, 0.8)', 'rgba(252, 228, 139, 0.8)']
        // colors: ["rgba(62, 149, 205, 0.8)", "rgba(142, 94, 162, 0.8)","rgba(60, 186, 159, 0.8)","rgba(232, 195, 184, 0.8)","rgba(196, 88, 81, 0.8)"]
        colors: ["rgba(37, 47, 48, 0.80)", "rgba(49, 86, 89, 0.80)","rgba(41, 119, 159, 0.80)","rgba(187, 171, 121, 0.80)","rgba(198, 224, 255, 0.80)"]
      },
      autor: 'Ricardo Ibarlucía',
      cantArticulos: 9
    }
  }
}

</script>
<style>
</style>