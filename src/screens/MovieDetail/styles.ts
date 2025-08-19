import { Image, ScrollView, Text, View } from 'react-native'
import styled from 'styled-components'
import { Typography } from '@/components/Typography'

export const ScrollContainer = styled(ScrollView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary_100};
`

export const BackdropWrapper = styled(View)`
  width: 100%;
  height: 250px;
  position: relative;
`

export const Backdrop = styled(Image)`
  width: 100%;
  height: 100%;
`

export const Overlay = styled(View)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
`

export const Poster = styled(Image)`
  width: 120px;
  height: 180px;
  border-radius: ${({ theme }) => theme.fontSizes.xs};
  position: absolute;
  bottom: -40px;
  left: 16px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.primary_100};
  z-index: 100;
`

export const Container = styled(View)`
  padding: 16px;
  padding-top: 50px;
  background-color: ${({ theme }) => theme.colors.primary_100};
  height: 100%;
`

export const Row = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`

export const Title = styled(Typography).attrs(({ theme }) => ({
  color: 'white',
  fontSize: theme.fontSizes.lg,
  fontWeight: 'bold'
}))`
  flex: 1;
`

export const Rating = styled(Typography).attrs<{ $color?: string }>(
  ({ theme }) => ({
    fontSize: theme.fontSizes.lg,
    fontWeight: 'bold'
  })
)`
  margin-left: 12px;
  color: ${({ $color }) => $color};
`

export const ChipContainer = styled(View)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 16px;
`

export const Chip = styled(Typography).attrs(({ theme }) => ({
  color: 'white',
  fontSize: theme.fontSizes.xs
}))`
  line-height: 22px;
  background-color: ${({ theme }) => theme.colors.primary_200};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-right: 8px;
  margin-bottom: 8px;
  padding: 6px 10px;
`

export const Overview = styled(Typography).attrs(({ theme }) => ({
  color: 'white',
  fontSize: theme.fontSizes.sm
}))`
  line-height: 22px;
`
