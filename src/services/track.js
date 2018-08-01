import vueMusicService from './vue-music'

const trackService = {}

trackService.search = function (q) {
  const type = 'track'

  return vueMusicService.get('/search', {
    headers: {
      'Authorization': 'Bearer ' + 'BQCloW3XxphJLuo9CwqTYJg3DwHIAcnqjKlL0DQCHayXemotMG8-2k-6Hmmk35Z_xlOiySE4IsWSXv-Flcxhi1zF04o8JAil7l_L_P6Atx40emsaK9kd5-JNprMLZmj6BRK2lyQd4w2v6kE3rbChHz_TTQSoQ0sD'
    },
    params: {
      q,
      type
    }
  })
    .then(res => res.data)
}

export default trackService
