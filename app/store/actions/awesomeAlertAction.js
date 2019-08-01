export function closeAlert(key) {
  return (dispatch) => {
    dispatch({
      type: 'AWESOME_ALERT_CLOSE',
      key: key
    })
    return Promise.resolve({ key })
  }
}

export function openAlert(alert) {
  return {
    type: 'AWESOME_ALERT_OPEN',
    alert: alert
  }
}
