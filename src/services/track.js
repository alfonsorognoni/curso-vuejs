import vueMusicService from './vue-music'

const trackService = {}

trackService.search = function (q) {
  const type = 'track'

  return vueMusicService.get('/search', {
    headers: {
      'Authorization': 'Bearer ' + 'BQAAVraY1YyqExLXLgYhqaZ_Eh0ONlRP0aSfFz1lDc89cOQgqrKTm1mmb9xssuQRtGsERAHAnt8s5VYiSvW-EKmaJtnRbWL1-eaU9oNzplK_FF_v73qC5xjH_rW-hhNV9qWClVin_duVg_G3FhSq1PirQWfe1zFO'
    },
    params: {
      q,
      type
    }
  })
    .then(res => res.data)
}

export default trackService
