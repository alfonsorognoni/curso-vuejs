<template lang="pug">
  #app
    section.section
      nav.nav.has-shadow
        .container.field.has-addons
          input.input.is-large(type="text", placeholder="Buscar Canciones")
          a.button.is-info.is-large Buscar
          a.button.is-danger.is-large &times;
      //results
      .container
        .columns
          .column
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';
</style>
