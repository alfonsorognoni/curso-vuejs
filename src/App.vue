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
      .container
        p
          small {{ searchMessage }}
      //results
      .container.results
        .columns
          .column(v-for="t in tracks") {{ t.name }} - {{ t.artists[0].name }}
      .container.results
        .columns
          .column

            .field.is-grouped
              p.control.is-expanded
                input.input(
                  v-model="newTask.title",
                  type="text",
                  placeholder="Task Title"
                )
              p.control.is-expanded
                input.input(
                  v-model="newTask.time",
                  type="text",
                  placeholder="Task Time"
                )
              p.control
                a.button.is-info(@click="addTask") Add
              p.control
                a.button.is-danger(@click="cancelTask") Cancel

            p {{ name }}
            ul
              li(v-for="(task, index) in tasks") {{ task.title }} - {{ task.time }}
                a.button.is-danger(@click="removeTask(index)") Remove Task
            p Total time: {{ totalTime }}
</template>

<script>
import trackService from './services/track.js'
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
