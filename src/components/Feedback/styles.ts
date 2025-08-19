import { Text, View } from 'react-native'
import { styled } from 'styled-components'

export const SearchInfo = styled(View)`
  margin: 16px 0;
`

export const SearchResultText = styled(Text)`
  font-size: 14px;
  color: #e2e8f0;
  text-align: center;
  font-weight: 500;
  background: #1e293b;
  padding: 12px 16px;
  border-radius: 12px;
  margin-bottom: 16px;
`

export const EmptyContainer = styled(View)`
  align-items: center;
  justify-content: center;
  padding: 48px 20px;
  background: #1e293b;
  border-radius: 20px;
  margin: 20px 0;
`

export const EmptyIcon = styled(Text)`
  font-size: 48px;
  margin-bottom: 16px;
`

export const EmptyText = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 8px;
  text-align: center;
`

export const EmptySubtext = styled(Text)`
  font-size: 14px;
  color: #94a3b8;
  text-align: center;
  font-weight: 400;
`

export const LogoContainer = styled(View)`
  margin-bottom: 10px;
`
