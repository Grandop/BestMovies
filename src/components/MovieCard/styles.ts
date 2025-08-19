import { Image, Text, View } from 'react-native'
import { styled } from 'styled-components'

export const Card = styled(View)`
  width: 160px;
  margin: 8px;
  border-radius: 16px;
  background: #1e293b;
  padding: 12px;
  align-items: center;
`

export const PosterContainer = styled(View)`
  position: relative;
  width: 136px;
  height: 204px;
  border-radius: 12px;
  overflow: hidden;
`

export const Poster = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 12px;
`

export const Title = styled(Text).attrs({
  numberOfLines: 1,
  ellipsizeMode: 'tail'
})`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  margin-top: 6px;
  text-align: center;
  min-height: 40px;
`

export const Date = styled(Text)`
  font-size: 12px;
  color: #fff;
`

export const Rating = styled(Text)<{ $color: string }>`
  font-size: 14px;
  font-weight: bold;
  margin-top: 4px;
  color: ${({ $color }) => $color};
`
