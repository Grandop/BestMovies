import React from 'react'
import { Provider } from 'react-redux'
import { Navigators } from './navigators'
import { theme } from './theme/theme'
import { store } from '@/store'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'styled-components'

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Navigators />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  )
}
