import React from 'react'
import { RootStackParamList, Routes } from '@/constants/routes'
import { Home } from '@/screens/Home'
import { MovieDetail } from '@/screens/MovieDetail'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator<RootStackParamList>()

export const Navigators = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0f0f23'
        }
      }}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name={Routes.HOME}
        component={Home}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          title: '',
          headerBackButtonDisplayMode: 'minimal',
          headerTintColor: '#fff'
        }}
        name={Routes.MOVIE_DETAIL}
        component={MovieDetail}
      />
    </Stack.Navigator>
  )
}
