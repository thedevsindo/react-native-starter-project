import EventEmitter from 'events'
import { openAlert, closeAlert } from '@store/actions/awesomeAlertAction'

class AwesomeAlert extends EventEmitter {
  constructor(props) {
    super(props)
    this.store = null
  }

  registerStore (store) {
    this.store = store
  }

  alert (alert) {
    const { dispatch } = this.store
    const initAlert = () => ({
      title: null,
      body: null,
      buttons: [{ label: 'Cancel', color: 'red', value: true }, { label: 'Ok', color: 'red', value: true }]
    })
    setTimeout(() => {
      dispatch(openAlert(Object.assign(initAlert(), alert)))
    }, 100)
    this.emit('updated')
  }

  close (key) {
    return closeAlert(key)
  }
}

module.exports = new AwesomeAlert()
