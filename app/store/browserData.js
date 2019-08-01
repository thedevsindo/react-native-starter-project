import update from 'immutability-helper'

const initial = () => {
  return {
    visible: false,
    source: {
      uri: null
    },
    navState: {
      canGoBack: false,
      canGoForward: false,
      loading: false
    }
  }
}

function navStatepdate(state, action) {
  const { navState } = action
  const { url } = navState
  return update(state, {
    navState: { $set: navState },
    source: { uri: { $set: url } }
  })
}

function data(state = initial(), action) {
  switch (action.type) {
    case '@BROWSER/NAVSTATE/UPDATE':
      return navStatepdate(state, action)
    case '@BROWSER/VISIBILITY/SHOW':
      return update(state, {
        visible: { $set: true },
        source: { $set: action.source }
      })
    case '@BROWSER/VISIBILITY/HIDDEN':
      return update(state, {
        visible: { $set: false },
        source: { uri: { $set: null } }
      })
  }
  return state
}

export default data
