import { combineReducers } from 'redux'
import { navData } from '@kernel/router'

import awesomeAlertData from '@store/awesomeAlertData'
import authData from '@store/authData'
import connectionData from '@store/connectionData'
import browserData from '@store/browserData'

const reducer = combineReducers({
  connectionData: connectionData,
  awesomeAlertData: awesomeAlertData,
  authData: authData,
  navData: navData,
  browserData: browserData
})

module.exports = reducer
