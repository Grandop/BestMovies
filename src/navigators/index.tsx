import React from 'react'
import { RootStackParamList, Routes } from '@/constants/routes'
import { Home } from '@/screens/Home'
import { MovieDetail } from '@/screens/MovieDetail'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator<RootStackParamList>()

export const Navigators = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Routes.HOME} component={Home} />
      <Stack.Screen name={Routes.MOVIE_DETAIL} component={MovieDetail} />
    </Stack.Navigator>
  )
}
