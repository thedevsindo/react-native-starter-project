import { StackActions, NavigationActions } from 'react-navigation'

export default {

  goToNested (to) {
    return NavigationActions.navigate({
      routeName: 'Other',
      action: NavigationActions.navigate({ routeName: 'SignUp' })
    })
  },

  goToReset (routeName) {
    return StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: routeName })],
    })
  }

}
