<template>
  <v-card flat>
    <v-card-text>
      <column-chart
        :library="stacked.options"
        :stacked="true"
        :data="stacked.data"
        :colors="stacked.colors"
        legend="right"
      />
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: { sigevadata: { type: Object, default: () => {} } },
  data () {
    return {
      stacked: {
        data: [
          { name: this.$t('articulos'), data: this.sigevadata.articulosLength },
          { name: this.$t('libros'), data: this.sigevadata.librosLength },
          { name: this.$t('capitulos'), data: this.sigevadata.pdlLength },
          { name: this.$t('eventos'), data: this.sigevadata.tepLength },
          { name: this.$t('demas'), data: this.sigevadata.demLength }
        ],
        colors: [
          'rgba(37, 47, 48, 0.80)',
          'rgba(49, 86, 89, 0.80)',
          'rgba(41, 119, 159, 0.80)',
          'rgba(187, 171, 121, 0.80)',
          'rgba(198, 224, 255, 0.80)'
        ],
        options: {
          scales:
          {
            yAxes:
            [{
              ticks: {
                min: 0,
                stepSize: 1
              }
            }]
          }
        }
      }
    }
  }
}
</script>
