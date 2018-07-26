<template lang="pug">
  #app
    vm-header
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
      .container
        p
          small {{ searchMessage }}
      //results
      .container.results
        .columns
          .column(v-for="t in tracks")
            vm-track(:track="t")
            | {{ t.name }} - {{ t.artists[0].name }}
    vm-footer
</template>

<script>
import trackService from '@/services/track.js'
import VmFooter from '@/components/layout/Footer.vue'
import VmHeader from '@/components/layout/Header.vue'
import VmTrack from '@/components/Track.vue'
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
    VmHeader,
    VmTrack
  },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      name: 'Alfonso',
      tasks: [],
      newTask: { title: '', time: 0 }
    }
  },
  created: function () {
    // `this` points to the vm instance
    if (localStorage.getItem('tasks')) {
      this.tasks = JSON.parse(localStorage.getItem('tasks'))
    }
  },
  computed: {
    searchMessage () {
      return `Encontrados ${this.tracks.length}`
    },
    totalTime () {
      let total = 0
      for (let index = 0; index < this.tasks.length; index++) {
        total += parseFloat(this.tasks[index].time)
      }
      return total
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) { return }
      trackService.search(this.searchQuery)
        .then((res) => {
          console.log(res)
          this.tracks = res.tracks.items
        })
    },
    addTask () {
      if (this.newTask.title !== '' && this.newTask.time > 0) {
        let task = this.newTask
        this.tasks.push(task)
        this.newTask = { title: '', time: 0 }
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
      }
    },
    cancelTask () {
      this.newTask.title = ''
      this.newTask.time = 0
    },
    removeTask (index) {
      this.tasks.splice(index, 1)
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
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
