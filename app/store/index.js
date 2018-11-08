import { combineReducers } from 'redux'
import { navData } from '../kernel/router'

import authData from './authData'

const reducer = combineReducers({
    authData: authData,
    navData: navData
})

export default reducer
