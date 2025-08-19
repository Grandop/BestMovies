import { useState } from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import * as S from './styles'
import { RootStackParamList, Routes } from '@/constants/routes'
import {
  useGetMoviesQuery,
  useSearchMoviesQuery
} from '@/store/services/movies'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Feedback } from '@/components/Feedback'
import { Loader } from '@/components/Loader'
import { MovieCard } from '@/components/MovieCard'
import { Navbar } from '@/components/Navbar'
import { WelcomeView } from '@/components/WelcomeView'

export const Home = () => {
  const [search, setSearch] = useState('')
  const { data: moviesData, isLoading } = useGetMoviesQuery()
  const { data: searchData } = useSearchMoviesQuery({ query: search })
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const movies = (search ? searchData?.results : moviesData?.results) || []
  const ordered = [...movies].sort((a, b) => b.vote_average - a.vote_average)

  if (isLoading) {
    return <Loader title="Carregando filmes..." />
  }

  return (
    <S.Container>
      <Navbar search={search} setSearch={setSearch} />
      <S.GradientBackground>
        <Feedback ordered={ordered} search={search} />
        <WelcomeView search={search} />
        {ordered.length > 0 && (
          <FlatList
            data={ordered}
            numColumns={2}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            ItemSeparatorComponent={() => <S.MovieSeparator />}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate(Routes.MOVIE_DETAIL, { id: item.id })
                }
              >
                <MovieCard movie={item} />
              </TouchableOpacity>
            )}
          />
        )}
      </S.GradientBackground>
    </S.Container>
  )
}
