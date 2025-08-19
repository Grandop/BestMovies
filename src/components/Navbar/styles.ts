import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styled } from 'styled-components'
import { Typography } from '../Typography'

export const NavContainer = styled(View)`
  background: ${({ theme }) => theme.colors.primary_200};
`

export const Bar = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  gap: 16px;
`

export const LogoContainer = styled(View)`
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

export const SearchContainer = styled(View)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.fontSizes.xs};
  padding: 12px 16px;
`

export const Input = styled(TextInput)`
  flex: 1;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.primary_200};
  padding: 0;
`

export const ClearButton = styled(TouchableOpacity)`
  width: 24px;
  height: 24px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background: ${({ theme }) => theme.colors.primary_300};
  justify-content: center;
  align-items: center;
  margin-left: 8px;
`

export const Category = styled(View)`
  background: ${({ theme }) => theme.colors.primary_300};
  padding: 4px 10px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  margin-left: 8px;
`

export const HeaderRow = styled(View)`
  display: flex;
  flex-direction: row;
`
