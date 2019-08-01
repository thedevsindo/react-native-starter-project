import EventEmitter from 'events'

class Application extends EventEmitter {
  constructor(props) {
    super(props)
    this.store = null
  }

  registerStore(store) {
    this.store = store
  }

  getStore() {
    return this.store
  }
}

module.exports = new Application()
