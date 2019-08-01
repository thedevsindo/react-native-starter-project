import axios from 'axios'
import { API_PROTOCOL, API_HOST } from 'react-native-dotenv'

import AwesomeAlert from '@utils/AwesomeAlert'
import Application from '@utils/Application'
import NavigationActions from '@utils/NavigationActions'
import { signout } from '@store/actions/signOutAction'

const instance = axios.create({
  baseURL: `${API_PROTOCOL}://${API_HOST}`,
  timeout: 100000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'X-Requested-With': 'XMLHttpRequest'
  }
})

instance.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
  return response
}, (error) => {
  if (error.response && error.response.request && error.response.request._url === `${API_PROTOCOL}://${API_HOST}/location`) {
    return false
  }
  if (error.response && error.response.request && error.response.request._url === `${API_PROTOCOL}://${API_HOST}/fcm/token`) {
    return false
  }
  if (error.response && error.response.status === 401) {
    const store = Application.getStore()
    setTimeout(() => {
      const { dispatch } = store
      dispatch(signout(() => {
        dispatch(NavigationActions.goToReset('Welcome'))
      }))
    }, 10)
  }
  if (error.response && error.response.data ) {
    if (!(error.config.data instanceof FormData)) {
      console.log('REQUEST API ERROR :', error.response.data, 'ON -> ', error.response.request._url, error.config && error.config.data ? JSON.parse(error.config.data) : null)
    } else {
      console.log('REQUEST API ERROR :', error.response.data, 'ON -> ', error.response.request._url, error.config)
    }
  }
  if (error.response && error.response.data.exception && error.response.data.exception.message) {
    AwesomeAlert.alert({
      title: 'Opps...',
      body: error.response.data.exception.message,
      buttons: [{ label: 'Ya', color: '#b92bf6', value: true, onPress: () => {} }]
    })
  }
  if (error.response && error.response.data && error.response.data.errors) {
    let errors = ''
    for (let i = 0; i < Object.keys(error.response.data.errors).length; i++) {
      const key = Object.keys(error.response.data.errors)[i]
      for (let j = 0; j < error.response.data.errors[key].length; j++) {
        const message = error.response.data.errors[key][j]
        let prefix = ', '
        if (i === 0 && j === 0) {
          prefix = ''
        }
        errors += `${prefix}${message}`
      }
    }
    AwesomeAlert.alert({
      title: 'Opps',
      body: errors,
      buttons: [{ label: 'Ya', color: '#b92bf6', value: true, onPress: () => {} }]
    })
  }
  return Promise.reject(error)
})

export default instance
