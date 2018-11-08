import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import kernel from 'kernel'
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Remote debugger'])

const { data, router } = kernel
const { store, persistor } = data
const AppLayout = router.Layout()

type Props = {}
export default class App extends Component<Props> {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <AppLayout/>
                </PersistGate>
            </Provider>
        )
    }
}
