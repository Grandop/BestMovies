import { Text, TextInput, View } from 'react-native'
import { styled } from 'styled-components'

export const Bar = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  background-color: #20232a;
`

export const Logo = styled(Text)`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`

export const Input = styled(TextInput)`
  background-color: #fff;
  border-radius: 8px;
  padding: 6px 10px;
  flex: 1;
  margin-left: 12px;
`
