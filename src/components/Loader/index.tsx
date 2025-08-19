import { ActivityIndicator } from 'react-native'
import * as S from './styles'
import { useTheme } from 'styled-components'

interface LoaderProps {
  title: string
}

export const Loader = ({ title }: LoaderProps) => {
  const theme = useTheme()
  return (
    <S.Container>
      <S.LoadingContainer>
        <ActivityIndicator size="large" color={theme.colors.purple} />
        <S.LoadingText>{title}</S.LoadingText>
      </S.LoadingContainer>
    </S.Container>
  )
}
