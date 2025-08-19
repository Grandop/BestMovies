export const theme = {
  colors: {
    primary: {
      primary_100: '#0f0f23',
      primary_200: '#1e293b',
      primary_300: '#94a3b833',
      primary_400: '#94a3b8',
      primary_500: '#64748b'
    },
    white: '#fff',
    purple: '#8b5cf6'
  },

  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '20px',
    xl: '24px',
    xxl: '32px'
  },

  fontWeights: {
    regular: '400',
    medium: '500',
    bold: '700'
  },

  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px'
  },

  borderRadius: {
    sm: '6px',
    md: '12px',
    lg: '20px',
    full: '999px'
  }
}

export type ThemeType = typeof theme
