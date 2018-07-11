import trae from 'trae'
import configService from './config'

const authService = trae.create({
  baseUrl: configService.apiAuthUrl
})

export default authService
