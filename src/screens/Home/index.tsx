import { useState } from 'react'
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity
} from 'react-native'
import * as S from './styles'
import { RootStackParamList, Routes } from '@/constants/routes'
import {
  useGetMoviesQuery,
  useSearchMoviesQuery
} from '@/store/services/movies'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { MovieCard } from '@/components/MovieCard'
import { Navbar } from '@/components/Navbar'

export const Home = () => {
  const [search, setSearch] = useState('')
  const { data: moviesData, isLoading } = useGetMoviesQuery()
  const { data: searchData } = useSearchMoviesQuery({ query: search })
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const movies = (search ? searchData?.results : moviesData?.results) || []
  const ordered = [...movies].sort((a, b) => b.vote_average - a.vote_average)

  if (isLoading) return <ActivityIndicator size="large" color="#000" />

  return (
    <S.Container>
      <SafeAreaView>
        <Navbar search={search} setSearch={setSearch} />
        {ordered.length === 0 ? (
          <S.EmptyText>Não encontramos resultados para "{search}"</S.EmptyText>
        ) : (
          <FlatList
            data={ordered}
            numColumns={2}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(Routes.MOVIE_DETAIL, { id: item.id })
                }
              >
                <MovieCard movie={item} />
              </TouchableOpacity>
            )}
          />
        )}
      </SafeAreaView>
    </S.Container>
  )
}
