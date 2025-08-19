import { ActivityIndicator, SafeAreaView, ScrollView } from 'react-native'
import * as S from './styles'
import { RootStackParamList, Routes } from '@/constants/routes'
import { useGetMoviesByIdQuery } from '@/store/services/movies'
import { RouteProp, useRoute } from '@react-navigation/native'
import { IMAGE_URL } from '@/constants/api'

export const MovieDetail = () => {
  const route = useRoute<RouteProp<RootStackParamList, Routes.MOVIE_DETAIL>>()
  const { id } = route.params
  const { data, isLoading } = useGetMoviesByIdQuery({ id })

  if (isLoading) return <ActivityIndicator size="large" color="#000" />

  return (
    <ScrollView>
      <SafeAreaView>
        <S.Poster
          source={{
            uri: `${IMAGE_URL}${data?.poster_path}`
          }}
        />
        <S.Container>
          <S.Title>{data?.title}</S.Title>
          <S.Info>
            Lançamento:{' '}
            {new Date(data?.release_date ?? '').toLocaleDateString('pt-BR')}
          </S.Info>
          <S.Info>Nota: {data?.vote_average.toFixed(1)}</S.Info>
          <S.Overview>{data?.overview}</S.Overview>
        </S.Container>
      </SafeAreaView>
    </ScrollView>
  )
}
