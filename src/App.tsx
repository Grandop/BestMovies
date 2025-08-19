import React from 'react'
import { SafeAreaView } from 'react-native'
import { Provider } from 'react-redux'
import { Navigators } from './navigators'
import { persistor, store } from '@/store'
import { NavigationContainer } from '@react-navigation/native'
import { PersistGate } from 'redux-persist/integration/react'

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Navigators />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}
