import vueMusicService from './vue-music'

const trackService = {}

trackService.search = function (q) {
  const type = 'track'

  return vueMusicService.get('/search', {
    headers: {
      'Authorization': 'Bearer ' + 'BQAn_QBoOXW8lNmZqyoYLE46yXdQ9AH4LSYXCJvhquBHtAUzQswMvI0AwNcSXNVrGVds8A_46XvA7WOUE7nyvkol--uLqgVk5j9kCSb-cE5wuQPwKyLmP9-e6AAMnSESggYCj68ztpPy94_HyEoxB-S25nPOIKsm'
    },
    params: {
      q,
      type
    }
  })
    .then(res => res.data)
}

export default trackService
