import update from 'immutability-helper'

const initial = () => {
  return {
    alerts: []
  }
}

function data(state = initial(), action) {
  switch (action.type) {
    case 'AWESOME_ALERT_CLOSE':
      state.alerts.splice(action.key, 1)
      return state
    case 'AWESOME_ALERT_OPEN':
      const newStateOpen = update(state, {
        alerts: { $push: [action.alert] }
      })
      state = newStateOpen
      return state
  }
  return state
}

export default data
