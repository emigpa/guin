<template>
  <v-container fluid>
    <v-card>
    <v-card-title>
      PRODUCCIÓN CIENTÍFICA
      <v-spacer></v-spacer>
      <v-btn-toggle v-model="button">
        <v-layout row justify-space-around>
          <v-flex sm12 xs12>
        <v-btn flat small>
          Artículos
        </v-btn>
        <v-btn flat small>
          Libros
        </v-btn>
        <v-btn flat small>
          Capítulos de libro
        </v-btn>
        <v-btn flat small>
          Trabajos en eventos
        </v-btn>
        <v-btn flat small>
          Otras producciones científicas
        </v-btn>
      </v-flex>
      </v-layout>
      </v-btn-toggle>
  </v-card-title>
    <v-data-table
      v-if="button === 0"
      :headers="headers"
      :items="sigevaData.articulos"
      :pagination.sync="pagination"
      class="elevation-3"
      item-key="titulo"
      hide-actions
    >
    <template slot="items" slot-scope="props">
      <tr @click="props.expanded = !props.expanded">
        <v-icon v-if="!props.expanded">expand_more</v-icon>
        <v-icon v-if="props.expanded">expand_less</v-icon>
        <td>{{ props.item.titulo }}</td>
        <td>{{ props.item.autores }}</td>
        <td>{{ props.item.editorial }}</td>
        <td>{{ props.item.anio }}</td>
      </tr>
    </template>
    <!-- <template slot="no-data">
      <v-alert :value="true" color="error" icon="warning">
        No se encontraron Artículos en el banco de datos de SIGEVA-UNSAM.
        <br>
        Contáctese con sigevaconsultas@unsam.edu.ar.
      </v-alert>
    </template> -->
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
    <v-data-table
    v-if="button === 1"
      :headers="headers"
      :items="sigevaData.libros"
      :pagination.sync="pagination"
      class="elevation-3"
      item-key="titulo"
      hide-actions
    >
    <template slot="items" slot-scope="props">
      <tr @click="props.expanded = !props.expanded">
        <v-icon v-if="!props.expanded">expand_more</v-icon>
        <v-icon v-if="props.expanded">expand_less</v-icon>
        <td>{{ props.item.titulo }}</td>
        <td>{{ props.item.autores }}</td>
        <td>{{ props.item.editorial }}</td>
        <td>{{ props.item.anio }}</td>
      </tr>
    </template>
    <template slot="expand" slot-scope="props">
      <v-container grid-list-sm id="listdetail">
        <v-card flat class="blue-grey lighten-4">
          <v-layout row wrap>
            <v-flex xs6>
              <v-card-text>Pais: <em>{{ props.item.pais }}</em></br> Área de conocimiento: <em>{{ props.item.areadc }}</em>
              </v-card-text>
            </v-flex>
            <v-flex xs6>
              <v-card-text>ISBN: {{ props.item.isbn }}</br> URL: {{ props.item.url }}</v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </v-container>
    </template>
    </v-data-table>
    <v-data-table
    v-if="button === 2"
      :headers="headers"
      :items="sigevaData.pdl"
      :pagination.sync="pagination"
      class="elevation-3"
      item-key="titulo"
      hide-actions
    >
    <template slot="items" slot-scope="props">
      <tr @click="props.expanded = !props.expanded">
        <v-icon v-if="!props.expanded">expand_more</v-icon>
        <v-icon v-if="props.expanded">expand_less</v-icon>
        <td>{{ props.item.titulo }}</td>
        <td>{{ props.item.autores }}</td>
        <td>{{ props.item.editorial }}</td>
        <td>{{ props.item.anio }}</td>
      </tr>
    </template>
    <template slot="expand" slot-scope="props">
      <v-container grid-list-sm id="listdetail">
        <v-card flat class="blue-grey lighten-4">
          <v-layout row wrap>
            <v-flex xs6>
              <v-card-text>Pais: <em>{{ props.item.pais }}</em></br> Área de conocimiento: <em>{{ props.item.areadc }}</em>
              </v-card-text>
            </v-flex>
            <v-flex xs6>
              <v-card-text>ISBN: {{ props.item.isbn }}</br> URL: {{ props.item.url }}</v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </v-container>
    </template>
    </v-data-table>
    <v-data-table
    v-if="button === 3"
      :headers="headers"
      :items="sigevaData.tep"
      :pagination.sync="pagination"
      class="elevation-3"
      item-key="titulo"
      hide-actions
    >
    <template slot="items" slot-scope="props">
      <tr @click="props.expanded = !props.expanded">
        <v-icon v-if="!props.expanded">expand_more</v-icon>
        <v-icon v-if="props.expanded">expand_less</v-icon>
        <td>{{ props.item.titulo }}</td>
        <td>{{ props.item.autores }}</td>
        <td>{{ props.item.editorial }}</td>
        <td>{{ props.item.anio }}</td>
      </tr>
    </template>
    <template slot="expand" slot-scope="props">
      <v-container grid-list-sm id="listdetail">
        <v-card flat class="blue-grey lighten-4">
          <v-layout row wrap>
            <v-flex xs6>
              <v-card-text>Pais: <em>{{ props.item.pais }}</em></br> Área de conocimiento: <em>{{ props.item.areadc }}</em>
              </v-card-text>
            </v-flex>
            <v-flex xs6>
              <v-card-text>ISBN: {{ props.item.isbn }}</br> URL: {{ props.item.url }}</v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </v-container>
    </template>
    </v-data-table>
    <v-data-table
    v-if="button === 4"
      :headers="headers"
      :items="sigevaData.dem"
      :pagination.sync="pagination"
      class="elevation-3"
      item-key="titulo"
      hide-actions
    >
    <template slot="items" slot-scope="props">
      <tr @click="props.expanded = !props.expanded">
        <v-icon v-if="!props.expanded">expand_more</v-icon>
        <v-icon v-if="props.expanded">expand_less</v-icon>
        <td>{{ props.item.titulo }}</td>
        <td>{{ props.item.autores }}</td>
        <td>{{ props.item.editorial }}</td>
        <td>{{ props.item.anio }}</td>
      </tr>
    </template>
    <template slot="expand" slot-scope="props">
      <v-container grid-list-sm id="listdetail">
        <v-card flat class="blue-grey lighten-4">
          <v-layout row wrap>
            <v-flex xs6>
              <v-card-text>Pais: <em>{{ props.item.pais }}</em></br> Área de conocimiento: <em>{{ props.item.areadc }}</em>
              </v-card-text>
            </v-flex>
            <v-flex xs6>
              <v-card-text>ISBN: {{ props.item.isbn }}</br> URL: {{ props.item.url }}</v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </v-container>
    </template>
    </v-data-table>
  <div class="text-xs-center pt-2">
      <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
  </div>
    </v-card>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      button: 0,
      pagination: {},
      selected: [],
      headers: [
        {
          text: '',
          align: 'left',
          sortable: false,
          value: ''
        },
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
      sigevaData: {
        articulos: [
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
      ],
      libros: [
        { titulo: `Qué es la belleza y otros ensayos`,
          autores: 'Guerrero, Luis Juan (Autor);  Ibarlucía, Ricardo (estudio preliminar, seleccíon, notas y apéndice)',
          anio: '2017',
          editorial: 'Editorial Biblos, Colección Pasajes (Serie Mayor)',
          isbn: '978-987-691-561-8',
          pais: 'Argentina',
          url: '',
          areadc: 'Filosofía, Ética y Religión'
        },
        { titulo: `Belleza sin aura. El surrealismo y la teoría materialista del arte de Walter Benjamin`,
          autores: 'Ibarlucía, Ricardo',
          anio: '2017',
          editorial: 'Fondo de Cultura Económica',
          isbn: '950-557-692-7',
          pais: 'Argentina',
          url: '',
          areadc: 'Filosofía, Ética y Religión'
        },
        { titulo: `Hechos y valores en filosofía teórica, filosofía práctica y filosofía del arte`,
          autores: 'Ibarlucía, Ricardo;  Perez, Diana',
          anio: '2016',
          editorial: 'Centro de Investigaciones Filosóficas/Sociedad Argentina de Análisis Filosófico',
          isbn: '978-987-29834-4-4',
          pais: 'Argentina',
          url: '',
          areadc: 'Filosofía, Ética y Religión'
        },
        { titulo: `Críticas profanas`,
          autores: 'Canal Feijóo, Bernardo (autor);  Ibarlucía, Ricardo (estudio preliminar, selección de textos y notas)1,2;  Fabbian, Gisela (estudio preliminar, selección de textos y notas)',
          anio: '2015',
          editorial: '17grises',
          isbn: '978-987-1724-14-7',
          pais: 'Argentina',
          url: '',
          areadc: 'Filosofía, Ética y Religión'
        },
        { titulo: `Qué es la belleza, seguido de Escenas de la vida estética y Torso de la vida estética`,
          autores: 'Guerrero, Luis Juan (Autor);  Ibarlucía, Ricardo (prólogo y edición)',
          anio: '2015',
          editorial: 'Biblos',
          isbn: '978-987-1501-18-2',
          pais: 'Argentina',
          url: '',
          areadc: 'Filosofía, Ética y Religión'
        },
        { titulo: `Hechos y valores`,
          autores: 'Pérez, Diana Inés (comp.)1;  Ibarlucía, Ricardo (comp.)',
          anio: '2015',
          editorial: 'Centro de Investigaciones Filosóficas/Sociedad Argentina de Análisis Filosófico',
          isbn: '978-987-29834-2-0',
          pais: 'Argentina',
          url: '',
          areadc: 'Filosofía, Ética y Religión'
        },
        { titulo: `Exterior Arte. Estética y formas de vida`,
          autores: 'Pérez, Diana Inés (comp.)1;  Ibarlucía, Ricardo (comp.)',
          anio: '2014',
          editorial: 'Biblos',
          isbn: '950-786-447-4',
          pais: 'Argentina',
          url: '',
          areadc: 'Filosofía, Ética y Religión'
        }
      ],
      pdl: [
        {
          titulo: `Exterior Arte. Estética y formas de vida`,
          autores: 'Pérez, Diana Inés (comp.)1;  Ibarlucía, Ricardo (comp.)',
          anio: '2014',
          editorial: 'Biblos',
          isbn: '950-786-447-4',
          pais: 'Argentina',
          url: '',
          areadc: 'Filosofía, Ética y Religión'
        }
      ],
      tep: [
        {
          titulo: `Exterior Arte. Estética y formas de vida`,
          autores: 'Pérez, Diana Inés (comp.)1;  Ibarlucía, Ricardo (comp.)',
          anio: '2014',
          editorial: 'Biblos',
          isbn: '950-786-447-4',
          pais: 'Argentina',
          url: '',
          areadc: 'Filosofía, Ética y Religión'
        }
      ],
      dem: [
        {
          titulo: `Exterior Arte. Estética y formas de vida`,
          autores: 'Pérez, Diana Inés (comp.)1;  Ibarlucía, Ricardo (comp.)',
          anio: '2014',
          editorial: 'Biblos',
          isbn: '950-786-447-4',
          pais: 'Argentina',
          url: '',
          areadc: 'Filosofía, Ética y Religión'
          }
        ]
      }
    }
  },
  computed: {
    pages () {
      return this.sigevaData.articulos.length > 0 ? Math.ceil(this.sigevaData.articulos.length / 5) : 0
    }
  }
}

</script>
<style>
.datatable__expand-content {
  background-color: #CFD8DC;
}
</style>