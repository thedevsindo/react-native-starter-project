import { StackActions, NavigationActions } from 'react-navigation'

class AppNavigationActions {
  makeNested (navigate, items, params) {
    for (let i = 0; i < items.length; i++) {
      navigate.routeName = items[i]
      navigate.params = params
      items.shift()
      if (items.length > 0) {
        navigate.action = {}
        this.makeNested(navigate.action, items, params)
      }
      break
    }
    return navigate
  }

  makeNavigationActionsFromNested (navigate) {
    if (navigate.action) {
      this.makeNavigationActionsFromNested(navigate.action)
      navigate.action = Object.assign(navigate.action, NavigationActions.navigate(navigate.action))
    }
  }

  goToNested (to, params) {
    if (typeof to === 'string') {
      to = [to]
    }
    let navigate = {}
    navigate = this.makeNested(navigate, to, params)
    this.makeNavigationActionsFromNested(navigate)
    return NavigationActions.navigate(navigate)
  }

  goToReset (to, params) {
    if (typeof to === 'string') {
      to = [to]
    }
    let navigate = {}
    navigate = this.makeNested(navigate, to, params)
    this.makeNavigationActionsFromNested(navigate)
    return StackActions.reset({
      index: 0,
      key: null,
      actions: [navigate],
    })
  }

  back() {
    return NavigationActions.back()
  }

  getActiveRouteName(navigationState) {
    if (!navigationState) {
      return null
    }
    const route = navigationState.routes[navigationState.index]
    // dive into nested navigators
    if (route.routes) {
      this.getActiveRouteName(route)
    }
    return route.routeName
  }
}

export default new AppNavigationActions()
