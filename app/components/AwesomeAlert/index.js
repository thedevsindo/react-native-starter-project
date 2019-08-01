import React from 'react'
import { connect } from 'react-redux'
import { Modal, View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import { Appearance, AwesomeAlert as AwesomeAlertUtils } from '@utils'
import Button from '@components/Button'

type Props = {
  awesomeAlert: Object,
  dispatch: Function
}

class AwesomeAlert extends React.Component<Props> {
  constructor(props) {
    super(props)
  }

  state = {
    swticher: false
  }

  componentDidMount() {
  }

  closeModal(key, button) {
    this.props.dispatch(AwesomeAlertUtils.close(key)).then(() => {
      this.setState({ swticher: !this.state.swticher })
      const { value } = button
      if (button.onPress && typeof button.onPress === 'function') {
        button.onPress.call(null, { value: value || false })
      }
    })
  }

  onPress = ({ alertKey, button }) => {
    this.closeModal(alertKey, button)
  }

  renderAlert = () => {
    const {
      awesomeAlert
    } = this.props
    const alerts = []
    awesomeAlert.alerts.map((alert, alertKey) => {
      const buttons = []
      alert.buttons.map((button, buttonKey) => {
        buttons.push(
          <Button key={buttonKey} style={[{ backgroundColor: button.color, paddingVertical: 10, paddingHorizontal: 50 }, styles.roundedCorner]} label={button.label} onPress={() => { this.onPress({ alertKey, button, buttonKey }) }}/>
        )
        return button
      })
      alerts.push(
        <Modal
            key={alertKey}
            transparent={true}
            animationType="fade"
            onRequestClose={() => {}}>
            <View style={[{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Appearance.Colors.BlackTransparent}]}>
              <View style={[{ backgroundColor: 'white', width: 300 }, styles.roundedCorner ]}>
                <View style={[{ paddingHorizontal: 10, paddingVertical: 10, backgroundColor: '#2c3e50' }, styles.roundedTopCorner]}>
                  <Text style={{fontWeight: 'bold', color: Appearance.Colors.White}}>{alert.title}</Text>
                </View>
                <View style={{ paddingHorizontal: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#333' }}>{alert.body}</Text>
                </View>
                { buttons.length > 0 ? (
                  <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
                    <View style={{ padding: 5, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end', width: '100%' }}>
                      { buttons }
                    </View>
                  </View>
                ) : null }
              </View>
            </View>
        </Modal>
      )
      return alert
    })
    return alerts
  }

  render() {
    const {
      style
    } = this.props
    return (
      <View>
        { this.renderAlert() }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  roundedCorner: {
    borderRadius: 10
  },
  roundedTopCorner: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  }
})

export default connect((store)=>{
  return {
    awesomeAlert: store.awesomeAlertData
  }
})(AwesomeAlert)
