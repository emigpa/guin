<template>
  <v-container fluid wrap align-center justify-center>
    <v-card>
      <v-card-media class="pl-5 pr-5 pb-3 pt-3" contain>
        <column-chart :library="stacked.options" :stacked="true" :data="stacked.data" :colors="stacked.colors" legend="right"></column-chart>
      </v-card-media>
    </v-card>
  </v-container>
</template>
<script>
export default {
  props: ['sigevadata'],
  data () {
    return {
      stacked: {
        data: [
          {name: 'Artículos', data: this.sigevadata.articulosLength},
          {name: 'Libros', data: this.sigevadata.librosLength},
          {name: 'Capítulos de libro', data: this.sigevadata.pdlLength},
          {name: 'Trabajos en eventos', data: this.sigevadata.tepLength},
          {name: 'Otras producciones científicas', data: this.sigevadata.demLength}
        ],
        colors: ["rgba(37, 47, 48, 0.80)", "rgba(49, 86, 89, 0.80)","rgba(41, 119, 159, 0.80)","rgba(187, 171, 121, 0.80)","rgba(198, 224, 255, 0.80)"],
        options: { scales:
          { yAxes:
            [{ ticks: {
              min: 0,
              stepSize: 1 }
            }]
          }
        }
      }
    }
  }
}

</script>
