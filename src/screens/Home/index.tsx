import { FlatList, TouchableOpacity } from 'react-native'
import { useHome } from './hook/useHome'
import * as S from './styles'
import { Routes } from '@/constants/routes'
import { Feedback } from '@/components/Feedback'
import { Loader } from '@/components/Loader'
import { MovieCard } from '@/components/MovieCard'
import { Navbar } from '@/components/Navbar'
import { WelcomeView } from '@/components/WelcomeView'

export const Home = () => {
  const { isLoading, navigation, ordered, setSearch, search } = useHome()

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
