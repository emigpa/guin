<template>
  <v-container fluid>
  <v-data-table
      :headers="headers"
      :items="items"
      :pagination.sync="pagination"
      class="elevation-3"
      item-key="titulo"
      hide-actions
    >
    <template slot="items" slot-scope="props">
      <tr @click="props.expanded = !props.expanded">
        <td>{{ props.item.titulo }}</td>
        <td>{{ props.item.autores }}</td>
        <td>{{ props.item.editorial }}</td>
        <td>{{ props.item.anio }}</td>
      </tr>
    </template>
    <template slot="no-data">
      <v-alert :value="true" color="error" icon="warning">
        No se encontraron Artículos en el banco de datos de SIGEVA-UNSAM.
        <br>
        Contáctese con sigevaconsultas@unsam.edu.ar.
      </v-alert>
    </template>
    <template slot="expand" slot-scope="props">
      <v-container grid-list-sm id="listdetail">
        <v-card flat class="blue-grey lighten-4">
          <v-layout row wrap>
            <v-flex xs6>
              <v-card-text>Revista: <em>{{ props.item.revista }}</em></br> Pais: <em>{{ props.item.pais }}</em></br> Área de conocimiento: <em>{{ props.item.areadc }}</em>
              </v-card-text>
            </v-flex>
            <v-flex xs6>
              <v-card-text>ISSN: {{ props.item.issn }}</br> URL: {{ props.item.url }}</br> DOI: {{ props.item.doi }}
              </v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </v-container>
    </template>
  </v-data-table>
  <div class="text-xs-center pt-2">
      <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
    </div>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      search: '',
      pagination: {},
      selected: [],
      headers: [
        {
          text: 'Título',
          align: 'left',
          sortable: false,
          value: 'titulo'
        },
        {
          text: 'Autores',
          align: 'left',
          sortable: false,
          value: 'autores'
        },
        {
          text: 'Editorial',
          align: 'left',
          sortable: true,
          value: 'editorial'
        },
        {
          text: 'Año de publicación',
          align: 'left',
          sortable: true,
          value: 'anio'
        }
      ],
      items: [
        {
          titulo: `The Organization of Pessimism: Profane Illumination and Anthropological Materialism in Walter Benjamin`,
          autores: 'Ibarlucía, Ricardo',
          anio: '2017',
          editorial: 'Firenze University Press',
          issn: '2035-8466',
          revista: 'Aisthesis. Pratiche, linguaggi e saperi dell?estetico',
          pais: 'Italia',
          url: 'http://www.fupress.net/index.php/aisthesis',
          doi: '',
          areadc: 'Filosofía, Ética y Religión'
        },
        {
          titulo: `Benjamin, Desnos et la place d'Atget dans l'histoire de la photographie`,
          autores: 'Ibarlucía, Ricardo',
          anio: '2016',
          editorial: 'Firenze University Press',
          issn: '',
          revista: 'Aisthesis. Pratiche, linguaggi e saperi dell?estetico',
          pais: 'Argentina',
          url: 'http://www.fupress.net/index.php/aisthesis/index',
          doi: '',
          areadc: 'Filosofía, Ética y Religión'
        },
        {
          titulo: `Breve historia de una frase. De Michelet a Benjamin`,
          autores: 'Ibarlucía, Ricardo',
          anio: '2016',
          editorial: 'Miño & Dávila',
          issn: '',
          revista: 'Eadem utraque Europa',
          pais: 'Argentina',
          url: '',
          doi: '',
          areadc: 'Filosofía, Ética y Religión'
        },
        {
          titulo: `La escena del crimen. Atget y la fotografía surrealista`,
          autores: 'Ibarlucía, Ricardo',
          anio: '2015',
          editorial: 'UNSAM Edita',
          issn: '2362-6070',
          revista: 'Anuario del Instituto de Investigaciones sobre el Patrimonio Cultural',
          pais: 'Argentina',
          url: '',
          doi: '',
          areadc: 'Filosofía, Ética y Religión'
        },
        {
          titulo: `Luis Juan Guerrero. Panorama de la estética clásico-romántica alemana`,
          autores: 'Guerrero, Luis Juan (Autor);  Ibarlucía, R. (Estudio preliminar, apéndice, edición y notas)',
          anio: '2015',
          editorial: 'Miño & Dávila',
          issn: '1885-7221',
          revista: 'Eadem utraque Europa',
          pais: 'Argentina',
          url: '',
          doi: '',
          areadc: 'Filosofía, Ética y Religión'
        },
        {
          titulo: `Sobre Das Unheimliche`,
          autores: 'Ibarlucía, Ricardo',
          anio: '2015',
          editorial: 'Institución Psicoanalítica Mayéutica',
          issn: '1853-0680',
          revista: 'Lapsus Calami',
          pais: 'Argentina',
          url: '',
          doi: '',
          areadc: 'Filosofía, Ética y Religión'
        },
        {
          titulo: `Werner Herzog. Diez poemas`,
          autores: 'Werner Herzog (autor);  Ibarlucía, Ricardo (Introducción y traducción)',
          anio: '2014',
          editorial: 'El ángel exterminador',
          issn: '1850-6941',
          revista: 'El ángel exterminador',
          pais: 'Argentina',
          url: 'http://elangelexterminador.com.ar/articulosnro.23/poemasherzog.html',
          doi: '',
          areadc: 'Lengua y Literatura'
        },
        {
          titulo: `La autonomía del arte en Benjamin y Heidegger: a propósito de la interpretación de Burkhardt Lindner`,
          autores: 'Ibarlucía, Ricardo',
          anio: '2014',
          editorial: 'Centro de Investigaciones Filosóficas',
          issn: '1852-7353',
          revista: 'Revista latinoamericana de Filosofía',
          pais: 'Argentina',
          url: 'http://elangelexterminador.com.ar/articulosnro.23/poemasherzog.html',
          doi: '',
          areadc: 'Filosofía, Ética y Religión'
        },
        {
          titulo: `La filosofía de la Revolución francesa en un curso de Luis Juan Guerrero de 1939`,
          autores: 'Ibarlucía, Ricardo',
          anio: '2014',
          editorial: 'Asociación Revistas de Filosofía de Santa Fe- UNL',
          issn: '1666-485X',
          revista: 'Tópicos',
          pais: 'Argentina',
          url: 'http://www.redalyc.org/pdf/288/28831681001.pdf',
          doi: '',
          areadc: 'Filosofía, Ética y Religión'
        }
      ]
    }
  },
  computed: {
    pages () {
      return this.items.length > 0 ? Math.ceil(this.items.length / 5) : 0
    }
  }
}

</script>
<style>
.datatable__expand-content {
  background-color: #CFD8DC;
}
</style>