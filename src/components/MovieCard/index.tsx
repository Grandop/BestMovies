import * as S from './styles'
import { MoviesResults } from '@/entities/movies'
import { IMAGE_URL } from '@/constants/api'
import { handleRatingColor } from '@/utils/handleRatingColor'

interface MovieCardProps {
  movie: MoviesResults
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const color = handleRatingColor(movie.vote_average)

  return (
    <S.Card>
      <S.PosterContainer>
        <S.Poster
          source={{
            uri: `${IMAGE_URL}${movie.poster_path}`
          }}
        />
      </S.PosterContainer>
      <S.Title>{movie.title}</S.Title>
      <S.Date>
        {new Date(movie.release_date).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: 'short',
          year: 'numeric'
        })}
      </S.Date>
      <S.Rating $color={color}>{movie.vote_average.toFixed(1)}</S.Rating>
    </S.Card>
  )
}
