import { ActivityIndicator } from 'react-native'
import * as S from './styles'

interface LoaderProps {
  title: string
}

export const Loader = ({ title }: LoaderProps) => {
  return (
    <S.Container>
      <S.LoadingContainer>
        <ActivityIndicator size="large" color="#8b5cf6" />
        <S.LoadingText>{title}</S.LoadingText>
      </S.LoadingContainer>
    </S.Container>
  )
}
