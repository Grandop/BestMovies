import 'styled-components'

type ThemeType = {
  colors: {
    primary_100: string
    primary_200: string
    primary_300: string
    primary_400: string
    primary_500: string
    white: string
    purple: string
  }

  fontSizes: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    xxl: string
  }

  fontWeights: {
    regular: string
    medium: string
    bold: string
  }

  borderRadius: {
    sm: string
    md: string
    lg: string
    full: string
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
