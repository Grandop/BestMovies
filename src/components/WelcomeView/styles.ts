import { Text, View } from 'react-native'
import { styled } from 'styled-components'

export const WelcomeSection = styled(View)`
  margin: 20px 0 24px 0;
  padding: 20px;
  background: #1e293b;
  border-radius: 16px;
`

export const WelcomeTitle = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin-bottom: 8px;
`

export const WelcomeSubtitle = styled(Text)`
  font-size: 16px;
  color: #94a3b8;
  text-align: center;
  font-weight: 400;
`
