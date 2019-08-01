import React, { Fragment, Component } from 'react'
import { Provider } from 'react-redux'
import kernel from '@kernel'
import { YellowBox, View } from 'react-native'
import PersistGate from '@components/PersistGate/index'
import SplashScreenRN from '@components/SplashScreen'
YellowBox.ignoreWarnings([
  'Remote debugger',
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Warning: componentWillUpdate is deprecated',
  'Warning: ViewPagerAndroid has been extracted'
])

/* eslint no-extend-native: ["error", { "exceptions": ["Array"] }]*/
Array.prototype.merge = function (newArray) {
  for (let i = newArray.length - 1; i > -1; i--) {
    for (let j = 0; j < this.length; j++) {
      if (newArray[i] === this[j]) {
        newArray.splice(i, 1)
      }
    }
  }
  return this.concat(newArray)
}
Array.prototype.removeIfExists = function (array) {
  for (let i = array.length - 1; i > -1; i--) {
    if (this.includes(array[i])) {
      this.splice(i, 1)
    }
  }
  return this
}
Array.prototype.remove = function(from, howmany) {
  this.splice(from, howmany)
}
Array.prototype.move = function(from, to) {
  this.splice(to, 0, this.splice(from, 1)[0])
}

const { data, router } = kernel
const { store, persistor } = data
const AppLayout = router.Layout()

type Props = {}
export default class App extends Component<Props> {

  render() {
    return (
      <Fragment>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppLayout/>
          </PersistGate>
        </Provider>
      </Fragment>
    )
  }
}
