import { Image, Text, View } from 'react-native'
import { styled } from 'styled-components'
import { Typography } from '../Typography'

export const Card = styled(View)`
  width: 160px;
  margin: 8px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.primary_200};
  padding: 12px;
  align-items: center;
`

export const PosterContainer = styled(View)`
  position: relative;
  width: 136px;
  height: 204px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  overflow: hidden;
`

export const Poster = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`

export const Title = styled(Typography).attrs(({ theme }) => ({
  color: 'white',
  fontSize: theme.fontSizes.sm,
  fontWeight: 'bold',
  numberOfLines: 1,
  ellipsizeMode: 'tail'
}))`
  min-height: 40px;
  text-align: center;
  margin-top: 10px;
`

export const Rating = styled(Typography).attrs<{ $color?: string }>(
  ({ theme }) => ({
    fontSize: theme.fontSizes.sm,
    fontWeight: 'bold'
  })
)`
  margin-top: 4px;
  color: ${({ $color }) => $color};
`
