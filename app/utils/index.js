import { Dimensions } from 'react-native'
import Appearance from '@utils/Appearance'
import Location from '@utils/Location'
import Satellite from '@utils/Satellite'
import NavigationActions from '@utils/NavigationActions'
import AwesomeAlert from '@utils/AwesomeAlert'
import LocalStorage from '@utils/LocalStorage'
import Application from '@utils/Application'
import Debounce from '@utils/Debounce'
import Throttle from '@utils/Throttle'
import OnlineConnection from '@utils/OnlineConnection'
import API from '@utils/API'
import _ from 'lodash'

function SyncData ({ matches }, reSync = false) {
  const updater = {
    isLoading: false
  }
  const takeFrom = reSync ? 0 : this.state.skip
  const skip = matches.slice(takeFrom)
  let data = []
  if (skip.length > 0) {
    data = _.take(skip, this.state.take)
  }
  if (!reSync) {
    updater.matches = this.state.matches.concat(data)
    if (data.length > 0) {
      updater.skip = this.state.skip + this.state.take
    }
  } else {
    updater.matches = data
  }
  this.setState(updater)
}

module.exports = {
  API,
  Appearance,
  Application,
  LocalStorage,
  Location,
  Satellite,
  NavigationActions,
  OnlineConnection,
  AwesomeAlert,
  DeviceWidth: Dimensions.get('window').width,
  DeviceHeight: Dimensions.get('window').height,
  Debounce,
  SyncData,
  Throttle
}
