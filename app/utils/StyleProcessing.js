class StyleProcessing {
  constructor() {
  }

  List(Obj, callback) {
    for (let prop in Obj) {
      callback({ key: prop, value: Obj[prop] })
    }
  }

  ListArr(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      callback({ key: i, value: arr[i] })
    }
  }
}

module.exports = new StyleProcessing()
