<template>
  <v-container fluid wrap align-center justify-center>
    <v-card>
    <v-card-title>
      <v-spacer></v-spacer>
      <v-btn-toggle v-model="button">
        <v-layout row justify-space-around>
          <v-flex sm12 xs12>
        <v-btn flat small @click="resetPage">
          Artículos
        </v-btn>
        <v-btn flat small @click="resetPage">
          Libros
        </v-btn>
        <v-btn flat small @click="resetPage">
          Capítulos de libro
        </v-btn>
        <v-btn flat small @click="resetPage">
          Trabajos en eventos
        </v-btn>
        <v-btn flat small @click="resetPage">
          Otras producciones científicas
        </v-btn>
      </v-flex>
      </v-layout>
      </v-btn-toggle>
  </v-card-title>
    <v-data-table
      v-if="button === 0"
      :headers="headers"
      :items="this.sigevadata.articulos"
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
              <v-card-text>Revista: <em>{{ props.item.revista }}</em></br> País: <em>{{ props.item.pais }}</em></br> Área de conocimiento: <em>{{ props.item.areadc }}</em>
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
    <template slot="no-data">
      <v-alert :value="true" color="secondary" icon="warning">
        No se encontraron artículos publicados en el período 2014-2017.
      </v-alert>
    </template>
    </v-data-table>
    <v-data-table
    v-if="button === 1"
      :headers="headers"
      :items="this.sigevadata.libros"
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
              <v-card-text>País: <em>{{ props.item.pais }}</em></br> Área de conocimiento: <em>{{ props.item.areadc }}</em>
              </v-card-text>
            </v-flex>
            <v-flex xs6>
              <v-card-text>ISBN: {{ props.item.isbn }}</br> URL: {{ props.item.url }}</v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </v-container>
    </template>
    <template slot="no-data">
      <v-alert :value="true" color="secondary" icon="warning">
        No se encontraron libros publicados en el período 2014-2017.
      </v-alert>
    </template>
    </v-data-table>
    <v-data-table
    v-if="button === 2"
      :headers="headers"
      :items="this.sigevadata.pdl"
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
              <v-card-text>Libro: <em>{{ props.item.libro }}</em></br>País: <em>{{ props.item.pais }}</em></br> Área de conocimiento: <em>{{ props.item.areadc }}</em>
              </v-card-text>
            </v-flex>
            <v-flex xs6>
              <v-card-text>ISBN: {{ props.item.isbn }}</br> URL: {{ props.item.url }}</v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </v-container>
    </template>
    <template slot="no-data">
      <v-alert :value="true" color="secondary" icon="warning">
        No se encontraron capítulos de libro publicados en el período 2014-2017.
      </v-alert>
    </template>
    </v-data-table>
    <v-data-table
    v-if="button === 3"
      :headers="headers"
      :items="this.sigevadata.tep"
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
              <v-card-text>País: <em>{{ props.item.pais }}</em></br> Área de conocimiento: <em>{{ props.item.areadc }}</em>
              </v-card-text>
            </v-flex>
            <v-flex xs6>
              <v-card-text>ISSN: {{ props.item.issn }}</br> ISBN: {{ props.item.isbn }}</br> URL: {{ props.item.url }}</v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </v-container>
    </template>
    <template slot="no-data">
      <v-alert :value="true" color="secondary" icon="warning">
        No se encontraron trabajos en eventos publicados en el período 2014-2017.
      </v-alert>
    </template>
    </v-data-table>
    <v-data-table
    v-if="button === 4"
      :headers="headers"
      :items="this.sigevadata.dem"
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
              <v-card-text>País: <em>{{ props.item.pais }}</em></br> Área de conocimiento: <em>{{ props.item.areadc }}</em>
              </v-card-text>
            </v-flex>
            <v-flex xs6>
              <v-card-text>ISSN: {{ props.item.issn }}</br> ISBN: {{ props.item.isbn }}</br> URL: {{ props.item.url }}</v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </v-container>
    </template>
    <template slot="no-data">
      <v-alert :value="true" color="secondary" icon="warning">
        No se encontraron otras producciones científicas publicadas en el período 2014-2017.
      </v-alert>
    </template>
    </v-data-table>
  <div class="text-xs-center pt-2">
      <v-pagination v-model="pagination.page" :length="pages" :value="1"></v-pagination>
  </div>
    </v-card>
  </v-container>
</template>
<script>
export default {
  props: ['sigevadata'],
  data () {
    return {
      button: 0,
      currentpage: 1,
      pagination: {},
      selected: ['articulos', 'libros', 'pdl', 'tep', 'dem'],
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
      ]
    }
  },
  computed: {
    pages () {
      return this.sigevadata[this.selected[this.button]].length > 0 ? Math.ceil(this.sigevadata[this.selected[this.button]].length / 5) : 0
    }
  },
  methods: {
    resetPage () {
      this.pagination.page = 1
    }
  }
}

</script>
<style>
.datatable__expand-content {
  background-color: #CFD8DC;
}
</style>