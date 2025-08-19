import { Text, View } from 'react-native'
import { styled } from 'styled-components'
import { Typography } from '../Typography'

export const WelcomeSection = styled(View)`
  margin: 20px 0 24px 0;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.primary_200};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`

export const WelcomeTitle = styled(Typography).attrs(({ theme }) => ({
  color: 'white',
  fontSize: theme.fontSizes.xl,
  fontWeight: 'bold'
}))`
  text-align: center;
  margin-bottom: 8px;
`

export const WelcomeSubtitle = styled(Typography).attrs(({ theme }) => ({
  color: 'primary_400',
  fontSize: theme.fontSizes.md,
  fontWeight: 'regular'
}))`
  text-align: center;
`
