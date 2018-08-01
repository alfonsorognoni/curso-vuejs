<template lang="pug">
  .content
    p
      img(:src="track.album.images[0].url")
    p
      strong {{ track.name }}
      small [{{ track.duration_ms }}]
    p
      audio(controls, :src="track.preview_url", autoplay="true")
</template>

<script>
export default {
  data () {
    return {
      track: {}
    }
  },
  created () {
    this.$bus.$on('set-track', (track) => {
      this.track = track
    })
  }
}
</script>

<style lang="scss" scoped>
  audio {
    height: 54px;
  }
  img {
    width: 124px;
    border-radius: 50%;
  }
</style>
