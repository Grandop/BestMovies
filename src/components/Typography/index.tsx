import React from 'react'
import { TextProps } from 'react-native'
import * as S from './styles'
import { DefaultTheme } from 'styled-components/native'

type FontSizeKey = keyof DefaultTheme['fontSizes']
type ColorKey = keyof DefaultTheme['colors']
type FontWeightKey = keyof DefaultTheme['fontWeights']

export interface TypographyProps extends TextProps {
  children: React.ReactNode
  fontSize?: FontSizeKey | number | string
  color?: ColorKey
  fontWeight?: FontWeightKey
  textAlign?: 'left' | 'center' | 'right' | 'justify'
}

export const Typography = ({
  children,
  fontSize = 'lg',
  color = 'white',
  fontWeight = 'regular',
  textAlign = 'left',
  ...rest
}: TypographyProps) => {
  return (
    <S.StyledText
      $fontSize={fontSize}
      $color={color}
      $fontWeight={fontWeight}
      $textAlign={textAlign}
      {...rest}
    >
      {children}
    </S.StyledText>
  )
}
