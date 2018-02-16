import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {},
  mutations: {
    getSigevaData(state) {
      state.sigevadata = {
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
          {
            titulo: `Hechos y valores en filosofía teórica, filosofía práctica y filosofía del arte`,
            autores: 'Ibarlucía, Ricardo;  Perez, Diana',
            anio: '2016',
            editorial: 'Centro de Investigaciones Filosóficas/Sociedad Argentina de Análisis Filosófico',
            isbn: '978-987-29834-4-4',
            pais: 'Argentina',
            url: '',
            areadc: 'Filosofía, Ética y Religión'
          }
        ],
        pdl: [
          {
            titulo: `Descripción y evaluación. Algunas observaciones sobre el discurso de la crítica`,
            libro: `Hechos y valores en filosofía teórica, filosofía práctica y filosofía del arte`,
            autores: 'Ibarlucía, Ricardo (Autor)',
            anio: '2016',
            editorial: 'Centro de Investigaciones Filosóficas/Sociedad Argentina de Análisis Filosófico',
            isbn: '978-987-29834-4-4',
            pais: 'Argentina',
            url: '',
            areadc: 'Filosofía, Ética y Religión'
          },
          {
            titulo: `Why do we need Masterpieces?`,
            libro: `Life Configurations`,
            autores: 'Ibarlucía, Ricardo (Autor)',
            anio: '2014',
            editorial: 'De Gruyter',
            isbn: '978-3-11-033869-0',
            pais: 'Alemania',
            url: '',
            areadc: 'Filosofía, Ética y Religión'
          }
        ],
        tep: [],
        dem: [
          {
            titulo: `Boletín de Estética, Nº 38, Verano 2016-2017`,
            autores: 'Ibarlucía, Ricardo (Director)1,2,3;  Bey, Facundo1,2,4;  Attala, Daniel5;  Gallipoli, Milena1,2;  Sarquis, Mauro1,2;  Vignati, Jimena',
            anio: '2017',
            issn: '2408-4417',
            isbn: '',
            pais: 'Argentina',
            url: '',
            areadc: 'Filosofía, Ética y Religión'
          },
          {
            titulo: `Boletín de Estética Nº 34, Verano 2015-2016`,
            autores: 'Ibarlucía, Ricardo (Director)1,2,3;  Bey, Facundo1,2,4;  Attala, Daniel5;  Gallipoli, Milena1,2;  Sarquis, Mauro1,2;  Vignati, Jimena',
            anio: '2016',
            issn: '2408-4417',
            isbn: '',
            pais: 'Argentina',
            url: '',
            areadc: 'Filosofía, Ética y Religión'
          },
          {
            titulo: `Boletín de Estética Nº 35, Otoño 2016`,
            autores: 'Desideri, Fabrizio (Artículo);  Dokic, Jerôme (Artículo);  Dramis, Alejandro (Reseña);  Lahsen, Miguel (Reseña);  Perticone, Carina (Traducción);  Ibarlucía, Ricardo (Director)',
            anio: '2016',
            issn: '2408-4417',
            isbn: '',
            pais: 'Argentina',
            url: 'http://www.boletindeestetica.com.ar/wp-content/uploads/Boletin_de_Estetica_N35.pdf',
            areadc: 'Filosofía, Ética y Religión'
          },
          {
            titulo: `Boletín de Estética Nº 36, Invierno 2016`,
            autores: ' Ratto, Adrián1;  Fabbian, Gisela1;  Bey, Facundo1;  Varnavoglou, Melina2;  Ibarlucía, Ricardo (Director)1',
            anio: '2016',
            issn: '2408-4417',
            isbn: '',
            pais: 'Argentina',
            url: 'http://www.boletindeestetica.com.ar/wp-content/uploads/Boletin-de-Estetica-N36.pdf',
            areadc: 'Filosofía, Ética y Religión'
          },
          {
            titulo: `Boletín de Estética, Nº 37, Primavera 2016`,
            autores: 'Ibarlucía, Ricardo (Director)1,2,3;  Naishtat, Francisco3,4;  Canalleja, Marianela3;  Castelló-Joubert, Valeria2,4;  Bucci, Lucas3,4;  Perticone, Carina5',
            anio: '2016',
            issn: '2408-4417',
            isbn: '',
            pais: 'Argentina',
            url: 'http://www.boletindeestetica.com.ar/wp-content/uploads/Boletin-de-Estetica-N37.pdf',
            areadc: 'Filosofía, Ética y Religión'
          },
          {
            titulo: `Boletín de Estética N° 31`,
            autores: 'Almog,Yael 1;  Bidon-Chanal, Sol2,3;  Ibarlucía, Ricardo (Director)2,4',
            anio: '2015',
            issn: '2408-4417',
            isbn: '',
            pais: 'Argentina',
            url: 'http://www.boletindeestetica.com.ar/wp-content/uploads/Boletin_de-Estetica-N31.pdf',
            areadc: 'Filosofía, Ética y Religión'
          },
          {
            titulo: `Boletín de Estética N° 32`,
            autores: 'Martínez, Mariano1;  Drews López, Pablo2;  Ibarlucía, Ricardo (Director)',
            anio: '2015',
            issn: '2408-4417',
            isbn: '',
            pais: 'Argentina',
            url: 'http://www.boletindeestetica.com.ar/wp-content/uploads/Boletin-de-Estetica-N32.pdf',
            areadc: 'Filosofía, Ética y Religión'
          },
          {
            titulo: `Boletín de Estética N° 33`,
            autores: 'Español, Silvia;  Perez, Diana1;  Perticone, Carina2;  Ibarlucía, Ricardo (Director)3,4',
            anio: '2015',
            issn: '2408-4417',
            isbn: '',
            pais: 'Argentina',
            url: 'http://www.boletindeestetica.com.ar/wp-content/uploads/Boletin-de-Estetica_N_33.pdf',
            areadc: 'Filosofía, Ética y Religión'
          },
          {
            titulo: `Boletín de Estética Nº 30, verano 2014-2015`,
            autores: 'Kuffer, Pula1;  Pachilla, Pablo2;  Ibarlucía, Ricardo (dirección de publicación)3,4',
            anio: '2015',
            issn: '2408-4417',
            isbn: '',
            pais: 'Argentina',
            url: 'http://www.boletindeestetica.com.ar/wp-content/uploads/Boletin-de-Estetica-N-30.pdf',
            areadc: 'Filosofía, Ética y Religión'
          },
          {
            titulo: `El retorno del aura. Dispositivos culturales y prácticas institucionales`,
            autores: 'Cometti, Jean-Pierre (autor)1;  Ibarlucía, Ricardo (traductor)2,3;  Dramis, Alejandro (traductor)',
            anio: '2014',
            issn: '1668-7132',
            isbn: '',
            pais: 'Argentina',
            url: 'http://www.boletindeestetica.com.ar/wp-content/uploads/Boletin_de_Estetica-N28.pdf',
            areadc: 'Filosofía, Ética y Religión'
          },
          {
            titulo: `Boletín de Estética Nº 26, verano 2013-2014`,
            autores: 'Sarquis, Mauro1,2;  Sverdolff, Mariano;  Ibarlucía, Ricardo (dirección de publicación)1,2',
            anio: '2014',
            issn: '1668-7132',
            isbn: '',
            pais: 'Argentina',
            url: 'http://www.boletindeestetica.com.ar/wp-content/uploads/Boletin-de-Estetica-N26.pdf',
            areadc: 'Filosofía, Ética y Religión'
          },
          {
            titulo: `Boletín de Estética Nº 29, primavera 2014`,
            autores: 'Thiebaut, Carlos1;  Ibarlucía, Ricardo (Edición a cargo)2,3',
            anio: '2014',
            issn: '1668-7132',
            isbn: '',
            pais: 'Argentina',
            url: 'http://www.boletindeestetica.com.ar/wp-content/uploads/Boletin_de_Estetica_N29.pdf',
            areadc: 'Filosofía, Ética y Religión'
          },
          {
            titulo: `Boletín de Estética Nº 28, invierno 2014`,
            autores: 'Cometti, Jean-Pierre (autor);1;  Bucci, Lucas (autor)2;  Ibarlucía, Ricardo (Director)3,4',
            anio: '2014',
            issn: '1668-7132',
            isbn: '',
            pais: 'Argentina',
            url: 'http://www.boletindeestetica.com.ar/uncategorized/boletin-de-estetica-n%C2%BA-28/',
            areadc: 'Filosofía, Ética y Religión'
          },
          {
            titulo: `Boletín de Estética Nº 27, otoño 2014`,
            autores: 'Gagnebin, Jeanne Marie (autor); Ibarlucía, Ricardo con la colaboración de Fernando Bruno (Traductor)1,2;  Díaz Villarreal, William (autor)3;  Ibarlucía, Ricardo (dirección de publicación)4,5',
            anio: '2014',
            issn: '1668-7132',
            isbn: '',
            pais: 'Argentina',
            url: 'http://www.boletindeestetica.com.ar/wp-content/uploads/Boletin-de-Estetica-N27.pdf',
            areadc: 'Filosofía, Ética y Religión'
          }
        ]
      }
    },
    setLength(state) {
      const getLength = (item, anio) => state.sigevadata[item].filter(x => x.anio === anio).length
      state.articulosLength = {
        '2014': getLength('articulos', '2014'),
        '2015': getLength('articulos', '2015'),
        '2016': getLength('articulos', '2016'),
        '2017': getLength('articulos', '2017')
      }
      state.librosLength = {
        '2014': getLength('libros', '2014'),
        '2015': getLength('libros', '2015'),
        '2016': getLength('libros', '2016'),
        '2017': getLength('libros', '2017')
      }
      state.pdlLength = {
        '2014': getLength('pdl', '2014'),
        '2015': getLength('pdl', '2015'),
        '2016': getLength('pdl', '2016'),
        '2017': getLength('pdl', '2017')
      }
      state.tepLength = {
        '2014': getLength('tep', '2014'),
        '2015': getLength('tep', '2015'),
        '2016': getLength('tep', '2016'),
        '2017': getLength('tep', '2017')
      }
      state.demLength = {
        '2014': getLength('dem', '2014'),
        '2015': getLength('dem', '2015'),
        '2016': getLength('dem', '2016'),
        '2017': getLength('dem', '2017')
      }
    }
  }
})
