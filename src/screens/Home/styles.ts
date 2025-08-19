import { View } from 'react-native'
import styled from 'styled-components'

export const Container = styled(View)`
  flex: 1;
`

export const GradientBackground = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary_100};
  padding: 0 16px;
`

export const MovieSeparator = styled(View)`
  height: 20px;
`
