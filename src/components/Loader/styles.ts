import { Text, View } from 'react-native'
import { styled } from 'styled-components'

export const Container = styled(View)`
  flex: 1;
  background: #0f0f23;
`

export const LoadingContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #0f0f23;
`

export const LoadingText = styled(Text)`
  margin-top: 16px;
  font-size: 16px;
  font-weight: 500;
  color: #8b5cf6;
`
