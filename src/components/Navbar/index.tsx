import { SafeAreaView } from 'react-native'
import * as S from './styles'
import { Feather } from '@expo/vector-icons'
import { Logo } from '../Logo'

interface NavbarProps {
  search: string
  setSearch: (value: string) => void
}

export const Navbar = ({ search, setSearch }: NavbarProps) => {
  return (
    <S.NavContainer>
      <SafeAreaView>
        <S.Bar>
          <S.LogoContainer>
            <Logo />
            <S.LogoText>BestMovies</S.LogoText>
          </S.LogoContainer>
          <S.SearchContainer>
            <Feather name="search" size={20} color="#64748b" />
            <S.Input
              placeholder="Buscar filmes..."
              placeholderTextColor="#64748b"
              value={search}
              onChangeText={setSearch}
            />
            {search && (
              <S.ClearButton onPress={() => setSearch('')}>
                <S.ClearIcon>✕</S.ClearIcon>
              </S.ClearButton>
            )}
          </S.SearchContainer>
        </S.Bar>
      </SafeAreaView>
    </S.NavContainer>
  )
}
