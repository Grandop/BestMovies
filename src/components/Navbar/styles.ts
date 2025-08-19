import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styled } from 'styled-components/native'

export const NavContainer = styled(View)`
  background: #1e293b;
`

export const Bar = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  gap: 16px;
`

export const LogoContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`

export const LogoText = styled(Text)`
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.5px;
`

export const SearchContainer = styled(View)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  background: #fff;
  border-radius: 12px;
  padding: 12px 16px;
`

export const Input = styled(TextInput)`
  flex: 1;
  font-size: 16px;
  font-weight: 500;
  color: #1e293b;
  padding: 0;
`

export const ClearButton = styled(TouchableOpacity)`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background: #94a3b833;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
`

export const ClearIcon = styled(Text)`
  font-size: 12px;
  color: #64748b;
  font-weight: bold;
`
