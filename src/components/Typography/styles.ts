import { Text } from 'react-native'
import type { TypographyProps } from '.'
import styled, { css } from 'styled-components'

export const StyledText = styled(Text)<{
  $fontSize?: TypographyProps['fontSize']
  $color: NonNullable<TypographyProps['color']>
  $fontWeight: NonNullable<TypographyProps['fontWeight']>
  $textAlign: NonNullable<TypographyProps['textAlign']>
}>`
  ${({ theme, $fontSize = 'md', $color, $fontWeight, $textAlign }) => css`
    font-size: ${typeof $fontSize === 'string' || typeof $fontSize === 'number'
      ? theme.fontSizes[$fontSize as keyof typeof theme.fontSizes] || $fontSize
      : theme.fontSizes.md};

    color: ${theme.colors[$color]};
    font-weight: ${theme.fontWeights[$fontWeight]};
    text-align: ${$textAlign};
  `}
`
