import { SafeAreaView } from 'react-native'
import * as S from './styles'
import { RootStackParamList, Routes } from '@/constants/routes'
import { useGetMoviesByIdQuery } from '@/store/services/movies'
import { theme } from '@/theme/theme'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import { RouteProp, useRoute } from '@react-navigation/native'
import { IMAGE_URL } from '@/constants/api'
import { handleRatingColor } from '@/utils/handleRatingColor'
import { Loader } from '@/components/Loader'
import { PopularityBar } from '@/components/PopularityBar'

export const MovieDetail = () => {
  const route = useRoute<RouteProp<RootStackParamList, Routes.MOVIE_DETAIL>>()
  const { id } = route.params
  const { data, isLoading } = useGetMoviesByIdQuery({ id })

  const color = handleRatingColor(data?.vote_average ?? 0)

  if (isLoading) {
    return <Loader title="Carregando detalhes..." />
  }

  return (
    <S.ScrollContainer>
      <S.BackdropWrapper>
        <S.Backdrop
          source={{ uri: `${IMAGE_URL}${data?.backdrop_path}` }}
          resizeMode="cover"
        />
        <S.Overlay />
        <S.Poster
          source={{ uri: `${IMAGE_URL}${data?.poster_path}` }}
          resizeMode="cover"
        />
      </S.BackdropWrapper>
      <SafeAreaView>
        <S.Container>
          <S.Row>
            <S.Title>{data?.title}</S.Title>
            <S.Rating $color={color}>{data?.vote_average.toFixed(1)}</S.Rating>
          </S.Row>
          <S.ChipContainer>
            <S.Chip>
              <Feather
                name="calendar"
                size={16}
                color={theme.colors.primary_500}
              />{' '}
              {new Date(data?.release_date ?? '').toLocaleDateString('pt-BR')}
            </S.Chip>
            <S.Chip>
              <MaterialCommunityIcons
                name="account-group"
                size={16}
                color={theme.colors.primary_500}
              />{' '}
              {data?.vote_count} votos
            </S.Chip>
          </S.ChipContainer>
          <PopularityBar popularity={data?.popularity ?? 0} />
          {data?.overview ? (
            <S.Overview>{data?.overview}</S.Overview>
          ) : (
            <S.Overview>Este filme ainda não possui descrição.</S.Overview>
          )}
        </S.Container>
      </SafeAreaView>
    </S.ScrollContainer>
  )
}
