<template lang="pug">
  .container
    .columns
      .column.is-5.is-offset-4
        .notification(:class="classNotification")
          slot(name="body") Algo anduvo mal
</template>

<style lang="scss" scoped>
  .notification {
    margin: 10px;
  }
</style>

<script>
export default {
  props: {
    classNotification: {
      type: String
    }
  }
}
</script>
