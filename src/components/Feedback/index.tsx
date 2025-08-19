import React from 'react'
import * as S from './styles'
import { MoviesResults } from '@/entities/movies'
import { Logo } from '../Logo'

interface FeedbackProps {
  search: string
  ordered: MoviesResults[]
}

export const Feedback = ({ ordered, search }: FeedbackProps) => {
  return (
    <>
      {search && (
        <S.SearchInfo>
          {ordered.length > 0 ? (
            <S.SearchResultText>
              Encontramos {ordered.length} resultado
              {ordered.length !== 1 ? 's' : ''} para "{search}"
            </S.SearchResultText>
          ) : (
            <S.EmptyContainer>
              <S.LogoContainer>
                <Logo />
              </S.LogoContainer>
              <S.EmptyText>Nenhum filme encontrado</S.EmptyText>
              <S.EmptySubtext>Tente buscar por outro termo</S.EmptySubtext>
            </S.EmptyContainer>
          )}
        </S.SearchInfo>
      )}
    </>
  )
}
