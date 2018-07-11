import vueMusicService from './vue-music'

const trackService = {}

trackService.search = function (q) {
  const type = 'track'

  vueMusicService.get('/search', {
    headers: {
      'Authorization': 'Bearer ' + 'BQDv_B_dFIePQEAZf4iB05mxbclrp1MtgpAKaFsAZwFaMGriXuL54sEzEB3TlISXeghwikzhb-8EXLfB7LtrebtER-UdPbHQOhT6czxPHsxzZ_vqyfay9rP61hHemH-oNHnM79Jfgib3sA'
    },
    params: {
      q,
      type
    }
  })
    .then(res => res.data)
}

export default trackService
