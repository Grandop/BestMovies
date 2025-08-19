import { SafeAreaView } from 'react-native-safe-area-context'
import * as S from './styles'
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components'
import { Logo } from '../Logo'
import { Typography } from '../Typography'

interface NavbarProps {
  search: string
  setSearch: (value: string) => void
}

export const Navbar = ({ search, setSearch }: NavbarProps) => {
  const theme = useTheme()
  return (
    <S.NavContainer>
      <SafeAreaView>
        <S.Bar>
          <S.LogoContainer>
            <Logo />
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
                <Typography
                  color="primary_500"
                  fontSize={theme.fontSizes.xs}
                  fontWeight="bold"
                >
                  ✕
                </Typography>
              </S.ClearButton>
            )}
          </S.SearchContainer>
        </S.Bar>
      </SafeAreaView>
    </S.NavContainer>
  )
}
