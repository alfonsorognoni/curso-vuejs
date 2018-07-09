<template lang="pug">
  #app
    section.section
      nav.nav.has-shadow
        .container
          .field.has-addons
            input.input.is-large(
              type="text",
              placeholder="Buscar Canciones",
              v-model="searchQuery"
            )
            a.button.is-info.is-large(@click="search") Buscar
            a.button.is-danger.is-large &times;
          p
            small {{ searchMessage }}
      //results
      .container.results
        .columns
          .column(v-for="t in tracks") {{ t.name }} - {{ t.artist }}
</template>

<script>
const tracks = [
  { name: 'Muchacha ojos de papel', artist: 'Almendra' },
  { name: '11 y 6', artist: 'Fito Paez' },
  { name: 'Puente', artist: 'Gustavo Cerati' }
]
export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      tracks: []
    }
  },
  computed: {
    searchMessage () {
      return `Encontrados ${this.tracks.length}`
    }
  },
  methods: {
    search () {
      this.tracks = tracks
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';
  .results {
    margin-top: 50px;
  }
</style>
