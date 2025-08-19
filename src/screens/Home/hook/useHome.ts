import { useState } from 'react'
import { RootStackParamList } from '@/constants/routes'
import {
  useGetMoviesQuery,
  useSearchMoviesQuery
} from '@/store/services/movies'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export const useHome = () => {
  const [search, setSearch] = useState('')
  const { data: moviesData, isLoading } = useGetMoviesQuery()
  const { data: searchData } = useSearchMoviesQuery({ query: search })
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const movies = (search ? searchData?.results : moviesData?.results) || []
  const ordered = [...movies].sort((a, b) => b.vote_average - a.vote_average)

  return { setSearch, isLoading, navigation, ordered, search }
}
