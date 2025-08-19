import { Image, Text, View } from 'react-native'
import { styled } from 'styled-components'

export const Card = styled(View)`
  width: 160px;
  margin: 8px;
  border-radius: 8px;
  background-color: #f9f9f9;
  padding: 8px;
  align-items: center;
`

export const Poster = styled(Image)`
  width: 140px;
  height: 200px;
  border-radius: 8px;
`

export const Title = styled(Text).attrs({
  numberOfLines: 1,
  ellipsizeMode: 'tail'
})`
  font-size: 14px;
  font-weight: bold;
  margin-top: 6px;
  text-align: center;
  min-height: 40px;
`

export const Date = styled(Text)`
  font-size: 12px;
  color: #555;
`

export const Rating = styled(Text)`
  font-size: 14px;
  font-weight: bold;
  margin-top: 4px;
`
