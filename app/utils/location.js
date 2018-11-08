export default {
    getCurrentPosition() {
        return new Promise(function(resolve, reject) {
            navigator.geolocation.getCurrentPosition((position) => {
                resolve(position)
            })
        }, (error) => {
            reject(error)
        })
    }
}
