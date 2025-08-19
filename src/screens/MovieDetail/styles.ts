import { Image, Text, View } from 'react-native'
import { styled } from 'styled-components'

export const Poster = styled(Image)`
  width: 100%;
  height: 400px;
`

export const Container = styled(View)`
  padding: 16px;
`

export const Title = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`

export const Info = styled(Text)`
  font-size: 14px;
  margin-bottom: 4px;
`

export const Overview = styled(Text)`
  font-size: 14px;
  margin-top: 12px;
  color: #333;
`
