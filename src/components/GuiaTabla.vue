<template>
  <v-card
    flat
  >
    <v-card-actions class="mr-2">
      <v-spacer />
      <v-btn-toggle v-model="button">
        <v-row
          justify-center
          wrap
          row
        >
          <v-col cols="12">
            <v-btn
              rounded
              outlined
              small
            >
              {{ $t('articulos') }} ({{ sigevadata.articulos.length }})
            </v-btn>
            <v-btn
              rounded
              outlined
              small
            >
              {{ $t('libros') }} ({{ sigevadata.libros.length }})
            </v-btn>
            <v-btn
              rounded
              outlined
              small
            >
              {{ $t('capitulos') }} ({{ sigevadata.pdl.length }})
            </v-btn>
            <v-btn
              rounded
              outlined
              small
            >
              {{ $t('eventos') }} ({{ sigevadata.tep.length }})
            </v-btn>
            <v-btn
              rounded
              outlined
              small
            >
              {{ $t('demas') }} ({{ sigevadata.dem.length }})
            </v-btn>
          </v-col>
        </v-row>
      </v-btn-toggle>
    </v-card-actions>
    <v-card-text>
      <v-data-table
        v-if="button === 0"
        id="addpointer"
        single-expand
        show-expand
        :expanded="expanded"
        :headers="headersArt"
        :items="sigevadata.articulos"
        item-key="titulo"
        hide-default-footer
        :sort-by="'anio'"
        :sort-desc="true"
        :page.sync="page"
        :items-per-page="5"
        :no-data-text="$t('noarticulos')"
        @page-count="pageCount = $event"
        @click:row="clicked"
      >
        <template
          v-show="transition"
          v-slot:expanded-item="{item}"
          style="position: absolute;bottom: 0;"
        >
          <transition name="slide-fade">
            <td
              v-show="transition"
              id="nopointer"
              colspan="12"
            >
              <v-row
                style="min-width:100%; text-align:start; background-color: #CFD8DC;"
                align="center"
              >
                <v-spacer />
                <v-col cols="4">
                  {{ $t('editorial') }}:
                  <em>{{ item.editorial }}</em>
                  <br> {{ $t('pais') }}:
                  <em>{{ item.pais }}</em>
                  <br> {{ $t('areadc') }}:
                  <em>{{ item.areadc }}</em>
                </v-col>
                <v-col cols="4">
                  {{ $t('issn') }}: {{ item.issn }}
                  <br>{{ $t('doi') }}: {{ item.doi }}
                  <br>{{ $t('referato') }}: {{ item.referato === 2 ? $t('si') : $t('no') }}
                </v-col>
                <v-col
                  v-if="item.url"
                  cols="3"
                >
                  {{ $t('enlace') }}:
                  <v-btn
                    :href="item.url"
                    target="_blank"
                    small
                    text
                    icon
                    color="primary"
                  >
                    <v-icon>{{ mdiLink }}</v-icon>
                  </v-btn>
                </v-col>
                <v-spacer v-else />
              </v-row>
            </td>
          </transition>
        </template>
      </v-data-table>
      <v-data-table
        v-if="button === 1"
        id="addpointer"
        :headers="headers"
        :items="sigevadata.libros"
        item-key="titulo"
        :sort-by="'anio'"
        :items-per-page="5"
        :sort-desc="true"
        hide-default-footer
        :expanded="expanded"
        single-expand
        show-expand
        :no-data-text="$t('nolibros')"
        :page.sync="page"
        @page-count="pageCount = $event"
        @click:row="clicked"
      >
        <template
          v-show="transition"
          v-slot:expanded-item="{item}"
          style="position: absolute;bottom: 0;"
        >
          <transition name="slide-fade">
            <td
              v-show="transition"
              id="nopointer"
              colspan="12"
            >
              <v-row
                style="min-width:100%; text-align:start; background-color: #CFD8DC;"
                align="center"
              >
                <v-spacer />
                <v-col cols="4">
                  <br> {{ $t('pais') }}:
                  <em>{{ item.pais }}</em>
                  <br> {{ $t('areadc') }}:
                  <em>{{ item.areadc }}</em>
                </v-col>
                <v-col cols="4">
                  {{ $t('isbn') }}: {{ item.isbn }}
                </v-col>
                <v-col
                  v-if="item.url"
                  cols="3"
                >
                  {{ $t('enlace') }}:
                  <v-btn
                    :href="item.url"
                    target="_blank"
                    small
                    text
                    icon
                    color="primary"
                  >
                    <v-icon>{{ mdiLink }}</v-icon>
                  </v-btn>
                </v-col>
                <v-spacer v-else />
              </v-row>
            </td>
          </transition>
        </template>
      </v-data-table>
      <v-data-table
        v-if="button === 2"
        id="addpointer"
        :headers="headers"
        :items="sigevadata.pdl"
        :items-per-page="5"
        item-key="titulo"
        :sort-by="'anio'"
        :sort-desc="true"
        hide-default-footer
        :page.sync="page"
        single-expand
        show-expand
        :no-data-text="$t('nocapitulos')"
        :expanded="expanded"
        @page-count="pageCount = $event"
        @click:row="clicked"
      >
        <template
          v-show="transition"
          v-slot:expanded-item="{item}"
          style="position: absolute;bottom: 0;"
        >
          <transition name="slide-fade">
            <td
              v-show="transition"
              id="nopointer"
              colspan="12"
            >
              <v-row
                style="min-width:100%; text-align:start; background-color: #CFD8DC;"
                align="center"
              >
                <v-spacer />
                <v-col cols="4">
                  {{ $t('libro') }}:
                  <em>{{ item.libro }}</em>
                  <br> {{ $t('pais') }}:
                  <em>{{ item.pais }}</em>
                  <br> {{ $t('areadc') }}:
                  <em>{{ item.areadc }}</em>
                </v-col>
                <v-col cols="4">
                  {{ $t('isbn') }}: {{ item.isbn }}
                </v-col>
                <v-col
                  v-if="item.url"
                  cols="3"
                >
                  {{ $t('enlace') }}:
                  <v-btn
                    :href="item.url"
                    target="_blank"
                    small
                    text
                    icon
                    color="primary"
                  >
                    <v-icon>{{ mdiLink }}</v-icon>
                  </v-btn>
                </v-col>
                <v-spacer v-else />
              </v-row>
            </td>
          </transition>
        </template>
      </v-data-table>
      <v-data-table
        v-if="button === 3"
        id="addpointer"
        :headers="headers"
        :items="sigevadata.tep"
        item-key="titulo"
        :sort-by="'anio'"
        :items-per-page="5"
        :sort-desc="true"
        hide-default-footer
        single-expand
        show-expand
        :page.sync="page"
        :expanded="expanded"
        :no-data-text="$t('noeventos')"
        @page-count="pageCount = $event"
        @click:row="clicked"
      >
        <template
          v-show="transition"
          v-slot:expanded-item="{item}"
          style="position: absolute;bottom: 0;"
        >
          <transition name="slide-fade">
            <td
              v-show="transition"
              id="nopointer"
              colspan="12"
            >
              <v-row
                style="min-width:100%; text-align:start; background-color: #CFD8DC;"
                align="center"
              >
                <v-spacer />
                <v-col cols="4">
                  <br> {{ $t('pais') }}:
                  <em>{{ item.pais }}</em>
                  <br> {{ $t('areadc') }}:
                  <em>{{ item.areadc }}</em>
                </v-col>
                <v-col cols="4">
                  {{ $t('issn') }}: {{ item.issn }}
                  <br>{{ $t('isbn') }}: {{ item.isbn }}
                </v-col>
                <v-col
                  v-if="item.url"
                  cols="3"
                >
                  {{ $t('enlace') }}:
                  <v-btn
                    :href="item.url"
                    target="_blank"
                    small
                    text
                    icon
                    color="primary"
                  >
                    <v-icon>{{ mdiLink }}</v-icon>
                  </v-btn>
                </v-col>
                <v-spacer v-else />
              </v-row>
            </td>
          </transition>
        </template>
      </v-data-table>
      <v-data-table
        v-if="button === 4"
        id="addpointer"
        :headers="headersDem"
        :items="sigevadata.dem"
        item-key="titulo"
        :items-per-page="5"
        :sort-by="'anio'"
        :sort-desc="true"
        hide-default-footer
        :page.sync="page"
        :expanded="expanded"
        :no-data-text="$t('nodemas')"
        @page-count="pageCount = $event"
        @click:row="clicked"
      >
        <template
          v-show="transition"
          v-slot:expanded-item="{item}"
          style="position: absolute;bottom: 0;"
        >
          <transition name="slide-fade">
            <td
              v-show="transition"
              id="nopointer"
              colspan="12"
            >
              <v-row
                style="min-width:100%; text-align:start; background-color: #CFD8DC;"
                align="center"
              >
                <v-spacer />
                <v-col cols="4">
                  <br> {{ $t('pais') }}:
                  <em>{{ item.pais }}</em>
                  <br> {{ $t('areadc') }}:
                  <em>{{ item.areadc }}</em>
                </v-col>
                <v-col cols="4">
                  {{ $t('issn') }}: {{ item.issn }}
                  <br>{{ $t('isbn') }}: {{ item.isbn }}
                </v-col>
                <v-col
                  v-if="item.url"
                  cols="3"
                >
                  {{ $t('enlace') }}:
                  <v-btn
                    :href="item.url"
                    target="_blank"
                    small
                    text
                    icon
                    color="primary"
                  >
                    <v-icon>{{ mdiLink }}</v-icon>
                  </v-btn>
                </v-col>
                <v-spacer v-else />
              </v-row>
            </td>
          </transition>
        </template>
        <template
          v-show="transition"
          v-slot:expanded-item="{item}"
          style="position: absolute;bottom: 0;"
        >
          <transition name="slide-fade">
            <td
              v-show="transition"
              id="nopointer"
              colspan="4"
            >
              <v-row>
                <v-col xs5>
                  <v-card-text>
                    {{ $t('editorial') }}:
                    <em>{{ item.pais }}</em>
                    <br> {{ $t('editorial') }}:
                    <em>{{ item.areadc }}</em>
                  </v-card-text>
                </v-col>
                <v-col xs4>
                  <v-card-text>{{ $t('issn') }}: {{ item.issn }}<br> {{ $t('isbn') }}: {{ item.isbn }}</v-card-text>
                </v-col>
                <v-col
                  v-if="item.url"
                  xs3
                >
                  {{ $t('isbn') }}:
                  <v-btn
                    :href="item.url"
                    target="_blank"
                    small
                    text
                    icon
                    outline
                    color="primary"
                  >
                    <v-icon>{{ mdiLink }}</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </td>
          </transition>
        </template>
      </v-data-table>
      <v-pagination
        v-model="page"
        class="mt-7"
        circle
        :length="pageCount"
      />
    </v-card-text>
  </v-card>
