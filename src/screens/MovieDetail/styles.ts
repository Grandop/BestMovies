import { Image, ScrollView, Text, View } from 'react-native'
import styled from 'styled-components/native'

export const ScrollContainer = styled(ScrollView)`
  flex: 1;
  background-color: #0f0f23;
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
  border-radius: 12px;
  position: absolute;
  bottom: -40px;
  left: 16px;
  border-width: 2px;
  border-color: #0f0f23;
  z-index: 100;
`

export const Container = styled(View)`
  padding: 16px;
  padding-top: 50px;
  background-color: #0f0f23;
  height: 100%;
`

export const Row = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`

export const Title = styled(Text)`
  font-size: 22px;
  font-weight: bold;
  flex: 1;
  color: #fff;
`

export const Rating = styled(Text)<{ $color: string }>`
  font-size: 18px;
  font-weight: bold;
  color: ${({ $color }) => $color};
  margin-left: 12px;
`

export const ChipContainer = styled(View)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 16px;
`

export const Chip = styled(Text)`
  display: flex;
  background-color: #1e293b;
  color: #fff;
  padding: 6px 10px;
  border-radius: 16px;
  font-size: 12px;
  margin-right: 8px;
  margin-bottom: 8px;
`

export const Overview = styled(Text)`
  font-size: 15px;
  line-height: 22px;
  color: #fff;
`
