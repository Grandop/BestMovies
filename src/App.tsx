import React from 'react'
import { Provider } from 'react-redux'
import { Navigators } from './navigators'
import { theme } from './theme/theme'
import { persistor, store } from '@/store'
import { NavigationContainer } from '@react-navigation/native'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <Navigators />
          </NavigationContainer>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}
