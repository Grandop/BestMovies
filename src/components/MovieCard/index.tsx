import * as S from './styles'
import { MoviesResults } from '@/entities/movies'

interface MovieCardProps {
  movie: MoviesResults
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const color = movie.vote_average >= 6 ? 'green' : 'red'

  return (
    <S.Card>
      <S.Poster
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        }}
      />
      <S.Title>{movie.title}</S.Title>
      <S.Date>
        {new Date(movie.release_date).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: 'short',
          year: 'numeric'
        })}
      </S.Date>
      <S.Rating style={{ color }}>{movie.vote_average.toFixed(1)}</S.Rating>
    </S.Card>
  )
}
