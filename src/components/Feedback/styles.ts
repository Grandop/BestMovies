import { Text, View } from 'react-native'
import { styled } from 'styled-components'
import { Typography } from '../Typography'

export const SearchInfo = styled(View)`
  margin: 16px 0;
`

export const SearchResultText = styled(Typography).attrs(({ theme }) => ({
  color: 'white',
  fontSize: theme.fontSizes.sm,
  fontWeight: 'medium'
}))`
  text-align: center;
  min-height: 40px;
  padding: 12px 16px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  margin-bottom: 16px;
  background-color: ${({ theme }) => theme.colors.primary_200};
`

export const EmptyContainer = styled(View)`
  align-items: center;
  justify-content: center;
  padding: 48px 20px;
  background: ${({ theme }) => theme.colors.primary_200};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  margin: 20px 0;
`

export const EmptyText = styled(Typography).attrs(({ theme }) => ({
  color: 'white',
  fontSize: theme.fontSizes.md,
  fontWeight: 'bold'
}))`
  margin-bottom: 8px;
  text-align: center;
`

export const EmptySubtext = styled(Typography).attrs(({ theme }) => ({
  color: 'primary_400',
  fontSize: theme.fontSizes.md,
  fontWeight: 'regular'
}))`
  text-align: center;
`

export const LogoContainer = styled(View)`
  margin-bottom: 10px;
`
