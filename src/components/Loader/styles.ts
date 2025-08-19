import { Text, View } from 'react-native'
import { styled } from 'styled-components'
import { Typography } from '../Typography'

export const Container = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary_100};
`

export const LoadingContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary_100};
`

export const LoadingText = styled(Typography).attrs(({ theme }) => ({
  color: 'purple',
  fontSize: theme.fontSizes.md,
  fontWeight: 'medium'
}))`
  margin-top: 16px;
  text-align: center;
`
