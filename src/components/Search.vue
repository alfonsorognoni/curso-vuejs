<template lang="pug">
  main
    vm-notification(v-show="showNotification", :classNotification="notificationClass")
      p(slot="body")
        span(v-if="!hasResults") No se encontraron resultados
        span(v-if="hasResults")  Se encontraron {{ hasResults }} resultados
    vm-loader(v-show="isLoading")
    section.section(v-show="!isLoading")
      nav.nav
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
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
            vm-track(
              :class="{ 'is-active': t.id === selectedTrack }",
              :track="t",
              v-on:select="setSelectedTrack"
            )
</template>

<script>
import trackService from '@/services/track.js'

import VmTrack from '@/components/Track.vue'

import VmLoader from '@/components/shared/Loader.vue'
import VmNotification from '@/components/shared/Notification.vue'
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
  name: 'search',
  components: {
    VmTrack,
    VmLoader,
    VmNotification
  },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      name: 'Alfonso',
      tasks: [],
      newTask: { title: '', time: 0 },
      isLoading: false,
      showNotification: false,
      selectedTrack: '',
      notificationClass: 'is-danger',
      hasResults: 0,
      hasError: false
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
  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) { return }
      this.isLoading = true
      trackService.search(this.searchQuery)
        .then((res) => {
          this.showNotification = true
          // console.log(res)
          this.isLoading = false
          this.tracks = res.tracks.items
          this.notificationClass = (res.tracks.total > 0) ? 'is-success' : 'is-danger'
          this.hasResults = res.tracks.total
        })
        .catch((reason) => {
          // error
          this.showNotification = true
          this.isLoading = false
          this.notificationClass = 'is-danger'
          this.hasError = true
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
    },
    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  }
}
</script>

<style lang="scss">
  .results {
    margin-top: 50px;
  }

  .is-active {
    border: 3px solid greenyellow;
  }
</style>
