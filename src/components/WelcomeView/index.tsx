import React from 'react'
import * as S from './styles'

interface WelcomeViewProps {
  search: string
}

export const WelcomeView = ({ search }: WelcomeViewProps) => {
  return (
    <>
      {!search && (
        <S.WelcomeSection>
          <S.WelcomeTitle>Filmes em Destaque</S.WelcomeTitle>
          <S.WelcomeSubtitle>
            Descubra os melhores filmes avaliados
          </S.WelcomeSubtitle>
        </S.WelcomeSection>
      )}
    </>
  )
}
