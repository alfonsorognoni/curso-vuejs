import vueMusicService from './vue-music'

const trackService = {}

trackService.search = function (q) {
  const type = 'track'

  return vueMusicService.get('/search', {
    headers: {
      'Authorization': 'Bearer ' + 'BQAeinfNvNyJkUrd4ZnWw_PDcHeHInaWdsARCBed2J6pWvR-2Hk_yZIVrMJ7ZuLjZQRils-2CBMB6QkJiugYRbr3hYNu9HtINXvrt17nAL7MQHkIQRkUiP4-QEz41h_5cPIq9OU8cVkYLBdw_3IgrmBQsIrYBYDI'
    },
    params: {
      q,
      type
    }
  })
    .then(res => res.data)
}

export default trackService