</template>
<script>
import { mdiLink } from '@mdi/js'
export default {
  props: { sigevadata: { type: Object, default: () => {} } },
  data () {
    return {
      mdiLink,
      page: 1,
      pageCount: 0,
      transition: false,
      expanded: [],
      button: 0,
      pagination: { sortBy: 'anio', descending: true },
      headers: [
        {
          text: '',
          align: 'left',
          sortable: false,
          value: ''
        },
        {
          text: this.$t('titulo'),
          align: 'left',
          sortable: false,
          value: 'titulo'
        },
        {
          text: this.$t('autores'),
          align: 'left',
          sortable: false,
          value: 'autores'
        },
        {
          text: this.$t('editorial'),
          align: 'left',
          sortable: true,
          value: 'editorial'
        },
        {
          text: this.$t('anio'),
          align: 'left',
          sortable: true,
          value: 'anio'
        }
      ],
      headersArt: [
        {
          text: this.$t('titulo'),
          sortable: false,
          value: 'titulo'
        },
        {
          text: this.$t('autores'),
          sortable: false,
          value: 'autores'
        },
        {
          text: this.$t('revista'),
          sortable: true,
          value: 'revista'
        },
        {
          text: this.$t('anio'),
          sortable: true,
          value: 'anio'
        }
      ],
      headersDem: [
        {
          text: '',
          align: 'left',
          sortable: false,
          value: ''
        },
        {
          text: this.$t('titulo'),
          align: 'left',
          sortable: false,
          value: 'titulo'
        },
        {
          text: this.$t('autores'),
          align: 'left',
          sortable: false,
          value: 'autores'
        },
        {
          text: this.$t('anio'),
          align: 'left',
          sortable: true,
          value: 'anio'
        }
      ]
    }
  },
  methods: {
    clicked (value) {
      const expandir = async () => {
        this.expanded = []
        await setTimeout(() => { this.transition = true }, 100)
        return this.expanded.push(value)
      }
      const retraer = async () => {
        this.transition = false
        await setTimeout(() => { this.expanded = [] }, 250)
      }
      const esIgual = value === this.expanded[0]
      esIgual ? retraer() : expandir()
    }
  }
}
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.6s ease;
}
.slide-fade-leave-active {
  transition: all 0.6s;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(30px);
  opacity: 0;
}
#addpointer {
  cursor: pointer;
}
</style>
