<template lang="pug">
  #app
    vm-header
    router-view
    vm-footer
</template>

<script>

import VmFooter from '@/components/layout/Footer.vue'
import VmHeader from '@/components/layout/Header.vue'
/*
const tracks = [
  { name: 'Muchacha ojos de papel', artist: 'Almendra' },
  { name: '11 y 6', artist: 'Fito Paez' },
  { name: 'Puente', artist: 'Gustavo Cerati' }
]
*/
/*
const tasks = [
  { title: 'Tarea 1', time: 1 }
]
*/
export default {
  name: 'app',
  components: {
    VmFooter,
    VmHeader
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';
  .results {
    margin-top: 50px;
  }

  .is-active {
    border: 3px solid greenyellow;
  }
</style>
